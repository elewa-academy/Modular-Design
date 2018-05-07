// A nice way to understand what's happening in constructor functions
function pseudo_model_constructor(_name) {

	let new_obj = Object.create(pseudo_model_constructor.prototype)

	new_obj.nextId = 00;  // hasOwnProperty -> true
	new_obj.name = _name;
	new_obj.DB = {};

	return new_obj;

};

pseudo_model_constructor.protoype = {
		create: function() {},  // hasOwnProperty -> false
		read_one: function() {},
		read_all: function() {},
		update: function() {},
		remove: function() {}
	};

// we give them just this, they fill it out

