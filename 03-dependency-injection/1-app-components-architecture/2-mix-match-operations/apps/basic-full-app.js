// require everything
let model = require('../components/models/basic-persistent-model');
let view = require('../components/views/basic-terminal-view');
let controller = require('../components/controllers/basic-controller');
let handle = require('../components/handlers/basic-node-handler');


let add = require('../components/logics/addition-logic');
let subtract = require('../components/logics/subtraction-logic');
let multiply = require('../components/logics/multiplication-logic');
let divide = require('../components/logics/division-logic');

// build everything
controller.model = model;
controller.view = view;
controller.logic.add = add;
controller.logic.subtract = subtract;
controller.logic.multiply = multiply;
controller.logic.divide = divide;

var inputs = handle()

if (inputs[0] == "undefined") {
	controller.help();
} else {
	controller.operate(... inputs);
}

// node persistent-node-app.js operation_name a b
// if operation_name is "help", the app will print out the available operations

