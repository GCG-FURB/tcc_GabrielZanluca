import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { Point3D } from "../geometric/Point3D";

export class OrthogonalCamera {
    constructor({left, right, bottom, top, near, far}) {
        this.__projection = mat4.create();
        mat4.ortho(this.__projection, left, right, bottom, top, near, far);

    }

    get projection() {
        return this.__projection;
    }

    get posisition() {
        return new Point3D(0,0,0);
    }

    get matrix(){
        return mat4.create();
    }
}