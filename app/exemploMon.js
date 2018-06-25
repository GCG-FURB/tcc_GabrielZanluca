import { Scene } from "../game/Scene";
import { Point3D } from "../geometric/Point3D";
import { PerspectiveCamera } from "../game/PerspectiveCamera";
import { Game } from "../game/Game";
import { Color } from "../geometric/Color";
import { CubeGameObject } from "../gameObject/CubeGameObject";
// @ts-ignore
import { PointLight } from "../Light/PointLight";
import { SphereGameObject } from "../gameObject/SphereGameObject";
import { DirectionalLight } from "../Light/DirectionalLight";
import { MemoryUsageComponent } from "../component/PerformanceComponent/MemoryUsageComponent";
import { FPSComponent } from "../component/PerformanceComponent/FPSComponent";
import { MoveCameraComponent } from "../component/MoveCameraComponent";

let scene = new Scene();

let canvas = document.getElementById("glCanvas");
// @ts-ignore
canvas.width = window.innerWidth * window.devicePixelRatio;
// @ts-ignore
canvas.height = window.innerHeight * window.devicePixelRatio;
// @ts-ignore
let context = canvas.getContext("webgl2");
let camera = new PerspectiveCamera({near: 0.1, far : 500, aspect : window.innerWidth/window.innerHeight, fovy : 45 * Math.PI / 180, position : new Point3D(5, 8, 15)});

let game = new Game(context, scene, camera);

let red = new Color({r : 1});
let blue = new Color({b : 1});
let white = new Color({r : 1, g : 1, b : 1});
// @ts-ignore
let turquoise = new Color({g : 1, b: 1});
// @ts-ignore
let yellow = new Color({g : 1, r: 1});
// @ts-ignore
let purple = new Color({b : 1, r: 1});

let cube = new CubeGameObject({color : red});
let sphere = new SphereGameObject({color : blue, radius : 1, latitudeBands : 20, longitudeBands : 20});

let directLight = new DirectionalLight({color : white, position : new Point3D(2, 8, 5)});
// let lp = new PointLight({position : new Point3D(20, 30, 50), shininess : 25.9, secondColor : red, color : red});



// @ts-ignore
sphere.rotation.onUpdate = (deltaTime) => {
    cube.rotation.y = 0.9 * deltaTime;
    sphere.rotation.x = 0.9 * deltaTime;
}

// for (let i =0;  i < 320; i++){
//     let div  = i%2;
//     if (div == 0) 
//         sphere.render.colorFace(i, new Color({r : Math.random(), g : Math.random(), b :  Math.random()}));
// }


// sphere.render.colorFace(0, red);
// sphere.render.colorFace(1, white);
// sphere.render.colorFace(2, red);
// sphere.render.colorFace(3, white);
// sphere.render.colorFace(4, red);
// sphere.render.colorFace(5, white);
// sphere.render.colorFace(6, red);
// sphere.render.colorFace(7, white);
// sphere.render.colorFace(8, red);
// sphere.render.colorFace(9, white);
// sphere.render.colorFace(10, red);
// sphere.render.colorFace(11, white);
// sphere.render.colorFace(12, red);
// sphere.render.colorFace(13, white);
// sphere.render.colorFace(14, red);
// sphere.render.colorFace(15, white);
// sphere.render.colorFace(16, red);
// sphere.render.colorFace(17, white);
// sphere.render.colorFace(18, red);
// sphere.render.colorFace(19, white);
// sphere.render.colorFace(20, red);


// cube.translate.z = -5;
sphere.translate.x = 3;

scene.addGameObject(cube);
scene.addGameObject(sphere);

let cm = new MemoryUsageComponent({owner : cube});

let fps = new FPSComponent({owner : cube});

let move = new MoveCameraComponent({owner : camera});

cm.onRender = function() {
    let element = document.getElementById("Memory");
    element.innerHTML = 'Memoria : ' + this.memoryUsage;
}

fps.onRender = function() {
    let element = document.getElementById("FPS");
    element.innerHTML = 'FPS : ' + this.FPS;
}

// game.listComponents.addComponent(fps);

// cube.listComponents.addComponent(cm);

camera.listComponents.addComponent(move);
scene.addLight(directLight);


// cube.listComponents.addComponent(fps);
