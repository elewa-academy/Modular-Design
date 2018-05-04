function model(_name) {

	this.nextId = 00;
	this.name = _name;
	this.DB = {};

};

pseudo_model_constructor.protoype = {
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