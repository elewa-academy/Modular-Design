var vitrine = {
  name: "vitrine",
  showPastries: function(pastriesArray) {
    var showBakeryitems = document.getElementById("showBakeryitems");
    if (showBakeryitems.innerHTML) {
      showBakeryitems.innerHTML = "";
    }

    for (var i = 0; i < pastriesArray.length; i++) {
      var p = document.createElement("p");
      var textNode = pastriesArray[i].name + " :" + pastriesArray[i].price;
      p.innerText = textNode;
      showBakeryitems.appendChild(p);
    }
  }
};
