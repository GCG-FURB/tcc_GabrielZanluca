import {JSUtils} from "../utils/JSUtils";
/**
 * 
 * 
 * @export
 * @class Component
 */
export class Component {
    /**
     * Creates an instance of Component.
     * @memberof Component
     */
    constructor({owner}){
        this.__id = JSUtils.generateUUID();
        this.__enabled = true;
        this.__owner = owner;
    }

    get id(){
        return this.__id;
    }

    get enabled() {
        return this.__enabled;
    }

    set enabled(enabled) {
        this.__enabled = enabled;
    }

    get owner() {
        return this.__owner;
    }

    set owner(owner) {
        this.__owner = owner;
    }

    onKeyDown(keyCode) {}

    onKeyUp(keyCode) {}

    onKeyPress(keyCode) {}

    onClick(x, y, wich) {}

    onMouseDown(x, y, wich) {}

    onMouseMove(x, y) {}

    onBeforeRender(context){}
    
    /**
     * 
     * 
     * @param {WebGLRenderingContext} context
     * @param {Array} projctionMareix  
     * @memberof Component
     */
    onRender(context, projctionMareix){}

    onUpdate(delta){}

    onLoad() {}

    onDestroy(){}

    onStickMoved(value, stick, direction){}

    onButtonReleased(button){}

    onButtonPressed(button){}
}