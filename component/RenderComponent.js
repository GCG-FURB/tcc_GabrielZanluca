import {Component} from "./Component";
import { JSUtils } from "../utils/JSUtils";

export class RenderComponent extends Component {
    constructor(owner, gl) {
        super(owner);
        this.__vertexShader = JSUtils.createShader(gl, gl.VERTEX_SHADER, this.vertexShaderSource());
        this.__fragmentShader = JSUtils.createShader(gl, gl.FRAGMENT_SHADER, this.fragmentShaderSource());                
        this.__program = undefined;
        this.__colorLocation = undefined;
        //this.initialize();
    }

    vertexShaderSource() {
        return "Please implement abstract method vertexShaderSource."
    };

    fragmentShaderSource() {
        return "Please implement abstract method fragmentShaderSource."
    };

    get vertexShader() {
        return this.__vertexShader;
    }

    get fragmentShader () {
        return this.__fragmentShader;
    }

    get program() {
        return this.__program;
    }
    
}