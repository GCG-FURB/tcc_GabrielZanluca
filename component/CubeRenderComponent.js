import { RenderComponent } from "./RenderComponent";
import { JSUtils } from "../utils/JSUtils";
import { Game } from "../game/Game";
import { mat4, vec3 } from "../libs/gl-matrix/gl-matrix";
import { TranslateComponent } from "./TranslateComponent";
import { RotateComponent } from "./RotateComponent";
import { ScaleComponent } from "./ScaleComponent";
import { Color } from "../geometric/Color";
import { GameObject } from "../gameObject/GameObject";
import { CubeGameObject } from "../gameObject/CubeGameObject";
import { Point3D } from "../geometric/Point3D";

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
    /**
     * Creates an instance of CubeRenderComponent.
     * @memberof CubeRenderComponent
     */
    constructor({owner}) {
        super({owner : owner});
        this.__positionAttributeLocation = undefined;
        this.__positionBuffer =  undefined;
        this.__colorLocation = undefined;
        this.__colorBuffer = undefined;
        this.__indexBuffer = undefined;
        this.__numberOfFace = 6;
        this.__numberOfVertexPerFace = 4;
    }

    vertexShaderSource() {
        return `attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;
  
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
  
        varying lowp vec4 vColor;
  
        void main() {
          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
          vColor = aVertexColor;
        }`;
    };

    fragmentShaderSource(){
        return `varying lowp vec4 vColor;

        void main() {
          gl_FragColor = gl_FragColor = vColor;
        }`;
    };

    onLoad(){
        super.onLoad();

        let game = new Game();
        let gl = game.canvas;

        this.__program = JSUtils.createProgram(this.vertexShader, this.fragmentShader);
        this.__positionAttributeLocation = gl.getAttribLocation(this.__program, "aVertexPosition");
        this.__positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        this.__indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.__indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        this.__modelViewMatrix = gl.getUniformLocation(this.__program, 'uModelViewMatrix');

        this.__projectionMatrix = gl.getUniformLocation(this.__program, 'uProjectionMatrix');
    }

    onRender(context, projctionMareix){
        super.onRender(context, projctionMareix);
        let camera = new Game().camera;

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
        
        context.uniformMatrix4fv(this.__projectionMatrix, false, camera.projection);
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