/*
    Scene
        Dunia 3d Model

    Camera
        Untuk melihat scene
        jika ingin menggerakan camera , ubah bagian camera

    Renderer
        Untuk menampilkan hasil camera ke layar
        type : Webgl , ? , ?

*/

// if (WEBGL.isWebGLAvailable()) {

//     // Initiate function or other initializations here
//     // animate();
//     alert("avail")

// } else {

//     var warning = WEBGL.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);

// }

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100)
/*
    Camera 
    1. FOV, how wide is your camera
    2. AspectRatio. tergantung layar
    3. near clip = seberapa dekat yang bisa dilihat kamera  
    4. far clip = seberapa jauh yang bisa dilihat kamera

*/
var renderer = new THREE.WebGLRenderer();

var box = new THREE.BoxGeometry(1, 1, 1) // membuat box dengan ukuran 1,1,1
var boxMat = new THREE.MeshBasicMaterial({
    color: 0x00ff00
}) // set warna ( rgb)
var boxMesh = new THREE.Mesh(box, boxMat)

scene.add(boxMesh)
cam.position.z = 5

renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)
// renderer.render(scene, cam)

window.addEventListener("resize", function () {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth / this.window.innerHeight
    cam.updateProjectionMatrix()
})

function draw() {
    requestAnimationFrame(draw)
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.z += 0.001;
    renderer.render(scene, cam)
}

draw()