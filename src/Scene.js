import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );


const size = 10;
const divisions = 11;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

export default scene;
