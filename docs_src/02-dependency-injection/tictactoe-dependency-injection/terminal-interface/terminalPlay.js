var controller = require('../app');
var view = require('./view');

controller.view.buildBoard();

console.log('play at 0, 0')
app.play(0, 0);

console.log('play at 0, 1')
app.play(1, 0);

console.log('play at 1, 1')
app.play(1, 1);

console.log('play at 0, 0')
app.play(0, 0);
