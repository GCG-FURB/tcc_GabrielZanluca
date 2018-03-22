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

  function printMatrix(matrix) {

    console.log(matrix[0] + " " + matrix[4] + " " + matrix[8] + " " + matrix[12] + " ");
    console.log(matrix[1] + " " + matrix[5] + " " + matrix[9] + " " + matrix[13] + " ");
    console.log(matrix[2] + " " + matrix[6] + " " + matrix[10] + " " + matrix[14] + " ");
    console.log(matrix[3] + " " + matrix[7] + " " + matrix[11] + " " + matrix[15] + " ");
    

      console.log(matrix);
  }


    let scene = new Scene();

    let positions = [
        0, 0,
        0, 0.5,
        0.7, 0,
      ];
    let positions2 = [
        -0.1, 0,
        0, -0.5,
        -0.7, 0,
      ];

      let canvas = document.getElementById("glCanvas");
      // @ts-ignore
      let canvasGL = canvas.getContext("experimental-webgl");
      let game = new Game(canvasGL, scene);
      let color1 = new Color({r : 1});
      let color2 = new Color({b : 1});
      let color3 = new Color({g : 1});
      //let triangle = new TriangleGameObject(0, 0, positions, color1);
      //let triangle2 = new TriangleGameObject(0, 0, positions2, color2);

      let p = new Point2D(0,0);

      let cube = new CubeGameObject({point : p, color : color1});
      let cube2 = new CubeGameObject({point : p, color : color2});
      let cube3 = new CubeGameObject({point : p, color : color3});

      let t = cube2.listComponents[TranslateComponent.tag];
      
      mat4.translate(cube3.matrix, cube3.matrix, [-3,0,0]);
      mat4.translate(cube3.matrix, cube3.matrix, [0,2,0]);
      mat4.translate(cube3.matrix, cube3.matrix, [0,1,0]);
      mat4.translate(cube3.matrix, cube3.matrix, [0,0, 1]);
      
      mat4.scale(cube.matrix, cube.matrix, [.5, .5, .5]);
      mat4.scale(cube2.matrix, cube2.matrix, [.2, .2, .2]);
      mat4.scale(cube3.matrix, cube3.matrix, [.2, .2, .2]);
      
      //scene.addGameObject(triangle);
      //scene.addGameObject(triangle2);
      
      scene.addGameObject(cube);
      scene.addGameObject(cube2);
      scene.addGameObject(cube3);
      

      t.x = -3;
      t.y = 2;
      t.y = 1;
      t.x = 0;
      t.z = 1;
      //t.y = 0;

      console.log("CUBO2: ");
      printMatrix(cube2.matrix);
      console.log("CUBO3: ");
      printMatrix(cube3.matrix);