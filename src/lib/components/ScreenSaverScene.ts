import * as THREE from 'three';
import { MovableObject } from "../../misc/MovableObject";
import { browser } from '$app/environment';

// Variables
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer | undefined;
let movableShapes: MovableObject[] = [];
let boxWidth: number;
let boxHeight: number;
let boxDepth: number;

// Function to update movable objects
function updateMovableObjects(): void {
    movableShapes.forEach((shape, i) => {
        movableShapes.slice(i + 1).forEach(otherShape => {
            if (shape.checkCollisionWith(otherShape)) {
                shape.velocity.multiplyScalar(-1);
                otherShape.velocity.multiplyScalar(-1);
            }
        });
        shape.update(boxWidth, boxHeight, boxDepth);
    });
}

// Animation function (to be initialized in client-side context)
let animate: () => void;

// Only execute if in the browser environment
if (browser) {
    // Initialize Scene and Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Set camera position
    const boxWidth: number = window.innerWidth * 0.25;
    const boxHeight: number = window.innerHeight * 0.25;
    const boxDepth: number = Math.min(boxWidth, boxHeight);
    camera.position.z = boxDepth;

    // Shared shape vars
    const velocity: THREE.Vector3 = new THREE.Vector3(0.3, 0.3, 0.3);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
        color: "rgb(104, 166, 166)",
        wireframe: true
    });

    // Sphere setup
    const sphereRadius: number = Math.min(window.innerWidth, window.innerHeight) * 0.03;
    const sphereGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(sphereRadius, 16, 16);
    const sphere: MovableObject = new MovableObject(
        sphereGeometry,
        material,
        velocity,
        boxWidth,
        boxHeight,
        boxDepth
    );
    sphere.addToScene(scene);

    // TorusKnot
const torusKnotGeometry: THREE.TorusKnotGeometry = new THREE.TorusKnotGeometry(20, 3, 30, 16);
const torusKnot: MovableObject = new MovableObject(
  torusKnotGeometry,
  material,
  velocity,
  boxWidth,
  boxHeight,
  boxDepth
);
torusKnot.addToScene(scene);

// Torus
const torusGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(15, 3, 8, 25);
const torus: MovableObject = new MovableObject(
  torusGeometry,
  material,
  velocity,
  boxWidth,
  boxHeight,
  boxDepth
);
torus.addToScene(scene);

// Macaroni
const macaroniGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(12, 8, 16, 50);
const macaroni: MovableObject = new MovableObject(
  macaroniGeometry,
  material,
  velocity,
  boxWidth,
  boxHeight,
  boxDepth
);
macaroni.addToScene(scene);

    movableShapes = [sphere , torusKnot, torus, macaroni ];


    animate = function(): void {
        if (renderer) {
            requestAnimationFrame(animate);
            updateMovableObjects();
            renderer.render(scene, camera);
        }
    };
}

// Function to create the scene
export function createScene(canvasElement: HTMLCanvasElement): void {
    if (browser) {
        renderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true, alpha: true });
        onWindowResize();
        animate();
    }
}

// Function to handle window resize
export function onWindowResize(): void {
    if (browser && camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Update the box dimensions
        boxWidth = window.innerWidth * 0.25;
        boxHeight = window.innerHeight * 0.25;
        boxDepth = Math.min(boxWidth, boxHeight);
    }
}
