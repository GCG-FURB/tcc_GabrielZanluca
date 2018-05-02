import { Scene } from "../game/Scene";
import { Point3D } from "../geometric/Point3D";
import { PerspectiveCamera } from "../game/PerspectiveCamera";
import { Game } from "../game/Game";
import { Color } from "../geometric/Color";
import { CubeGameObject } from "../gameObject/CubeGameObject";

let scene = new Scene();
let camera = new PerspectiveCamera({near: 0.1, far : 500, aspect : 1, fovy : 45 * Math.PI / 180, position : new Point3D(0, 0, 15)});

let canvas = document.getElementById("glCanvas");
// @ts-ignore
let context = canvas.getContext("webgl2");

let game = new Game(context, scene, camera);

let red = new Color({r : 1});
let blue = new Color({b : 1});
let green = new Color({g : 1});
let turquoise = new Color({g : 1, b: 1});
let yellow = new Color({g : 1, r: 1});
let purple = new Color({b : 1, r: 1});

let cube = new CubeGameObject({color : red});
let cubeChild = new CubeGameObject({color : blue});
let cubeChild2 = new CubeGameObject({color : green});

// cube.rotation.z = (Math.PI/180) * 40;

cube.rotation.onUpdate = (deltaTime) => {
    cube.rotation.z = 2 * deltaTime;
}

cubeChild.rotation.onUpdate = (deltaTime) => {
    cubeChild.rotation.z = 1 * deltaTime;
}

cubeChild2.rotation.onUpdate = (deltaTime) => {
    cubeChild2.rotation.z = 3 * deltaTime;
}

cubeChild.translate.y = 3

cubeChild2.translate.y = 3;

cube.translate.y = 1;
cube.translate.z = -5;
cube.addGameOdbject(cubeChild);
cubeChild.addGameOdbject(cubeChild2);

scene.addGameObject(cube);