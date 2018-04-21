let model = {
	DB: {},
	name: "",
	nextID: 00,
	schema: {},
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

		},
	validate: function() { // called by create & update
			// it's your choice if you use defaults or notes
		}
};

// we give them just this, they fill it out