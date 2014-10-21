////////////////////////////////////////////////////////////////////////////////
// Ornament axis/angle exercise: add three more cylinders to the ornament
////////////////////////////////////////////////////////////////////////////////
/*global THREE, Coordinates, document, window, dat*/

var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();

function fillScene() {
    scene = new THREE.Scene();

    // LIGHTS
    var ambientLight = new THREE.AmbientLight(0x333333);

    var light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(200, 400, 500);

    var light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light2.position.set(-500, 250, -200);

    var light3 = new THREE.DirectionalLight(0x555555, 1.0);
    light3.position.set(0, -250, -100);

    scene.add(ambientLight);
    scene.add(light);
    scene.add(light2);
    scene.add(light3);


    // CUBE CODE HERE
    var cube, cubeContainer;
    var cubeColors = [
        0xe64242, //red
        0x6bd393, //green
        0xf9994f, //orange
        0xf7f174, //yellow
        0x42b3f9 //blue
    ];

    for (var n = 0; n < 5; n++) {
        var boxMaterial = new THREE.MeshPhongMaterial({
            color: cubeColors[n],
            specular: 0x939393,
            ambient: cubeColors[n],
            shininess: 100
        });
        cube = new THREE.Mesh(
            new THREE.CubeGeometry(1, 1, 1), boxMaterial);
        cube.rotation.z += Math.PI / 3.09;

        cubeContainer = new THREE.Object3D();
        cubeContainer.add(cube);
        cubeContainer.rotation.y += Math.PI * 2 / 5 * n;
        scene.add(cubeContainer);
    }

}

function init() {
    // For grading the window is fixed in size; here's general code:
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
    var canvasRatio = canvasWidth / canvasHeight;

    // RENDERER
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColorHex(0xFFFFFF, 1.0);

    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // CAMERA
    camera = new THREE.PerspectiveCamera(30, canvasRatio, 1, 10000);
    // CONTROLS
    cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
    camera.position.set(-2.5, 0, 3);
    cameraControls.target.set(0, 0, 0);

}

function addToDOM() {
    var container = document.getElementById('container');
    var canvas = container.getElementsByTagName('canvas');
    if (canvas.length > 0) {
        container.removeChild(canvas[0]);
    }
    container.appendChild(renderer.domElement);
}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}

function render() {
    var delta = clock.getDelta();
    cameraControls.update(delta);

    renderer.render(scene, camera);
}


window.onload = function () {
    init();
    fillScene();
    addToDOM();
    animate();
}
