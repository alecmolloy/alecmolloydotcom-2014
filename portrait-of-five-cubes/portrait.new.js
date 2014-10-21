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
    var ambientLight = new THREE.AmbientLight(0x222222);

    var light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(200, 400, 500);

    var light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light2.position.set(-500, 250, -200);

    scene.add(ambientLight);
    scene.add(light);
    scene.add(light2);


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
            specular: 0xe4d1fd,
            shininess: 100,
            diffuse: 100
        });
        cube = new THREE.Mesh(
            new THREE.CubeGeometry(1, 1, 1), boxMaterial);
        cube.rotation.z += cubeZRotation;
        cube.position.x += cubeExplosion;

        cubeContainer = new THREE.Object3D();
        cubeContainer.add(cube);
        cubeContainer.rotation.y += cubeYRotation * n;
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

    //    if (effectController.newAxes !== axes) {
    //        axes = effectController.newAxes;
    //
    //        fillScene();
    //    }
    if (effectController.cubeExplosion !== cubeExplosion || effectController.cubeYRotation !== cubeYRotation || effectController.cubeZRotation !== cubeZRotation) {
        cubeExplosion = effectController.cubeExplosion;
        cubeYRotation = effectController.cubeYRotation;
        cubeZRotation = effectController.cubeZRotation;

        fillScene();

    }
    renderer.render(scene, camera);
}


function setupGui() {

    effectController = {
        cubeExplosion: 0,
        cubeYRotation: Math.PI * 2 / 5,
        cubeZRotation: Math.PI / 3.09
    };

    var gui = new dat.GUI();
    //    gui.add(effectController, "newAxes").name("Show axes");
    gui.add(effectController, "newCubeExplosion").name("Explode Cube").min(-2).max(2).step(.1);
    gui.add(effectController, "newCubeYRotation").name("Rotate Y");
    gui.add(effectController, "newCubeZRotation").name("Rotate Z");
}

window.onload = function () {
    init();
    fillScene();
    setupGui();
    addToDOM();
    animate();
}
