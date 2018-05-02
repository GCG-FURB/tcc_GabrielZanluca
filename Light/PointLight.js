
import { Color } from "../geometric/Color";
import { Point3D } from "../geometric/Point3D";

export class PointLight{
    constructor({color = new Color({r : 1, b : 1, g : 1}), position = new Point3D(0,0,0), shininess = 1, secondColor = new Color({r : 1,g : 1, b : 1}) }) {
        this.__color = color;
        this.__position =  position;
        this.__shininess = shininess;
        this.__type = 1;
        this.__secondColor = secondColor
    }

    get color() {
        return this.__color;
    }

    get position() {
        return this.__position;
    }

    get type(){
        return this.__type;
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

    set shininess(shininess){
        this.__shininess = shininess;
        // @@
        //  precisa ser feito o resto do código de recarregar a cenas.
    }

    get shininess() {
        return this.__shininess;
    }

    set secondColor(secondColor) {
        this.__secondColor = secondColor;
    }

    get secondColor() {
        return this.__secondColor;
    }

    get innerLimit(){
        return 0;
    }

    get outerLimit(){
        return 0;
    }

    get targetLook(){
        return [0, 0, 0];
    }

    static type(){
        return 1;
    }
}