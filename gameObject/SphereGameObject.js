import { GameObject } from "./GameObject";
import { Point3D } from "../geometric/Point3D";
import { Color } from "../geometric/Color";
import { SphereRenderComponent } from "../component/SphereRenderComponent";

export class SphereGameObject extends GameObject {
    constructor({point =  new Point3D(0,0,0), color = new Color()}) {
        super({oringin : point, color});
        this.__listComponents.addComponent(new SphereRenderComponent({owner : this}));
        this.render.onLoad();
        this.render.color = color;
    }


    get render() {
        return this.listComponents[SphereRenderComponent.tag];
    }

    get tag(){
        return "SPHERE_OBJECT";
    }
}