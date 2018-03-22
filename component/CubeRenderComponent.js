import { RenderComponent } from "./RenderComponent";
import { JSUtils } from "../utils/JSUtils";
import { Game } from "../game/Game";
import { mat4, vec3 } from "../libs/gl-matrix/gl-matrix";
import { TranslateComponent } from "./TranslateComponent";
import { RotateComponent } from "./RotateComponent";
import { ScaleComponent } from "./ScaleComponent";

  // position of each face of the cube
  const vertices = [
    // Front face
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,
    
    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0, -1.0, -1.0,
    
    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
     1.0,  1.0,  1.0,
     1.0,  1.0, -1.0,
    
    // Bottom face
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,
    
    // Right face
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
     1.0,  1.0,  1.0,
     1.0, -1.0,  1.0,
    
    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0,
  ];

  const indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
  ];

export class CubeRenderComponent extends RenderComponent{
    
    constructor({owner, gl, positions, color}) {
        super(owner, gl);
        Object.assign(this, {__positions : positions, __color : color});
        this.__positionAttributeLocation = undefined;
        this.__positionBuffer =  undefined;
        this.__colorLocation = undefined;
        this.__colorBuffer = undefined;
        this.__indexBuffer = undefined;
        this.__modelViewMatrix = undefined;
    }

    vertexShaderSource() {
        return `attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;
  
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
  
        varying lowp vec4 vColor;
  
        void main() {
          gl_Position = uModelViewMatrix * aVertexPosition;
          vColor = aVertexColor;
        }`;
    };

    fragmentShaderSource(){
        return `varying lowp vec4 vColor;

        void main() {
          gl_FragColor = gl_FragColor = vColor;
        }`;
    };

    get color(){
        return this.__color;
    }

    set color(color){
        this.__color = color;
    }

    apllyTransform(){
        // caculate matrix
        let c;
        if (c = this.__owner.listComponents[TranslateComponent.tag]) {
            c.translate(this.owner.matrix);    
        }

        if (c = this.__owner.listComponents[RotateComponent.tag]) {
            c.rotateAll(this.owner.matrix);
        }

        if (c = this.__owner.listComponents[ScaleComponent.tag]) {
            //c.scale(this.owner.matrix);
        }

        console.log("Transform");
    }

    onLoad(){
        super.onLoad();
        //this.apllyTransform();

        let game = new Game();
        let gl = game.canvas;

        this.__program = JSUtils.createProgram(gl, this.vertexShader, this.fragmentShader);
        this.__positionAttributeLocation = gl.getAttribLocation(this.__program, "aVertexPosition");
        this.__positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        this.__indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.__indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        let colors = []

        for (let index = 0; index < 6; index++) {
            const c = [this.color.r, this.color.g, this.color.b, 1];
            colors = colors.concat(c, c, c, c);
            
        }

        this.__colorLocation = gl.getAttribLocation(this.__program, "aVertexColor");
        this.__colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

        this.__modelViewMatrix = gl.getUniformLocation(this.__program, 'uModelViewMatrix')
    }

    onRender(context, projctionMareix){
        super.onRender(context, projctionMareix);

        {
            let size = 3;
            let type = context.FLOAT;
            let normalize = false;
            let stride = 0;
            let offset = 0;

            context.bindBuffer(context.ARRAY_BUFFER, this.__positionBuffer);
            context.vertexAttribPointer(this.__positionAttributeLocation, size, type, normalize, stride, offset);
            context.enableVertexAttribArray(this.__positionAttributeLocation);
        }

        context.bindBuffer(context.ELEMENT_ARRAY_BUFFER, this.__indexBuffer);

        {
            let size = 4;
            let type = context.FLOAT;
            let normalize = false;
            let stride = 0;
            let offset = 0;

            context.bindBuffer(context.ARRAY_BUFFER, this.__colorBuffer);
            context.vertexAttribPointer(this.__colorLocation, size, type, normalize, stride, offset);
            context.enableVertexAttribArray(this.__colorLocation);
        }

        context.useProgram(this.__program);

        context.uniformMatrix4fv(this.__modelViewMatrix, false, this.owner.matrix);

        {
            const offset = 0;
            const vertexCount = 36;
            const type = context.UNSIGNED_SHORT;
            context.drawElements(context.TRIANGLES, vertexCount, type, offset);
        }

    }

    get tag(){
        return CubeRenderComponent.tag;
    }

    static get tag(){
        return "CUBE_RENDER_COMPONENT"
    }
}