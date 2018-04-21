// testing the add method is very simple, it's a pure function

let tressa = require('./tressa');
let sync_add = require('../components/logics/add-sync').add;

tressa.title("Synchronous Addition");
tressa.assert(
	6 == sync_add(3,3), 
	"+/+");
tressa.assert(
	-6 == sync_add(-3,-3), 
	"-/-");
tressa.assert(
	0 == sync_add(3,-3), 
	"+/-");
tressa.assert(
	0 == sync_add(-3,3), 
	"-/+");
tressa.assert(
	3 == sync_add(0,3), 
	"0/+");
tressa.assert(
	3 == sync_add(3,0), 
	"+/0");
tressa.assert(
	-3 == sync_add(0,-3), 
	"0/-");
tressa.assert(
	-3 == sync_add(-3,0), 
	"-/0");


// create conditions to test sync_add's treatment of lastResult