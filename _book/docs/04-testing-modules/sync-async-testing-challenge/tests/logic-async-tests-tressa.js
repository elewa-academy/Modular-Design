// testing the add method is very simple, it's a pure function

let tressa = require('./tressa');
let async_add = require('../components/logics/add-async').add;

tressa.title("Asynchronous Addition");
async_add(3, 3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 6, "+/+")
		};
	}); 
async_add(-3, -3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == -6, "-/-")
		};
	}); 
async_add(3, -3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 0, "+/-")
		};
	}); 
async_add(-3, 3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 0, "-/+")
		};
	}); 
async_add(0, 3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 3, "0/+")
		};
	}); 
async_add(3, 0, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == 3, "+/0")
		};
	}); 
async_add(0, -3, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == -3, "0/-")
		};
	}); 
async_add(-3, 0, 0, function (err, result) {
		if (err) {
			tressa.assert(err)
		} else {
			tressa.assert(result == -3, "-/0")
		};
	}); 


// create conditions to test async_add's treatment of lastResult