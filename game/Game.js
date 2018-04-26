import {Scene} from "./Scene";
import { ComponentList } from "../utils/ComponentList";
import { RenderSystem } from "../system/RenderSystem";
import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { LogicSystem } from "../system/LogicSystem";

let instace = undefined;

export class Game {
    constructor(context, scene, camera) {
        if (!instace) {
            this.__context = context;
            this.__scene = scene;
            this.__listComponents = new ComponentList();
            this.__requestAnimFrame = undefined;
            this.__lastUpdateTime = 0;
            this.__projection = mat4.create();
            this.__camera = camera;
            instace = this;
            this.startGameLoop();
            //this.loadGame();
        }

        return instace;
    }

    get context() {
        return this.__context;
    }

    get scene() {
        return this.__scene;
    }

    get projection(){
        return this.__projection;
    }

    get camera() {
        return this.__camera;
    }

    startGameLoop() {
        let Loop = () => {
            this.__requestAnimFrame = window.requestAnimationFrame (Loop);
            this.gameLoop();
        };
        
        Loop();
    }

    stopGame() {
        window.cancelAnimationFrame(this.__requestAnimFrame);
        /**
         * Trazer o resto de remover eventos.
         */
    }

    gameLoop() {
        let deltaTime = (Date.now() - this.__lastUpdateTime) / 1000;
        //if (this.__paused) {
            this.updateGame(deltaTime);
            this.renderGame();
        //}
        this.__lastUpdateTime = Date.now();
    }

    updateGame(deltaTime) {
        LogicSystem.fireUpdateListener(deltaTime);
    }

    renderGame(){
        RenderSystem.fireRenderListener();
    }
}