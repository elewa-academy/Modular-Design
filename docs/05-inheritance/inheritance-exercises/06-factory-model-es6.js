const model = ( name = "none", schema ) => ({
		name,
		schema,
		nextID: 00,
		DB: {},
		create () {},
		read_one () {},
		read_all () {},
		update () {},
		remove () {},
		validate () {},
		find_by () {},
		find_by_challenges () {}
	});

// this does some tricky things with closure.  
// https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91
const challenge_model = ( name = "none", schema ) => (
		let nextID = 00,
		let DB = {};
		return {
			get name() { return name },
			get schema() { return schema },
			create () {},
			read_one () {},
			read_all () {},
			update () {},
			remove () {},
			validate () {},
			find_by () {},
			find_by_challenges () {}
		}
	);



// we give them just this, they fill it out

// https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
