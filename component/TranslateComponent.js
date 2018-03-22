import { Component } from "./Component";
import { vec3, mat4 } from "../libs/gl-matrix/gl-matrix";

export class TranslateComponent extends Component{
    constructor({owner}) {
        super(owner);
        this.__translation = vec3.create();
    }

    get x() {
        return this.__translation[0];
    }

    get y() {
        return this.__translation[1];
    }

    get z() {
        return this.__translation[2];
    }

    set x(x) {
        this.__translation[0] = x;
        mat4.translate(this.owner.matrix, this.owner.matrix, [x, 0, 0]);
    }

    set y(y) {
        this.__translation[1] = y;
        mat4.translate(this.owner.matrix, this.owner.matrix, [0, y, 0]);
    }

    set z(z) {
        this.__translation[2] = z;
        mat4.translate(this.owner.matrix, this.owner.matrix, [0, 0, z]);
    }

    translate(matrix){
        mat4.translate(matrix, matrix, this.__translation);
    }

    get tag(){
        return TranslateComponent.tag;
    }

    static get tag(){
        return "TRANSLATE_COMPONENT";
    }
}