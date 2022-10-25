import * as THREE from 'three';




const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( {
  color: 0x808080,
} );
const box = new THREE.Mesh( geometry, material );

box.position.set(0, 0.5, 0);

box.name = 'box';
box.castShadow = true;
box.receiveShadow = true;


const boxObj = document.querySelector('#box');

boxObj.ondragstart = drag;

function drag(event) {

  event.dataTransfer.setData('transferObj', 'box');

}


export default box;
