
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
        for (let index = 0; index < this.__gameObjectList.length; index++) {
            const object = this.__gameObjectList[index];
            object.onLoad();            
        }
    }

    get ligthsInfo(){
        let positionsVector =  [], colorVector =  [], typesVector =  [];
        let secondColorVector = [], shininessVector = [], lookAtVector = [];
        let lowLimmitVector = [], highLimmitVector = [];

        this.__lights.forEach(light => {
            positionsVector = positionsVector.concat([light.position.x, light.position.y, light.position.z]);
            colorVector = colorVector.concat([light.color.r, light.color.g, light.color.b]);
            typesVector = typesVector.concat([light.type]);
            shininessVector = shininessVector.concat([light.shininess]);
            secondColorVector = secondColorVector.concat([light.secondColor.r, light.secondColor.g, light.secondColor.b]);
            lookAtVector = lookAtVector.concat([light.targetLook[0], light.targetLook[1], light.targetLook[2]]);
            lowLimmitVector = lowLimmitVector.concat(light.innerLimit);
            highLimmitVector = highLimmitVector.concat(light.outerLimit);
        });

        return {
            positions : positionsVector,
            colors : colorVector,
            types : typesVector,
            shininess : shininessVector,
            secondColor : secondColorVector,
            lookAt : lookAtVector,
            lowLimmit : lowLimmitVector,
            highLimmit : highLimmitVector
        }
    }

    addGameObject(gameObject){
        this.__gameObjectList.push(gameObject);
        for (let key in gameObject.listComponents) {
                let component = gameObject.listComponents[key];
                component.onLoad();
        }
    }
}