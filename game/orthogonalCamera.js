import { mat4 } from "../libs/gl-matrix/gl-matrix";
import { Point3D } from "../geometric/Point3D";

/**
 * 
 * 
 * @export
 * @class OrthogonalCamera
 * @author Gabriel Zanluca
 */
export class OrthogonalCamera {
    /**
     * Creates an instance of OrthogonalCamera.
     * @memberof OrthogonalCamera
     */
    constructor({ left, right, bottom, top, near, far }) {
        this.__projection = mat4.create();
        mat4.ortho(this.__projection, left, right, bottom, top, near, far);

    }
    /**
     * @returns {number[]}
     * 
     * @readonly
     * @memberof OrthogonalCamera
     */
    get projection() {
        return this.__projection;
    }

    /**
     * @returns {Point3D}
     * 
     * @readonly
     * @memberof OrthogonalCamera
     */
    get posisition() {
        return new Point3D(0, 0, 0);
    }

    /**
     * @returns {number[]}
     * 
     * @readonly
     * @memberof OrthogonalCamera
     */
    get matrix() {
        return mat4.create();
    }
}