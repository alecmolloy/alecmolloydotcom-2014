/*global THREE, Coordinates, $, document, window*/

var camera, scene, renderer;
var windowScale;
var cameraControls;
var clock = new THREE.Clock();
var frame = 0;
var heart;
var box;

function drawHeart() {

    var heartMaterial = new THREE.MeshPhongMaterial({
        ambient: 0xFFFFFF,
        color: 0xE73B7C,
        shininess: 100,
        shading: THREE.FlatShading,
        wireframe: false,
        side: THREE.DoubleSide
    });

    var icosahedronGeometry = new THREE.IcosahedronGeometry();

    heart = new THREE.Mesh(icosahedronGeometry, heartMaterial);
    heart.position.x = 0; // centered at origin
    heart.position.y = 0; // centered at origin
    heart.position.z = 0; // centered at origin
    heart.rotation.z = 12 * Math.PI / 180;

    box = new THREE.Object3D();
    box.add(heart);
    box.rotation.z = 0 * Math.PI / 180;

    scene.add(box);

}

function init() {
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
    var canvasRatio = canvasWidth / canvasHeight;
    // SCENE
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xFFFFFF, 0, 4000);
    // LIGHTS
    scene.add(new THREE.AmbientLight(0x555555));
    var light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
    light.position.set(1500, 1500, 2000);

    scene.add(light);

    // RENDERER

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(scene.fog.color, 1);

    var container = document.getElementById('section01-room');
    container.appendChild(renderer.domElement);


    // CAMERA
    camera = new THREE.PerspectiveCamera(50, canvasRatio, 1, 4000);
    camera.position.set(5, 5, 0);
    // CONTROLS
    cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);

}

function render() {
    var delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
//    while (frame++ < 60) {
//        heart.scale.x = 1;
//        heart.scale.y = 1;
//        heart.scale.z = 1;
//    }
    render();
}

init();
drawHeart();
animate();
