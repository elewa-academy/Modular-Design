const model = ( name = "none") => ({
		name,
		nextID: 00,
		DB: {},
		create () {},
		read_one () {},
		read_all () {},
		update () {},
		remove () {}
	});

// this does some tricky things with closure.  
// https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91
// const challenge_model = ( name = "none" ) => (
// 		let nextID = 00,
// 		let DB = {};
// 		return {
// 			get name() { return name },
// 			create () {},
// 			read_one () {},
// 			read_all () {},
// 			update () {},
// 			remove () {}
// 		}
	// );


// more closure
		
// function create () {},
// function read_one () {},
// function read_all () {},
// function update () {},
// function remove () {}

// const model = ( name = "none") => ({
// 		name,
// 		nextID: 00,
// 		DB: {},
// 	});

// we give them just this, they fill it out

// https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1
