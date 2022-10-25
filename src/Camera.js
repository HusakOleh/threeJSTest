import * as THREE from 'three';
const workField = document.querySelector('#workField');
export const camera = new THREE.PerspectiveCamera(
  45,
  workField.offsetWidth / window.innerHeight,
  0.1,
  1000,
);
