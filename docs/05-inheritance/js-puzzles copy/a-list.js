// write a function that does this:

cool(3) // -> 3

cool(3)(4) // -> 7

cool(3)/* ... */(7) // -> a large number

cool(3)()(4) // -> 7

// understand this lil bugger
function outer(_name) {
	function inner(name) {
		return outer(name);
	};
	inner.title = _name;
	inner.twist = function(name) {
		return this(name);
	};
	return inner;
}

// this article https://stackoverflow.com/questions/9069614/javascript-puzzle-scope