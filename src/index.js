import * as THREE from 'three';
import figureLibrary from "./FigureLibrary";

import camera from "./Camera";
import renderer from "./Renderer";

import scene from "./Scene";
import light from "./AmbientLight";

import gridHelper from "./GridHelper";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 10, 5, 0 );
controls.update();

scene.add( light );
scene.add( gridHelper );

const pointer = new THREE.Vector2();
const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const raycaster = new THREE.Raycaster();

const workField = document.querySelector('#workField');
const library = document.querySelector('#program__library');

library.addEventListener('dragstart', event => {

})

workField.addEventListener("dragover", (event) => {

  event.preventDefault();
});

window.addEventListener('drop', event => {
  event.preventDefault();

  pointer.x = ( event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  planeNormal.copy(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
  raycaster.setFromCamera( pointer, camera );
  raycaster.ray.intersectPlane(plane, intersectionPoint)




  const transferObj = event.dataTransfer.getData('transferObj');
  figureLibrary.forEach(el => {
    if (el.name === transferObj) {
      const elClone = el.clone();
      scene.add(elClone);
      elClone.position.copy(intersectionPoint);
    }
  })
})

function animate() {
  requestAnimationFrame( animate );

  controls.update();

  renderer.render( scene, camera );
}

animate();
