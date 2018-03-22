import {Scene} from "./Scene";
import { ComponentList } from "../utils/ComponentList";
import { RenderSystem } from "../system/RenderSystem";
import { mat4 } from "../libs/gl-matrix/gl-matrix";

let instace = undefined;

export class Game {
    constructor(canvas, scene) {
        if (!instace) {
            this.__canvas = canvas;
            this.__scene = scene;
            this.__listComponents = new ComponentList();
            this.__requestAnimFrame = undefined;
            this.__lastUpdateTime = 0;
            instace = this;
            //this.loadGame();
            this.startGameLoop();
            this.__projection = mat4.create();
        }

        return instace;
    }

    get canvas() {
        return this.__canvas;
    }

    get scene() {
        return this.__scene;
    }

    get projection(){
        return this.__projection;
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
        /**
         * LogicSystem
         */
    }

    renderGame(){
        RenderSystem.fireRenderListener();
    }
}