import { Game } from "../game/Game";
import { GameObject } from "../gameObject/GameObject";
import { Component } from "../component/Component";

export class RenderSystem {
    static fireRenderListener(){
        let game = new Game();

        game.canvas.viewport(0, 0, game.canvas.canvas.width, game.canvas.canvas.height);
        // Clear the canvas
        game.canvas.clearColor(0, 0, 0, 0);
        game.canvas.clear(game.canvas.COLOR_BUFFER_BIT);        

        if (game.scene) {
            for (let gameObject of game.scene.gameObjectList) {
                if (gameObject instanceof GameObject){
                    for (let index in gameObject.listComponents) {
                        let component = gameObject.listComponents[index];
                        if (component instanceof Component){
                            component.onRender(game.canvas);
                        }
                    }
                }
            }  
        }
    }

    static get tag () {
        return "RENDER_SYSTEM";
    }
}