import { Point3D } from "../geometric/Point3D";
import { mat4 } from "../libs/gl-matrix/gl-matrix";

/**
 * 
 * 
 * @export
 * @class PerspectiveCamera
 * @author Gabriel Zanluca
 */
export class PerspectiveCamera {
	/**
	 * Creates an instance of PerspectiveCamera.
	 * @memberof PerspectiveCamera
	 */
	constructor({ aspect = 1, near = 0, far = 0, fovy = 0, position = new Point3D(0, 0, 0) }) {
		this.__near = near;
		this.__far = far;
		this.__aspect = aspect;
		this.__fovy = fovy;
		this.__position = position;
		this.__projection = mat4.create();
		this.__matrix = mat4.create();
		mat4.perspective(this.__projection, fovy, aspect, near, far);
		mat4.lookAt(this.__matrix, [position.x, position.y, position.z], [0, 0, 0], [0, 1, 0]);
		// this.__matrix[13] = position.x;
		// this.__matrix[14] = position.y;
		// this.__matrix[15] = position.z;
	}

	/**
	 * @returns {number[]} projection
	 * 
	 * @readonly
	 * @memberof PerspectiveCamera
	 */
	get projection() {
		return this.__projection;
	}

	/**
	 * @returns {number[]} matrix
	 * 
	 * @readonly
	 * @memberof PerspectiveCamera
	 */
	get matrix() {
		return this.__matrix;
	}

	/**
	 * @returns {number} near
	 * 
	 * @memberof PerspectiveCamera
	 */
	get near() {
		return this.__near;
	}

	/**
	 * @returns {number} far
	 * 
	 * @memberof PerspectiveCamera
	 */
	get far() {
		return this.__far;
	}

	/**
	 * @returns {Number[]} position
	 * 
	 * @memberof PerspectiveCamera
	 */
	get posisition() {
		return [-this.__matrix[12], -this.__matrix[13], -this.__matrix[14]];
	}

	/**
	 * @returns {number} aspect
	 * 
	 * @memberof PerspectiveCamera
	 */
	get aspect() {
		return this.__aspect;
	}

	/**
	 * @returns {number} fovy
	 * 
	 * @memberof PerspectiveCamera
	 */
	get fovy() {
		return this.__fovy;
	}

	/**
	 * @param {number} near
	 * 
	 * @memberof PerspectiveCamera
	 */
	set near(near) {
		this.__near = near;
	}

	/**
	 * @param {number} far
	 * 
	 * @memberof PerspectiveCamera
	 */
	set far(far) {
		this.__far = far;
	}

	/**
	 * @param {Number[]} posisition
	 * 
	 * @memberof PerspectiveCamera
	 */
	set posisition(posisition) {
		this.__position = posisition;
	}

	/**
	 * @param {number} aspect
	 * 
	 * @memberof PerspectiveCamera
	 */
	set aspect(aspect) {
		this.__aspect = aspect;
	}

	/**
	 * @param {number} fovy
	 * 
	 * @memberof PerspectiveCamera
	 */
	set fovy(fovy) {
		this.__fovy = fovy;
	}
}