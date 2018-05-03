var unit_test = require('./unit-test');
var test_suite = require('./dynamic-suite');
var result_interpreter = require('./result-interpreter');

var testing_module = {
	unit_test,
	test_suite,
	result_interpreter,
	test: function(testee, cases) {
		var results = this.test_suite(this.unit_test, testee, cases);
		var interpreted = this.result_interpreter(results, cases);
		return interpreted
	}
};

module.exports = testing_module;


// var unit_test = require('./unit-test');
// var test_suite = require('./dynamic-suite');
// var result_interpreter = require('./result-interpreter');

//   same thing as above, but built with closures
// 	 a different built-time behavior for the same run-time behavior
	 
// var testing_module = {
// 	test: function(testee, cases) {
// 		var results = test_suite(this.unit_test, testee, cases);
// 		var interpreted = result_interpreter(results, cases);
// 		return interpreted
// 	}
// };

// module.exports = testing_module;

