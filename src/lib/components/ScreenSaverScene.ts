import * as THREE from 'three';
import { MovableObject } from "../../misc/MovableObject";
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import {Wireframe} from 'three/addons/lines/Wireframe.js';
import {WireframeGeometry2} from 'three/addons/lines/WireframeGeometry2.js'; 
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
    const collisionResponses: Map<MovableObject, THREE.Vector3> = new Map();

    // Detect collisions and prepare responses
    movableShapes.forEach((shape, i) => {
        movableShapes.slice(i + 1).forEach(otherShape => {
            if (shape.checkCollisionWith(otherShape)) {
                // Calculate response vectors
                const response1 = shape.velocity.clone().multiplyScalar(-1);
                const response2 = otherShape.velocity.clone().multiplyScalar(-1);

                // Store responses, ensuring only one response per shape
                if (!collisionResponses.has(shape)) {
                    collisionResponses.set(shape, response1);
                }
                if (!collisionResponses.has(otherShape)) {
                    collisionResponses.set(otherShape, response2);
                }
            }
        });
    });

    // Apply collision responses
    collisionResponses.forEach((response, shape) => {
        shape.velocity.copy(response);
    });

    // Update all shapes
    movableShapes.forEach(shape => {
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
        .5,
        300
    );

    // Set camera position
    const boxWidth: number = window.innerWidth * 0.25;
    const boxHeight: number = window.innerHeight * 0.25;
    const boxDepth: number = Math.min(boxWidth, boxHeight);
    camera.position.z = boxDepth;

    // Shared shape vars
    const velocity: THREE.Vector3 = new THREE.Vector3(0.2, 0.2, 0.2);
    const material: LineMaterial = new LineMaterial({
        color: "rgb(104, 166, 166)",
        linewidth: .5, // in pixels
        dashed: true,
        dashSize: 5, // size of the dash
        gapSize: 1, // size of the gap
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });

    // Sphere setup
    const sphereRadius: number = Math.min(window.innerWidth, window.innerHeight) * 0.05;
    const sphereGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(sphereRadius, 16, 16);
    const wireframeSphereGeometry: WireframeGeometry2 = new WireframeGeometry2(sphereGeometry);
    const sphere: MovableObject = new MovableObject(
        wireframeSphereGeometry,
        material,
        velocity,
        boxWidth,
        boxHeight,
        boxDepth
    );
    sphere.addToScene(scene);

// TorusKnot
const torusKnotGeometry: THREE.TorusKnotGeometry = new THREE.TorusKnotGeometry(sphereRadius, 16, 18, 18, 1, 2);
const wireframeTorusKnotGeometry: WireframeGeometry2 = new WireframeGeometry2(torusKnotGeometry);
const torusKnot: MovableObject = new MovableObject(
  wireframeTorusKnotGeometry,
  material,
  velocity,
  boxWidth,
  boxHeight,
  boxDepth
);
torusKnot.addToScene(scene);

// Torus
const torusGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(25, 10, 8, 16);
const wireframeTorusGeometry: WireframeGeometry2 = new WireframeGeometry2(torusGeometry);
const torus: MovableObject = new MovableObject(
  wireframeTorusGeometry,
  material,
  velocity,
  boxWidth,
  boxHeight,
  boxDepth
);
torus.addToScene(scene);

// // Macaroni
// const macaroniGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(28, 10, 10, 16, 3.5);
// const wireframeMacaroniGeometry: WireframeGeometry2 = new WireframeGeometry2(macaroniGeometry);
// const macaroni: MovableObject = new MovableObject(
//   wireframeMacaroniGeometry,
//   material,
//   velocity,
//   boxWidth,
//   boxHeight,
//   boxDepth
// );
// macaroni.addToScene(scene);

    movableShapes = [sphere, torusKnot, torus];


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
