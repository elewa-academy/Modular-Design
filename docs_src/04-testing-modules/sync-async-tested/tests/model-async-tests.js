// testing the model is not so simple, it contains STATE
//	STATE is when the object has an internal value that changes over time
//  state complicates testing and debugging

let tressa = require('./tressa');
let async_model = require('../components/models/basic-mvclh-model-async');

tressa.title("Asynchronous Model");
async_model.getLastResult(function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 0, "initialized to 0")
		};
	});
async_model.getLastResult(function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 0, "reliably stores value")
		};
	});
async_model.setLastResult(8, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 8, "resets stored value")
		};
	});
async_model.getLastResult(function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 8, "reliably stores value")
		};
	});

