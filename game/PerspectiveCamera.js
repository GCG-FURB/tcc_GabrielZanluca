import { Point3D } from "../geometric/Point3D";
import { mat4 } from "../libs/gl-matrix/gl-matrix";

export class PerspectiveCamera{

    constructor({aspect, near, far, fovy, position = new Point3D(0,0,0)}) {
        this.__near = near;
		this.__far = far;
		this.__aspect = aspect;
		this.__fovy = fovy;
		this.__position = position;
        this.__projection = mat4.create();
        this.__matrix = mat4.create();
        mat4.perspective(this.__projection, fovy, aspect, near, far);
        mat4.lookAt(this.__matrix, [position.x, position.y, position.z], [0,0,0], [0,1,0]);
    }

    get projection() {
        return this.__projection;
    }

    get matrix(){
        return this.__matrix;
    }

    get near(){
		return this.__near;
	}
	
	get far(){
		return this.__far;
	}
	
	get posisition() {
	 	return this.__position;
	}
	
	get aspect() {
		return this.__aspect;
	}
	
	get fovy() {
		return this.__fovy;
	}
	
	set near(near){
		this.__near = near;
	}
	
	set far(far){
		this.__far = far;
	}
	
	set posisition(posisition) {
	 	this.__position = posisition;
	}
	
	
	set aspect(aspect) {
		this.__aspect = aspect;
	}
	
	set fovy(fovy) {
		this.__fovy = fovy;
	}
}