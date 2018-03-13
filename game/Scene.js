
export class Scene {
    constructor() {
        this.__gameObjectList = new Array();
    }

    get gameObjectList() {
        return this.__gameObjectList;
    }

    addGameObject(gameObject){
        this.__gameObjectList.push(gameObject);
        for (let key in gameObject.listComponents) {
                let element = gameObject.listComponents[key];
                element.onLoad();
        }
    }
}