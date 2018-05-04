let add = require('./addition-logic');
let subtract = require('./subtraction-logic');
let multiply = require('./multiplication-logic');
let divide = require('./division-logic');
let clear = require('./clear-logic');

function read_db(a, b, lastResult) {
	return lastResult;
}

let logic = {
	add,
	subtract,
	multiply,
	divide,
	clear, 
	read_db,
};

module.exports = logic;