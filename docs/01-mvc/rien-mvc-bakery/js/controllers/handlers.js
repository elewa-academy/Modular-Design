var handlers = {
  setupEvents: function() {
    var showButton = document.getElementById("showButton");
    var addButton = document.getElementById("addButton");

    showButton.onclick = function() {
      controller.displayPastries();
    };

    addButton.onclick = function() {
      var name = document.getElementById("nameInput").value;
      var price = document.getElementById("priceInput").value;

      controller.addPastry(name, price);

      document.getElementById("myForm").reset();
    };
  }
};
