function protopetual_tree(_name) {
	// for use in link
	// all methods will be added as non-enumeralbe props in new node
	var tree_stuff = {
				get_name: function () {
						return this.name;
					},
				set_name: function (_name) {
						this.name = _name;
					},
				add_child: function (new_obj) {
						this.children[new_obj.name] = new_obj;
					},
				get_children: function () {
						return this.children;
					},
				remove_child: function(_name) {
						delete this.children[_name];
					}
			};

	function bind_tree_stuff(new_obj, new_metas) {	
		var self = Object.assign({}, new_obj);
		for (var method in tree_stuff) {
			Object.defineProperty(self, method,{ value: tree_stuff[method].bind(new_metas)});
		};
		return self;
	};
	// available by proto lookup
	// add a child
	// add option to flatten arg_obj
	function link(_name, arg_obj) {
		console.log(this)

		var new_metas = {};
		new_metas.name = _name;
		new_metas.children = [];

		// set new object's proto to the calling node
		var new_obj = Object.create(this);
		// copy all enumerable properties from arg_obj
		new_obj = Object.assign(new_obj, arg_obj)
		// give it meta-prop access and treehood
		new_obj = bind_tree_stuff(new_obj, new_metas);
		// add new_obj to current node's children
		this.add_child(new_obj)
		return new_obj;
	};
	// returns root node
	function find_root() {
		var current = this;
		while (current.__proto__ != Function.prototype) {
			current = current.__proto__;
		};
		return this;
	};
	// any node can incite it's tree to start an new empty protopetual
	function spawn(name) {
		return this.find_root()(name);
	};
	// return inheritance chain flattened and de-treed
	function flatten(obj) {
		if (this.__proto__ == Function.prototype) {
			return Object.assign(obj.__proto__, obj);
		} else {
			return flatten(obj.__proto__);
		};

	};
	// return de-treed inheritance chain - lives in closure
	function detree(obj) {
		if (this.__proto__ == Object.prototype) {
			return Object.assign(Object.create(obj.__proto__), obj)
		} else {
			return detree(obj.__proto__);
		};
	};


	// var starter_obj = {
	// 	add_child: function() {
	// 		console.log('tree initiated');
	// 	},
	// 	link: link;
	// };

	// get back to function from object
	// function innerpetual(name) {
	// 	return protopetual(name);
	// };
	// gotta make these lines work in link (?)
	var innerpetual = bind_tree_stuff({}, {children: [], name: name});
	innerpetual.link = link;
	innerpetual.find_root = find_root;
	innerpetual.spawn = spawn;
	innerpetual.flatten = flatten;
	innerpetual.detree = detree;
	
	// starter_obj.link('top node', innerpetual);


	return innerpetual;
};

// can
	// return a copy of itself as a top node
// a tree it starts can
	// return any node flattened (no meta-data)
	// return any node as proto-chain of objects (no meta-data)
	// use any node as-is
	// add nodes
	// return root node from any node
	// spawn new tree from any node
	// copy tree from any node




// up proto for using
// down context for finding

	// function find_child(_name) {
	// 	// search from top down to find this child
	// };
	// // return node composed with other node, searched by name
	// // could use efficiency help
	// function compose(_name) {
	// 	this.find_root().
	// };  // awaiting search.
	// can easily be done extra-library with Obj.ass()

	// // any node can incite it's tree to copy itself
	// function mitose() {};


http://www.dofactory.com/javascript/composite-design-pattern