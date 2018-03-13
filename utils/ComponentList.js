import {Component} from "../component/Component";

export class ComponentList extends Array {

    constructor() {
        super();
        Object.setPrototypeOf(this, ComponentList.prototype);
    }
    /**
     * 
     * 
     * @param {Component} component 
     * @memberof ComponentList
     */
    addComponent(component) {
        this[component.tag] = component;
    }

    contains(component) {
      return this.find(c => c == component) > 0;  
    }

    /**
     * 
     * 
     * @param {String} id 
     * @returns {Comment} component
     * @memberof ComponentList
     */
    getByID(id){
        return this.find(c => c.id == id);
    }

    removeByID(component) {
        let indexOf = this.findIndex(c => c.id == component.id);

        if (indexOf != -1){
            this.splice(indexOf, 1);
        }
        
    }

    removeByKey(key) {
        this.removeByID(this[key]);
    }
}