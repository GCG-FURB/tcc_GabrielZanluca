import { Color } from "../geometric/Color";
import { Point3D } from "../geometric/Point3D";

export class DirectionalLight{
    constructor({color = new Color({r:0, b:0, g : 0}), position = new Point3D(0,0,0) }) {
        this.__color = color;
        this.__position =  position;   
    }

    get color() {
        return this.__color;
    }

    get position() {
        return this.__position;
    }

    get type(){
        return DirectionalLight.type;
    }

    set color(color) {
        this.__color = color;
        // @@
        //  precisa ser feito o resto do código de recarregar a cenas.
    }

    set position(position) {
        this.__position = position;
        // @@
        //  precisa ser feito o resto do código de recarregar a cenas.
    }

    get shininess() {
        return 0;
    }

    get secondColor() {
        let c = new Color({r:0, b:0, g : 0});
        return c;
    }

    static type(){
        return 0;
    }
}