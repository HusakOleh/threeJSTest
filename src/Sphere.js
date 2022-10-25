import * as THREE from 'three';


const geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
const material = new THREE.MeshPhongMaterial( {
  color: 0x808080,
} );
const sphere = new THREE.Mesh( geometry, material );

sphere.position.set(5, 0.5, 5);


sphere.name = 'sphere';
sphere.castShadow = true;
sphere.receiveShadow = true;


const sphereObj = document.querySelector('#sphere');

sphereObj.ondragstart = drag;

function drag(event) {

  event.dataTransfer.setData('transferObj', 'sphere');

}


export default sphere;
