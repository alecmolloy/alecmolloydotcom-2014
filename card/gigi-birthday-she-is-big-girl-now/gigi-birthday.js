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
    scene.add(ambientLight);
    scene.add(light);
    scene.add(light2);

    // Sky
    var skyUrl = [
        "img/confetti-girl.jpg",
        "img/confetti-girl.jpg",
        "img/confetti-girl.jpg",
        "img/confetti-girl.jpg",
        "img/confetti-girl.jpg",
        "img/confetti-girl.jpg"
    ];
    var skyGeometry = new THREE.CubeGeometry(1000, 1000, 1000);

    var skyMaterialArray = [];
    for (var i = 0; i < 6; i++)
        skyMaterialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(skyUrl[i]),
            side: THREE.BackSide
        }));
    var skyMaterial = new THREE.MeshFaceMaterial(skyMaterialArray);
    var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(skyBox);


    // Ground
    var groundMaterial = new THREE.MeshPhongMaterial({
        color: '#83faff',
        specular: '#ffffff',
        ambient: '#83faff'
    });
    var groundGeometry = new THREE.PlaneGeometry(50, 50);
    var ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.doubleSided = true;
    scene.add(ground);

    // Birthday Cake
    var cake = new THREE.Object3D();

    // Main cake
    var mainCakeMaterial = new THREE.MeshLambertMaterial({
        color: '#ffd2fa',
        specular: '#ffffff',
        ambient: '#ffd2fa'
    });
    var mainCakeGeometry = new THREE.CylinderGeometry(7, 7, 4, 30);
    var mainCake = new THREE.Mesh(mainCakeGeometry, mainCakeMaterial);
    mainCake.position.y = 2;
    cake.add(mainCake);

    //Bottom Frosting
    var bottomCakeFrostingMaterial = new THREE.MeshLambertMaterial({
        color: '#ffffff',
        specular: '#ffffff',
        ambient: '#ffffff'
    });
    var bottomCakeFrostingGeometry = new THREE.CylinderGeometry(7.5, 7.75, .5, 15);
    var bottomCakeFrosting = new THREE.Mesh(bottomCakeFrostingGeometry, bottomCakeFrostingMaterial);
    bottomCakeFrosting.position.y = .25;
    cake.add(bottomCakeFrosting);

    // Birthday Cake Candles
    var candleMaterial = new THREE.MeshLambertMaterial({
        color: '#f9ff64',
        specular: '#ffffff',
        ambient: '#ffffff'
    });
    var candleGeometry = new THREE.CylinderGeometry(.25, .25, 2, 10);
    var candles = new THREE.Object3D();
    for (var i = 1; i <= 16; i++) {
        var candleMesh = new THREE.Mesh(candleGeometry, candleMaterial);
        var angle = 90 / i;
        console.log(i);
        candleMesh.position.y = 5;
        candleMesh.position.x = 5 * Math.cos(angle);
        candleMesh.position.z = 5 * Math.sin(angle);
        candles.add(candleMesh);
    }
    cake.add(candles);


    scene.add(cake);
    // Text


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
    camera = new THREE.PerspectiveCamera(30, canvasRatio, 1, 1000000);
    // CONTROLS
    cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
    camera.position.set(-100, 50, 15);
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
};