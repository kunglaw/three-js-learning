var scene = new THREE.Scene(); // make a 3d , yang nantinya di add object benda
var cam = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  100
); // look at that explanation
var renderer = new THREE.WebGLRenderer({ antialias: true }); // what anti alias mean
renderer.setSize(window.innerWidth, window.innerHeight); // biar pas sama layar render nya
/*
    Camera
    1. FOV, how wide is your camera
    2. AspectRatio. tergantung layar
    3. near clip = seberapa dekat yang bisa dilihat kamera
    4. far clip = seberapa jauh yang bisa dilihat kamera

*/

cam.position.z += 4; // posisi awal cam

document.body.appendChild(renderer.domElement); // menaruh renderer dalam body

// MESH terdiri dari Geometry ( bentuk ) dan Material
var box = new THREE.BoxGeometry(2, 1, 2); // buat kubus
var boxMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var cube = new THREE.Mesh(box, boxMat);

// var geometry = new THREE.OctahedronGeometry(1, 0);
// var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// var octaMesh = new THREE.Mesh(geometry, material);
// octaMesh.position.set(2, 0, 0)

scene.add(cube);
scene.add(octaMesh);

function draw() {
  renderer.render(scene, cam);
  requestAnimationFrame(draw); // recursive
}

draw();
