var topject = {
	name: 'top node',
	children: {},
	link: function(arg_obj, _name) {

		var new_metas = {};
		new_metas.name = _name;
		new_metas.children = [];

		// set new object's proto to the calling node
		var new_obj = Object.create(this);
		// copy all enumerable properties from arg_obj
		new_obj = Object.assign(new_obj, arg_obj)

		
		Object.defineProperty(new_obj, this.get_name.name, {value: this.get_name.bind(new_metas)});
		Object.defineProperty(new_obj, this.set_name.name, {value: this.set_name.bind(new_metas)});
		Object.defineProperty(new_obj, this.add_child.name, {value: this.add_child.bind(new_metas)});
		Object.defineProperty(new_obj, this.get_children.name, {value: this.get_children.bind(new_metas)});
		Object.defineProperty(new_obj, this.remove_child.name, {value: this.remove_child.bind(new_metas)});


		// new_obj.get_name = this.get_name.bind(new_metas);
		// new_obj.set_name = this.set_name.bind(new_metas);
		// new_obj.add_child = this.add_child.bind(new_metas);
		// new_obj.get_children = this.get_children.bind(new_metas);
		// new_obj.remove_child = this.remove_child.bind(new_metas);

		// add new_obj to current node's children
		//this.add_child(new_obj)

		return new_obj;
	},
	flatten: function() {
		if (this.__proto__.__proto__ != null) {
			return this.__proto__.flatten(this.__proto__);
		} else {
			return Object.assign(this.__proto__, this);
		};
	},
	detree: function(obj) {
		if (this.__proto__ == Object.prototype) {
			return Object.assign(Object.create(obj.__proto__), obj)
		} else {
			return detree(obj.__proto__);
		};
	},
	get_name: function() {
			return this.name;
		},
	set_name:  function(_name) {
			this.name = _name;
		},
	add_child: function(new_obj) {
			this.children[new_obj.get_name()] = new_obj;
		},
	get_children: function() {
			return this.children;
		},
	remove_child: function(_name) {
			delete this.children[_name];
		}
};



// http://www.dofactory.com/javascript/composite-design-pattern