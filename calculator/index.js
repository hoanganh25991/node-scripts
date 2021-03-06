// let Calc = require(`${__dirname}/calculator.js`);
let math = require('mathjs');

var clipboardHandler = require('copy-paste');

let expression = process.argv[2];
// console.log(expression);

if(expression){
	let r = math.eval(expression);
	clipboardHandler.copy(r, ()=>{
		console.log(`Copied to clipboard\nResult: ${r}`);
	});
}

if(!expression){
	console.log('\033[01;31m[E] \033[0mPlease submit expression');
	process.exit();
}

