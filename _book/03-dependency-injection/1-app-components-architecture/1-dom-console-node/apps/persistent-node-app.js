// require everything
let model = require('../components/models/basic-persistent-model');

let view = require('../components/views/basic-terminal-view');

let controller = require('../components/controllers/basic-mvclh-controller');

let logic = require('../components/logics/basic-mvclh-logic');

let handler = require('../components/handlers/basic-node-handler');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;

handler.controller = controller;

// run the app
handler.add();

// node persistent-node-app.js a b

