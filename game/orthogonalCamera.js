import { mat4 } from "../libs/gl-matrix/gl-matrix";

export class orthogonalCamera {
    constructor({left, right, bottom, top, near, far}) {
        this.__projection = mat4.create();
        mat4.ortho(this.__projection, left, right, bottom, top, near, far);

    }

    get projection() {
        return this.__projection;
    }
}