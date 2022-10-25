import * as THREE from 'three';

const workField = document.querySelector('#workField');
const width = workField.offsetWidth;
const height = workField.offsetHeight;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize( width, height );
workField.appendChild( renderer.domElement );

export default renderer;
