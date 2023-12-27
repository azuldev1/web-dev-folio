import * as THREE from 'three';

export class MovableObject {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;

  constructor(
    geometry: THREE.BufferGeometry | THREE.Geometry,
    material: THREE.Material,
    velocity: THREE.Vector3,
    boxWidth: number,
    boxHeight: number,
    boxDepth: number
  ) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.velocity = velocity.clone();
    this.setRandomPosition(boxWidth, boxHeight, boxDepth);
  }

  checkCollisionWith(otherObject: MovableObject): boolean {
    const distance = this.mesh.position.distanceTo(otherObject.mesh.position);
    const combinedRadius = 
      (this.mesh.geometry as THREE.SphereGeometry).parameters.radius +
      (otherObject.mesh.geometry as THREE.SphereGeometry).parameters.radius;
    return distance < combinedRadius;
  }

  setRandomPosition(boxWidth: number, boxHeight: number, boxDepth: number): void {
    this.mesh.position.set(
      (Math.random() - 0.5) * boxWidth,
      (Math.random() - 0.5) * boxHeight,
      (Math.random() - 0.5) * boxDepth
    );
  }

  update(boxWidth: number, boxHeight: number, boxDepth: number): void {
    // Update position
    this.mesh.position.add(this.velocity);

    // Update rotation
    this.mesh.rotation.x += this.velocity.y * 0.05;
    this.mesh.rotation.y += this.velocity.x * 0.05;
    this.mesh.rotation.z += this.velocity.z * 0.05;

    // Collision detection and response
    const halfWidth = boxWidth / 2;
    const halfHeight = boxHeight / 2;
    const halfDepth = boxDepth / 2;

    if (Math.abs(this.mesh.position.x) > halfWidth) {
      this.velocity.x *= -1;
    }
    if (Math.abs(this.mesh.position.y) > halfHeight) {
      this.velocity.y *= -1;
    }
    if (Math.abs(this.mesh.position.z) > halfDepth) {
      this.velocity.z *= -1;
    }
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.mesh);
  }
}
