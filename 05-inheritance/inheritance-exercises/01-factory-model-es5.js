// This becomes simpler with es6 object literals.  that's coming later
function model_factory(_name) {
	
	let new_obj = {
		name: _name
	};

	let base_object = {
		DB: {},
		nextID: 00,
		create: function() {},
		read_one: function() {},
		read_all: function() {},
		update: function() {},
		remove: function() {}
	};

	Object.assign(new_obj, base_object);

	return new_obj;
};

module.exports = model_factory;


// we give them just this, they fill it out
// https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91


// or with closure:

// 	let base_object = {
// 		DB: {},
// 		nextID: 00,
// 		create: function() {},
// 		read_one: function() {},
// 		read_all: function() {},
// 		update: function() {},
// 		remove: function() {},
// 	};

// function model(_name) {
	
// 	let new_obj = {
// 		name: _name
// 	};

// 	Object.assign(new_obj, base_object);

// 	return new_obj;
// };

// module.exports = model_factory;


