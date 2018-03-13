import { JSUtils } from "../utils/JSUtils";
import { Point2D } from "../geometric/Point2D";
import { ComponentList } from "../utils/ComponentList";
import { Component } from "../component/Component";

export class GameObject {

    constructor(x, y){
        this.__id = JSUtils.generateUUID();
        this.__oringin = new Point2D(x, y);
        this.__listComponents = new ComponentList()
    }

    get id() {
        return this.__id;
    }

    get listComponents(){
        return this.__listComponents;
    }

    get tag() {
        return undefined;
    }
    
    onLoad () {}

    destroy() {
        for (let component of this.__listComponents){
            if(component instanceof Component){
			    component.onDestroy();
		    }
        }

        //this.__layer.listGameObjects =  ArrayUtils.removeElement(this.__layer.listGameObjects, this);
    }

}