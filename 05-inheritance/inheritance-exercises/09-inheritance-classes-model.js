class basic_model {
	constructor(_name) {
		this.name = _name;
		this.nextID = 00;
		this.DB = {};
	}
	get name() {
		 return this.name;
	}
	static get_docs() {
		return {
			// write specs and return them
		};
	}
	create () {}
	read_one () {}
	read_all () {}
	update () {}
	remove () {}
};


class validation_model extends basic_model {
	constructor(_name, _schema) {
		super(_name);
		this.schema = _schema
	}
	static get_docs() {
		return {
			// updated docs
		};
	}
	get schema() {
		return this.schema;
	}
	create() {
		this.validate();
		super() 
	}
	update() {
		// validate, super
	}
	validate () {}
};

class searchable_model extends validation_model {
	constructor(_name, _schema) {
		super(_name, _schema);
	}
	static get_docs() {
		return {
			// updated docs
		};
	}
	find_by () {}
	find_by_challenges () {}
};

// we give them just this, they fill it out
// https://coryrylan.com/blog/javascript-es6-class-syntax
// https://www.quora.com/Why-cant-static-method-access-this-or-super-in-Java
