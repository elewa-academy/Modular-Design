// require everything
let model = require('../components/models/basic-persistent-model');
let view = require('../components/views/basic-terminal-view');
let controller = require('../components/controllers/basic-controller');
let full_logic = require('../components/logics/full-logic-object');
let handle = require('../components/handlers/basic-node-handler');

// build everything
controller.model = model;
controller.view = view;
controller.logic = full_logic;

var inputs = handle()

if (inputs[0] == "undefined") {
	controller.help();
} else {
	controller.operate(... inputs);
}

// node persistent-node-app.js operation_name a b
// if operation_name is "help", the app will print out the available operations

