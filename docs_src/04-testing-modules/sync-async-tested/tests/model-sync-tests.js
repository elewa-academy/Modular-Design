// testing the model is not so simple, it contains STATE
//	STATE is when the object has an internal value that changes over time
//  state complicates testing and debugging

let tressa = require('./tressa');
let sync_model = require('../components/models/basic-mvclh-model');

tressa.title("Synchronous Model");
tressa.assert(
	0 == sync_model.getLastResult(), 
	"initialized to 0");
tressa.assert(
	0 == sync_model.getLastResult(), 
	"reliably stores value");
sync_model.setLastResult(8);
tressa.assert(
	8 == sync_model.getLastResult(), 
	"resets stored value");
tressa.assert(
	8 == sync_model.getLastResult(), 
	"reliably stores value");

