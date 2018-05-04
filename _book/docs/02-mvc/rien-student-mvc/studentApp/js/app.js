function init() {
  controller.getModel(eliumStudents);
  // get view
  controller.getView(studentViewer);
  // set up handlers
  handlers.setupEvents();
}
