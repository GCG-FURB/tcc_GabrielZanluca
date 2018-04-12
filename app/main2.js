import { Scene } from "../game/Scene";
import { Game } from "../game/Game";
import { TriangleGameObject } from "../gameObject/TriangleGameObject";
import { Color } from "../geometric/Color";
import { CubeGameObject } from "../gameObject/CubeGameObject";
import { Point2D } from "../geometric/Point2D";
import { ScaleComponent } from "../component/ScaleComponent";
import { RotateComponent } from "../component/RotateComponent";
import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { TranslateComponent } from "../component/TranslateComponent";
import { OrthogonalCamera } from "../game/OrthogonalCamera";
import { NewRotateComponent } from "../component/NewRotateComponent";
import { NewScaleComponent } from "../component/NewScaleComponent";
import { NewTranslateComponent } from "../component/NewTranslateComponent";
import { CubeRenderComponent } from "../component/CubeRenderComponent";
import { Point3D } from "../geometric/Point3D";
import { PerspectiveCamera } from "../game/PerspectiveCamera";

  function printMatrix(matrix) {

    console.log(matrix[0] + " " + matrix[4] + " " + matrix[8] + " " + matrix[12] + " ");
    console.log(matrix[1] + " " + matrix[5] + " " + matrix[9] + " " + matrix[13] + " ");
    console.log(matrix[2] + " " + matrix[6] + " " + matrix[10] + " " + matrix[14] + " ");
    console.log(matrix[3] + " " + matrix[7] + " " + matrix[11] + " " + matrix[15] + " ");
    

     // console.log(matrix);
  }
  let scene = new Scene();
  let camera = new OrthogonalCamera({left : -25, right : 25, top : 25, bottom : -25, near : 1, far : 10});
  let cameraP = new PerspectiveCamera({near: 0.1, far : 500, aspect : 1, fovy : 45 * Math.PI / 180})
  console.log(cameraP.projection);
  let canvas = document.getElementById("glCanvas");
  // @ts-ignore
  let canvasGL = canvas.getContext("experimental-webgl");
  let game = new Game(canvasGL, scene, camera);
  let color1 = new Color({r : 1});
  let color2 = new Color({b : 1});
  let color3 = new Color({g : 1});
  let color4 = new Color({g : 1, b: 1});
  let color5 = new Color({g : 1, r: 1});
  let color6 = new Color({b : 1, r: 1});

  let cube = new CubeGameObject({color : color1});
  let cube2 = new CubeGameObject({color : color2});
  let cube3 = new CubeGameObject({color : color3});
  let cube4 = new CubeGameObject({color : color3});
  
  let r1 = cube.listComponents[RotateComponent.tag]; 
      
  r1.onUpdate = (deltaTime) => {
	  r1.z = 2 * deltaTime;
    //r1.y += 0.01;
  }
      
  let t1 = cube.listComponents[TranslateComponent.tag];
  t1.z = -10;
  let t2 = cube2.listComponents[TranslateComponent.tag];
      
  let r2 = cube2.listComponents[RotateComponent.tag];
      
  r2.onUpdate = (deltaTime) => {
	  r2.x = 2 * deltaTime;
    r2.y = 2 * deltaTime;
  }
      
  let r3 = cube3.listComponents[RotateComponent.tag];
  r3.z = (Math.PI/180) * 10;

  let r4 = cube4.listComponents[RotateComponent.tag];
  r4.z = (Math.PI/180) * 10;
  // r3.onUpdate = (deltaTime) => {
	//   //r3.x = 0.3 * deltaTime;
  //   //r3.y = 0.1 * deltaTime;
  //   //r3.z = 0.9 * deltaTime;
  // }
      
  // mat4.translate(cube3.matrix, cube3.matrix, [-3,0,0]);
  // mat4.translate(cube3.matrix, cube3.matrix, [0,2,0]);
  // mat4.translate(cube3.matrix, cube3.matrix, [0,1,0]);
  // mat4.translate(cube3.matrix, cube3.matrix, [0,0, -5]);
  
  mat4.translate(cube4.matrix, cube4.matrix, [-3,0,0]);
  mat4.translate(cube4.matrix, cube4.matrix, [0,2,0]);
  mat4.translate(cube4.matrix, cube4.matrix, [0,1,0]);
  mat4.translate(cube4.matrix, cube4.matrix, [0,0, 2]);
  
  // //mat4.scale(cube.matrix, cube.matrix, [.5, .5, .5]);
  // //mat4.scale(cube2.matrix, cube2.matrix, [.7, .7, .7]);
  let s = cube3.listComponents[ScaleComponent.tag];
  let t3 = cube3.listComponents[TranslateComponent.tag];
  t3.x = -3;
  t3.y = 2;
  t3.y = 1;
  t3.z = -5;
  printMatrix(cube3.matrix);
  
  s.x = 2.2;
  console.log(s.x);
  s.x = 1;
      
  scene.addGameObject(cube);
  scene.addGameObject(cube2);
  scene.addGameObject(cube3);
  scene.addGameObject(cube4);
      
      
  t2.x = 3;
  t2.y = 2;
  t2.y = 1;
  t2.z = -3;
  
  cube3.listComponents[CubeRenderComponent.tag].colorFace(0, color1); //vermelho
  cube3.listComponents[CubeRenderComponent.tag].colorFace(1, color2); //azul
  cube3.listComponents[CubeRenderComponent.tag].colorFace(2, color3); //verde
  cube3.listComponents[CubeRenderComponent.tag].colorFace(3, color4); //turquesa
  cube3.listComponents[CubeRenderComponent.tag].colorFace(4, color5); //amarelo
  cube3.listComponents[CubeRenderComponent.tag].colorFace(5, color6); //roxo


  for (let index = 0; index < 24; index++) {
	let color = new Color({r : Math.random(), g : Math.random(), b :  Math.random()})
    cube2.listComponents[CubeRenderComponent.tag].colorVertex(index, color);
        
  }
      
  console.log("CUBO: ");
  printMatrix(cube.matrix);
  // console.log("CUBO3: ");
  // printMatrix(cube3.matrix);