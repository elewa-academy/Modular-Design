function init() {
  // get the model
  controller.getModelObject(bakeryData);
  // get the view
  controller.getViewObject(vitrine);
  // set up the handers
  handlers.setupEvents();
}
