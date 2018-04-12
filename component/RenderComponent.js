import {Component} from "./Component";
import { JSUtils } from "../utils/JSUtils";
import { Game } from "../game/Game";
import { Color } from "../geometric/Color";
import { GameObject } from "../gameObject/GameObject";

export class RenderComponent extends Component {
    /**
     * Creates an instance of RenderComponent.
     * @memberof RenderComponent
     */
    constructor({owner}) {
        super({owner : owner});
        let game = new Game();
        let gl = game.canvas;
        this.__vertexShader = JSUtils.createShader(gl.VERTEX_SHADER, this.vertexShaderSource());
        this.__fragmentShader = JSUtils.createShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource());        
        this.__modelViewMatrix = undefined;
        this.__projectionMatrix = undefined;               
        this.__program = undefined;
        this.__colorLocation = undefined;
        this.__numberOfFace = 0;
        this.__numberOfVertexPerFace = 0;
        this.__ColorChanelNumber = 4;
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

    /**
     * 
     * @param {Color} color
     * @memberof CubeRenderComponent
     */
    set color(color){
        let game = new Game();
        let gl = game.canvas;

        this.__vertexColors = [];

        for (let i = 0; i < this.__numberOfFace; i++) {
            const c = [color.r, color.g, color.b, color.a];
            for (let j = 0; j < this.__numberOfVertexPerFace; j++) {
                this.__vertexColors = this.__vertexColors.concat(c);                
            }            
        }

        this.__colorLocation = gl.getAttribLocation(this.__program, "aVertexColor");
        this.__colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.__vertexColors), gl.STATIC_DRAW);
    }
    /**
     * 
     * 
     * @param {Number} face 
     * @param {Color} color 
     * @returns 
     * @memberof RenderComponent
     */
    colorFace(face, color){
        if (!color) {
            let r = this.__vertexColors[(face * this.__ColorChanelNumber * this.__numberOfVertexPerFace)];
            let g = this.__vertexColors[(face * 4 * 4) + 1];
            let b = this.__vertexColors[(face * 4 * 4) + 2];
            let a = this.__vertexColors[(face * 4 * 4) + 3];
            let c = new Color({r, g, b, a});
            return c;
        }
        else {
            this.__vertexColors.splice(face * 4 * 4, 4 * 4, color.r, color.g, color.b, 1,
                                                            color.r, color.g, color.b, 1,
                                                            color.r, color.g, color.b, 1,
                                                            color.r, color.g, color.b, 1);
            
            let game = new Game();
            let gl = game.canvas;
            this.__colorLocation = gl.getAttribLocation(this.__program, "aVertexColor");
            this.__colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.__colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.__vertexColors), gl.STATIC_DRAW);
        }
    }
    /**
     * 
     * 
     * @param {Number} vertex 
     * @param {Color} color 
     * @returns 
     * @memberof RenderComponent
     */
    colorVertex(vertex, color){
        if (!color){
            let r = this.__vertexColors[(vertex * 4)];
            let g = this.__vertexColors[(vertex * 4) + 1];
            let b = this.__vertexColors[(vertex * 4) + 2];
            let a = this.__vertexColors[(vertex * 4) + 3];
            let c = new Color({r, g, b, a});
            return c;
        }
        else {
            this.__vertexColors.splice(vertex * 4, 4, color.r, color.g, color.b, 1);

            let game = new Game();
            let gl = game.canvas;
            this.__colorLocation = gl.getAttribLocation(this.__program, "aVertexColor");
            this.__colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.__colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.__vertexColors), gl.STATIC_DRAW);
        }   
    }
    
}