import { Component } from "./Component";
import { Point3D } from "../geometric/Point3D";

export class MoveCameraComponent extends Component{
    constructor({owner}) {
        super({owner : owner}); 
    }

    onKeyDown(keyCode){
        if (keyCode == 38) {
            // let newPos = new Point3D(this.owner.position.x, this.owner.position.y + 1, this.owner.position.z)
            this.owner.position.y += 1;
        } else if (keyCode == 37){
            this.owner.position.x -= 1;
        } else if (keyCode == 39) {
            this.owner.position.x += 1;
        } else if (keyCode == 40){
            this.owner.position.y -= 1;
        }
        this.owner.updateValues();
    }
}