window.onload = function() {
	controller.model = model;
	controller.view = view;
	controller.logic = logic;
	handler.controller = controller;
    let addButton = document.getElementById("addButton");
    addButton.onclick = function() {
        handler.add();
    };
};