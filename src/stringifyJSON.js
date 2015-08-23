// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// step 1: identify the value type in each element, ie. string, number, boolean, undefined, array, object

var stringifyJSON = function(obj) {

	if (Array.isArray(obj)) {
		var temp =[];
		for (var i =0; i<obj.length; i++){
			temp.push(stringifyJSON(obj[i]));
		}
		return "["+temp.join(",")+"]";
	}

	if (typeof obj ==="object" && obj) { // cases where null (null is obj)
		var temp =[];
		for (var key in obj){
			if (typeof obj[key] !== "function" && obj[key] !== undefined ) {
				temp.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));
			}
		}
		return "{"+temp.join(",")+"}";
	}

	if (typeof obj ==="string") {
		return '"' + obj + '"';
	}

	return "" + obj;
};

