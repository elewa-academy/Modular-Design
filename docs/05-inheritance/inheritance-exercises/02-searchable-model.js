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

		},
	find_by: function() { // args - {keyname, keyvalue}	
			// returns the first match
		},
	find_by_challenges: function() {
			// find all matches
			// find n matches
			// single inclusive/exclusive ie. {keyname, keyvalue, true/false}
			// multiple inclusive/exclusive ie [{keyname, keyvalue, true/false}]
		}
};

// we give them just this, they fill it out