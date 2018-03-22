import { Point2D } from "./Point2D";

export class Point3D extends Point2D{

    constructor(x, y, z) {
        super(x,y);
        this.__z = z;
    }
}