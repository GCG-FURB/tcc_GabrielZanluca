import { GameObject } from "./GameObject";
import { Game } from "../game/Game";
import { CubeRenderComponent } from "../component/CubeRenderComponent";
import { TranslateComponent } from "../component/TranslateComponent";
import { RotateComponent } from "../component/RotateComponent";
import { ScaleComponent } from "../component/ScaleComponent";
import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { NewRotateComponent } from "../component/NewRotateComponent";
import { NewScaleComponent } from "../component/NewScaleComponent";
import { NewTranslateComponent } from "../component/NewTranslateComponent";
import { Point3D } from "../geometric/Point3D";

export class CubeGameObject extends GameObject{
    constructor({point =  new Point3D(0,0,0), color}) {
        super({oringin : point, color});
        this.__listComponents.addComponent(new CubeRenderComponent({owner : this}));
        this.render.onLoad();
        this.render.color = color;
    }

    get render() {
        return this.listComponents[CubeRenderComponent.tag];
    }

    get tag(){
        return "CUBE_OBJECT";
    }
}