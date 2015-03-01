// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// step 1: identify the value type in each element, ie. string, number, boolean, undefined, array, object
var stringifyJSON = function(obj) {
	console.log(obj);
	if (obj === null) {
		return 'null';
	}
	if (obj.constructor === Number || obj.constructor === Boolean) {
		return obj.toString();
	}
	if (obj.constructor === String) {
		return "\"" + obj + "\"";
	}
	if (obj.constructor === Array) {
		return "\'" + obj + "\'";
	}		
};
