var controller = {
  addText: function(param1) {
    // textInput George
    model.addText(param1);
  },
  print: function() {
    view.display(model.text); //George
  }
};