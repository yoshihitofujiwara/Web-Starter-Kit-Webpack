import Base from './class/Base';
import Child from './class/Child';
import utils from './utils/utils';




import glsl from "glslify";
const myFragShader = glsl`
void main () {
  gl_FragColor = vec4(1.);
}
`;


console.log(myFragShader);


// var shader = require("../../shader/common/define.glsl");
var shader = require("../../shader/common/default.frag");
console.log(shader);



/*--------------------------------------------------------------------------
	test
--------------------------------------------------------------------------*/
$(function($){
	var base = new Base('Base');
	var child = new Child('Child', 999);

	utils.template();



	console.log('-----------');
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	base.setup();

	console.log('-----------');
	child.setup();
});
