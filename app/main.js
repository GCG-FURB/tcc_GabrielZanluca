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
import { orthogonalCamera } from "../game/orthogonalCamera";
import { NewRotateComponent } from "../component/NewRotateComponent";
import { NewScaleComponent } from "../component/NewScaleComponent";
import { NewTranslateComponent } from "../component/NewTranslateComponent";
import { CubeRenderComponent } from "../component/CubeRenderComponent";
import { Point3D } from "../geometric/Point3D";

  function printMatrix(matrix) {

    console.log(matrix[0] + " " + matrix[4] + " " + matrix[8] + " " + matrix[12] + " ");
    console.log(matrix[1] + " " + matrix[5] + " " + matrix[9] + " " + matrix[13] + " ");
    console.log(matrix[2] + " " + matrix[6] + " " + matrix[10] + " " + matrix[14] + " ");
    console.log(matrix[3] + " " + matrix[7] + " " + matrix[11] + " " + matrix[15] + " ");
    

      console.log(matrix);
  }


    let scene = new Scene();
    let camera = new orthogonalCamera({left : -25, right : 25, top : 25, bottom : -25, near : 1, far : 10});

    let positions = [
      1.0,  1.0,
     -1.0,  1.0,
      1.0, -1.0
      ];
    let positions2 = [
        -0.1, 0,
        0, -0.5,
        -0.7, 0,
      ];

      let canvas = document.getElementById("glCanvas");
      // @ts-ignore
      let canvasGL = canvas.getContext("experimental-webgl");
      let game = new Game(canvasGL, scene, camera);
      let color1 = new Color({r : 1});
      let color2 = new Color({b : 1});
      let color3 = new Color({g : 1});
      let p = new Point3D(-0.0,0.0, -2.0);
      let triangle = new TriangleGameObject({points : positions, color: color1, oringin : p});
      //triangle.translate.z = -4.0;
      //let triangle2 = new TriangleGameObject(0, 0, positions2, color2);

      // let p = new Point2D(0,0);

      // let cube = new CubeGameObject({point : p, color : color1});
      // let cube2 = new CubeGameObject({point : p, color : color2});
      // let cube3 = new CubeGameObject({point : p, color : color3});
      
      // let r1 = cube.listComponents[RotateComponent.tag]; 
      
      // r1.onUpdate = (deltaTime) => {
      //   r1.z = 2 * deltaTime;
      //   // r1.y += 0.01;
      // }
      
      // let t = cube2.listComponents[NewTranslateComponent.tag];
      
      // let r2 = cube2.listComponents[RotateComponent.tag];
      
      // r2.onUpdate = (deltaTime) => {
      //   r2.x = 2 * deltaTime;
      //   r2.y = 2 * deltaTime;
      // }
      
      // let r3 = cube3.listComponents[RotateComponent.tag];
      // r3.onUpdate = (deltaTime) => {
      //   // r3.x += 0.01;
      //   r3.y = 0.1 * deltaTime;
      // }
      
      // mat4.translate(cube3.matrix, cube3.matrix, [-3,0,0]);
      // mat4.translate(cube3.matrix, cube3.matrix, [0,2,0]);
      // mat4.translate(cube3.matrix, cube3.matrix, [0,1,0]);
      // mat4.translate(cube3.matrix, cube3.matrix, [0,0, -1]);
      
      // //mat4.scale(cube.matrix, cube.matrix, [.5, .5, .5]);
      // //mat4.scale(cube2.matrix, cube2.matrix, [.7, .7, .7]);
      // let s = cube3.listComponents[NewScaleComponent.tag];
      // s.z = s.y = s.x = 1.2;

      //mat4.scale(cube3.matrix, cube3.matrix, [1.2, 1.2, 1.2]);
      
      scene.addGameObject(triangle);
      printMatrix(triangle.matrix);
      //scene.addGameObject(triangle2);
      
      // scene.addGameObject(cube);
      // scene.addGameObject(cube2);
      // scene.addGameObject(cube3);
      
      
      // t.x = 3;
      // t.y = 2;
      // t.y += 1;
      // //t.x = 0;
      // t.z = -2;
      // //t.y = 0;
      // cube2.listComponents[CubeRenderComponent.tag].colorFace(1, color3);
      // cube2.listComponents[CubeRenderComponent.tag].colorFace(3, color3);
      // cube2.listComponents[CubeRenderComponent.tag].colorFace(5, color3);


      // for (let index = 0; index < 24; index++) {
      //   let color = new Color({r : Math.random(), g : Math.random(), b :  Math.random()})
      //   cube2.listComponents[CubeRenderComponent.tag].colorVertex(index, color);
        
      // }
      
      // console.log("CUBO2: ");
      // printMatrix(cube2.matrix);
      // console.log("CUBO3: ");
      // printMatrix(cube3.matrix);