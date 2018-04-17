
export class Scene {
    constructor() {
        this.__gameObjectList = new Array();
        this.__lights = new Array();
    }

    get gameObjectList() {
        return this.__gameObjectList;
    }

    get lights(){
        return this.__lights;
    }

    addLight(light){
        this.__lights.push(light);
    }

    get ligthsInfo(){
        let positionsVector =  [], colorVector =  [], typesVector =  [];

        this.__lights.forEach(light => {
            positionsVector = positionsVector.concat([light.position.x, light.position.y, light.position.z]);
            colorVector = colorVector.concat([light.color.r, light.color.g, light.color.b]);
            typesVector = typesVector.concat([light.type()]);
        });

        return {
            positions : positionsVector,
            colors : colorVector,
            types : typesVector
        }
    }

    addGameObject(gameObject){
        this.__gameObjectList.push(gameObject);
        for (let key in gameObject.listComponents) {
                let element = gameObject.listComponents[key];
                //element.onLoad();
        }
    }
}