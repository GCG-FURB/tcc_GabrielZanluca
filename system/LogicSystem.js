import { Game } from "../game/Game";
import { GameObject } from "../gameObject/GameObject";
import { Component } from "../component/Component";

export class LogicSystem {
    static fireUpdateListener (deltaTime) {
        let game = new Game();
       
        if (game.scene) {
            for (let gameObject of game.scene.gameObjectList) {
                if (gameObject instanceof GameObject){
                    for (let index in gameObject.listComponents) {
                        let component = gameObject.listComponents[index];
                        if (component instanceof Component){
                            component.onUpdate(deltaTime);
                        }
                    }

                    for(let child of gameObject.child){
                        if (child instanceof GameObject) {
                            for (let index in child.listComponents) {
                                let component = child.listComponents[index];
                                if (component instanceof Component){
                                    component.onUpdate(deltaTime);
                                }  
                            }
                        }
                    }
                }
            }  
        }
    }

    static get tag () {
        return "LOGIC_SYSTEM";
    }
}