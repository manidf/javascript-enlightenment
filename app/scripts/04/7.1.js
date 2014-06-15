	'use strict';

	console.log('Chapter 4: Demo 7.1, The arguments.callee Property');

	var foo = function foo() {
		console.log(arguments.callee); //logs foo
		/* callee could be used to invoke recursively the foo function e.g. arguments.callee()*/
	};
