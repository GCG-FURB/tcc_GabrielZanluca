import { Scene } from "../game/Scene";
import { Game } from "../game/Game";
import { TriangleGameObject } from "../gameObject/TriangleGameObject";




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
      let triangle = new TriangleGameObject(0, 0, positions);
      let triangle2 = new TriangleGameObject(0, 0, positions2);
  
      scene.addGameObject(triangle);
      scene.addGameObject(triangle2);