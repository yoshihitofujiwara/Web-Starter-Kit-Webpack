import Base from "./class/Base";
import Child from "./class/Child";
import utils from "./utils/utils";




import glsl from "glslify";
const myFragShader = glsl`
void main () {
  gl_FragColor = vec4(1.);
}
`;


console.log(myFragShader);


// var shader = require("../../shader/common/define.glsl");
const shader = require("../../shader/common/default.frag");
console.log(shader);



/* --------------------------------------------------------------------------
	test
--------------------------------------------------------------------------*/
$(($) => {
	const base = new Base("Base");
	const child = new Child("Child", 999);

	utils.template();



	console.log("-----------");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	// alert("2000000000000000000");
	base.setup();

	console.log("-----------");
	child.setup();
});
