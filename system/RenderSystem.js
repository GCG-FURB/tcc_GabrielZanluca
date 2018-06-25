import { Game } from "../game/Game";
import { GameObject } from "../gameObject/GameObject";
import { Component } from "../component/Component";

export class RenderSystem {
    static fireRenderListener(){
        let game = new Game(); 
        game.context.clearColor(1.0, 1.0, 1.0, 1.0);
        game.context.enable(game.context.CULL_FACE);    
        game.context.clear( game.context.COLOR_BUFFER_BIT |  game.context.DEPTH_BUFFER_BIT);
        game.context.clearDepth(1.0);
        game.context.enable(game.context.DEPTH_TEST);
        game.context.depthFunc(game.context.LEQUAL);

        for (let key in game.listComponents) {
            let  component = game.listComponents[key];
            component.onRender(game.context, game.projection);
        }

        let scene = game.scene;

        if (scene) {
            for (let key in scene.listComponent){
                let component = scene.listComponent[key];
                component.onRender(game.context, game.projection);
            }
            for (let gameObject of scene.gameObjectList) {
                if (gameObject instanceof GameObject) {
                    for (let index in gameObject.listComponents) {
                        let component = gameObject.listComponents[index];
                        component.onRender(game.context, game.projection);
                    }
                }
            }  
        }

        let camera = game.camera;

        if (camera){
            for (let key in camera.listComponent) {
                let component = camera.listComponent[key];
                component.onRender(game.context, game.projection);
            }
        }
    }

    static get tag () {
        return "RENDER_SYSTEM";
    }
}