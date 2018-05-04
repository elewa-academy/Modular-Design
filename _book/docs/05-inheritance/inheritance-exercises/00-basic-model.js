let model = {
	DB: {},
	name: "",
	nextID: 00,
	create: function() { // args - array or object? with prop values
							// we should decide on one way so they can swap models
		},
	read_one: function() { // arg - ID

		},
	read_all: function() { // arg - none

		},
	update: function() { // args - id, {key, newValue}?

		},
	remove: function() { // args - id

		}
};

module.exports = model;

// we give them just this, they fill it out

// try requiring this multiple times
//	module.exports are "singletons": only one exists in the runtime
//	requiring something just gives you a pointer to the runtime-global object