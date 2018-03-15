import { GameObject } from "./GameObject";
import { TriangleRenderComponent } from "../component/TriangleRenderComponent";
import { Game } from "../game/Game";

export class TriangleGameObject extends GameObject{

    constructor(x, y, points, color) {
        super(x, y);
        this.__points = points;
        let gl = new Game().canvas
        this.listComponents.addComponent(new TriangleRenderComponent(this, gl, points, color));
    }

    get points() {
        return this.__points;
    }

    set points(points) {
        this.__points = points;
    }

    get tag(){
        return "TRIANGLE_OBJECT";
    }
}