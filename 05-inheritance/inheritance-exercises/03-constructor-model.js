// any function can be a constructor if you use the "new" key word

function model(_name) {

	this.nextId = 00;
	this.name = _name;
	this.DB = {};

};

model.protoype = {
		create: function() {},
		read_one: function() {},
		read_all: function() {},
		update: function() {},
		remove: function() {}
	};



// wrapper to avoid using "new"
// function model_wrapper(_name) {
// 	return new model(_name);
// }

// module.exports = model_wrapper