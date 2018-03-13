/**
 * 
 * 
 * @author Gabriel Zanluca
 * @export
 * @class JSUtils
 */
export class JSUtils {
    /**
     * 
     * 
     * @static
     * @returns {String}
     * @memberof JSUtils
     */
    static generateUUID() {
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random()*16 | 0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
		return uuid;
    }

    /**
     * 
     * 
     * @static
     * @param {Object} gl 
     * @param {Number} type 
     * @param {String} source 
     * @memberof JSUtils
     */
    static createShader(gl, type, source) {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success){
            return shader;    
        }
        
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }

    static createProgram(gl, vertexShader, fragmentShader) {
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        let success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }
        
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
}