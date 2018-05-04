var view = {
  display: function(text) {
    var printLineDiv = document.getElementById('printLine');
    printLineDiv.innerHTML += text + ', '; // George
  }
};
