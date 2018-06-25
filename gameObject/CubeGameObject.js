import { GameObject } from "./GameObject";
import { Game } from "../game/Game";
import { CubeRenderComponent } from "../component/CubeRenderComponent";
import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { Point3D } from "../geometric/Point3D";
import { Color } from "../geometric/Color";

export class CubeGameObject extends GameObject{
    constructor({point =  new Point3D(0,0,0), color = new Color()}) {
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