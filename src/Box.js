import * as THREE from 'three';
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( {
  color: 0xffffff,
} );
export const box = new THREE.Mesh( geometry, material );

box.name = 'box';

const boxObj = document.querySelector('#box');
