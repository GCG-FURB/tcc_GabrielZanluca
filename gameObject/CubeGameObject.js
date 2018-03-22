import { GameObject } from "./GameObject";
import { Game } from "../game/Game";
import { CubeRenderComponent } from "../component/CubeRenderComponent";
import { TranslateComponent } from "../component/TranslateComponent";
import { RotateComponent } from "../component/RotateComponent";
import { ScaleComponent } from "../component/ScaleComponent";
import { mat4 } from "../libs/gl-matrix/gl-matrix";

export class CubeGameObject extends GameObject{
    constructor({point, color}) {
        super(point.x, point.y);
        let _gl = new Game().canvas;
        this.__matrix = mat4.create();
        this.__listComponents.addComponent(new CubeRenderComponent({owner : this, gl :_gl, positions : point, color : color}));
        this.__listComponents.addComponent(new TranslateComponent({owner: this}));
        this.__listComponents.addComponent(new RotateComponent({owner: this}));
        this.__listComponents.addComponent(new ScaleComponent({owner: this}));
    }

    get matrix(){
        return this.__matrix;
    }

    set matrix(matrix){
        this.__matrix = matrix;
    }


    get translate(){
        return this.listComponents[TranslateComponent.tag];
    }

    get rotate() {
        return this.listComponents[RotateComponent.tag];
    }

    get scale() {
        return this.listComponents[ScaleComponent.tag];
    }

    get tag(){
        return "CUBE_OBJECT";
    }
}