var app;
window.onload = function() {
	controller.model = model;
	controller.view = view;
	controller.logic = logic;
	handler.controller = controller;
	app = handler;
};