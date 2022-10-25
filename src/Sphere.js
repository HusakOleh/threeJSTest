import * as THREE from 'three';

const geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
const material = new THREE.MeshPhongMaterial( {
  color: 0xffffff,
} );
export const sphere = new THREE.Mesh( geometry, material );

sphere.name = 'sphere';
