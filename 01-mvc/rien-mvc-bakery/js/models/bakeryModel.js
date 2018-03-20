var bakeryData = {
  name: "bakeryData",
  pastries: {
    0: {
      name: "eclair",
      price: 1.5
    },
    1: {
      name: "muffin",
      price: 2
    }
  },
  currentId: 1,
  getAll: function() {
    var arr = [];
    for (var id in this.pastries) {
      arr.push(this.pastries[id]);
    }
    return arr;
  },
  addNewPastry: function(pastryObj) {
    var message;
    if (typeof pastryObj.name === "string" && !isNaN(pastryObj.price)) {
      if (pastryObj.name && pastryObj.price > 0) {
        this.currentId++;
        this.pastries[this.currentId] = pastryObj;
        message = "Pastry successfully added!";
      } else {
        message = "Please enter both inputs";
      }
    } else {
      message = "Invalid entries";
    }
    return message;
  }
};
