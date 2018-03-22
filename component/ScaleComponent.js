import { Component } from "./Component";
import { vec3, mat4 } from "../libs/gl-matrix/gl-matrix";

export class ScaleComponent extends Component{
    constructor({owner}) {
        super(owner);
        this.__scale = vec3.create();
    }
    
    get x() {
        return this.__scale[0];
    }

    get y() {
        return this.__scale[1];
    }

    get z() {
        return this.__scale[2];
    }

    set x(x) {
        this.__scale[0] = x;
        //mat4.scale(this.owner.matrix, this.owner.matrix, [x, 1, 1]);
    }

    set y(y) {
        this.__scale[1] = y;
        //mat4.scale(this.owner.matrix, this.owner.matrix, [1, y, 1]);
    }
    
    set z(z) {
        this.__scale[2] = z;
        //mat4.scale(this.owner.matrix, this.owner.matrix, [1, 1, z]);
    }

    scale(matrix){
        mat4.scale(matrix, matrix, this.__scale);
    }

    get tag(){
        return ScaleComponent.tag;
    }

    static get tag(){
        return "SCALE_COMPONENT";
    }
}