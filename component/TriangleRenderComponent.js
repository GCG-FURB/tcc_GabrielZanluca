import {RenderComponent} from "./RenderComponent";
import { JSUtils } from "../utils/JSUtils";
import { Game } from "../game/Game";

export class TriangleRenderComponent extends RenderComponent {

    constructor(owner, gl, positions) {
        super(owner, gl);
        this.__positions = positions;
        this.__positionAttributeLocation = undefined;
        this.__positionBuffer =  undefined;
    }

    vertexShaderSource() {
        return "attribute vec4 a_position; " +               
                "void main() { " +                           
                "gl_Position = a_position; " +
                "}"
    };

    fragmentShaderSource() {
        return "precision mediump float; " +       
        "void main() { " +
          "gl_FragColor = vec4(1, 0, 0.5, 1); " +
        "}"
    };

    onLoad() {
        super.onLoad();
        let game =  new Game();
        let gl = game.canvas;
        this.__program = JSUtils.createProgram(gl, this.vertexShader, this.fragmentShader);
        this.__positionAttributeLocation = gl.getAttribLocation(this.__program, "a_position");
        this.__positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.__positions), gl.STATIC_DRAW);
    };

    onRender(gl){
        // Tell it to use our program (pair of shaders)
        gl.useProgram(this.__program);
        gl.enableVertexAttribArray(this.__positionAttributeLocation);
        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        let size = 2;          // 2 components per iteration
        let type = gl.FLOAT;   // the data is 32bit floats
        let normalize = false; // don't normalize the data
        let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        let offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(this.__positionAttributeLocation, size, type, normalize, stride, offset);
        let primitiveType = gl.TRIANGLES;
        offset = 0;
        let count = 3;
        gl.drawArrays(primitiveType, offset, count);
    }

    get tag () {
        return "TRIANGLE_RENDER_COMPONENT"
    }
}