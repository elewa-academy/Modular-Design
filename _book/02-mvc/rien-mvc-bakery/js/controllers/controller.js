var controller = {
  modelObjects: {},
  viewObjects: {},
  getModelObject: function(model) {
    this.modelObjects[model.name] = model;
  },
  getViewObject: function(view) {
    this.viewObjects[view.name] = view;
  },
  displayPastries: function() {
    // get the data
    var array = this.modelObjects.bakeryData.getAll();
    array.forEach(function(element) {
      console.log(element.name);
      console.log(element.price);
    }, this);

    // send data to view
    this.viewObjects.vitrine.showPastries(array);
  },
  addPastry: function(name, price) {
    var pastryObject = {
      name: name,
      price: price
    };

    var message = this.modelObjects.bakeryData.addNewPastry(pastryObject);
    alert(message);
    this.displayPastries();
  }
};
