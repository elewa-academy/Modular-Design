function model(_name, _schema) {

	this.nextId = 00;
	this.name = _name;
	this.schema = _schema;
	this.DB = {};

};

pseudo_model_constructor.protoype = {
		create: function() {},
		read_one: function() {},
		read_all: function() {},
		update: function() {},
		remove: function() {},
		validate: function() {},
		find_by: function() {},
		find_by_challenges: function() {}
	};

// we give them just this, they fill it out

