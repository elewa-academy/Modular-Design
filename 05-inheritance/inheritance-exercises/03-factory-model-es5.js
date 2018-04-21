// This becomes simpler with es6 object literals.  that's coming later
function model(_name, _schema) {
	
	let new_obj = {
		name: _name,
		schema: _schema,
	};

	let base_object = {
		DB: {},
		nextID: 00,
		create: function() {},
		read_one: function() {},
		read_all: function() {},
		update: function() {},
		remove: function() {},
		validate: function() {},
		find_by: function() {},
		find_by_challenges: function() {}
	};

	Object.assign(new_obj, base_object);

	return new_obj;
};

// we give them just this, they fill it out
// https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91