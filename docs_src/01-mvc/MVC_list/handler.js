var handler = {
  setup: function() {
    var addTextBTN = document.getElementById('clickBTN');
    addTextBTN.addEventListener('click', function() {
      var textInput = document.getElementById('textBox').value; // George
      controller.addText(textInput);
      controller.print();
      console.log('click');
    });
  }
};