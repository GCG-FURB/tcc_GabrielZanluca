import { Point3D } from "../geometric/Point3D";
import { Color } from "../geometric/Color";
import { mat4 } from "../libs/gl-matrix/gl-matrix";

export class SpotLight{

    constructor({position = new Point3D(0,0,0), color = new Color({r : 1, g : 1, b : 1}), innerLimit = 0, outerLimit = 0, target = new Point3D(0,0,0)}) {
        this.__position = position;
        this.__color = color;
        this.__outerLimit =  (Math.PI/180) * outerLimit;
        this.__innerLimit =  (Math.PI/180) * innerLimit;
        this.__target = target;
        this.__matrix = mat4.create();
        mat4.lookAt(this.__matrix, [position.x, position.y, position.z], target.toVector(), [0,1,0]);
    }

    get position() {
        return this.__position;
    }

    get color() {
        return this.__color;
    }

    get innerLimit(){
        return this.__innerLimit;
    }

    get outerLimit(){
        return this.__outerLimit;
    }

    get target() {
        return this.__target;
    }

    get shininess() {
        return 1;
    }
    
    get targetLook(){
        return [-this.__matrix[8], -this.__matrix[9], -this.__matrix[10]];
    }

    get secondColor() {
        let c = new Color({r:0, b:0, g : 0});
        return c;
    }

    get type() {
        return SpotLight.type();
    }

    static type(){
        return 2;
    }
}