// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// step 1: identify the value type in each element, ie. string, number, boolean, undefined, array, object
// Done in class:
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

/* Solution for MKS20 6/25/15

var stringifyJSON = function(input) {
  console.log(input);
  if (typeof input === 'number') {
    return input.toString(); // also return '' + input;
  }
  if (input === null) {
    return '' + input;
  }
  if (typeof input === 'boolean') {
    return '' + input;
  }
  if (typeof input === 'string') {
    return '"' + input + '"';
  }
  if (Array.isArray(input)) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
      result.push(stringifyJSON(input[i]));
    }
    return "[" + result + "]";
  }
  if (typeof input === 'object') {
    var result = [];
    for (var key in input) {
      if (input[key] !== undefined && typeof input[key] !== 'function') {
          result.push(('"' + key + '"') + ":" + stringifyJSON(input[key]));
      }
    }
    return "{" + result + "}";
  }
};

*/

/* Old solution:

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
		if (obj.length === 0) {
			return '[]';
		}
		else {
			var value = "[";
			for (var i = 0; i < obj.length - 1; i++) {
				value += stringifyJSON(obj[i]);
				value += ",";
			}
			value += stringifyJSON(obj[obj.length - 1]);
			value += "]";
			return value;
		}
	}
	if (obj.constructor === Object) {
	  for (var j in obj) {
	  	if (typeof obj[j] === 'function' || typeof obj[j] === 'undefined') {
	  		delete obj[j];
	  	}
	  }
      if (Object.keys(obj).length === 0) {
        return '{}';
      }
      else {
      	var value = "{";
      	var temp = [];
      	for (var j in obj) {
      		temp.push(stringifyJSON(j) + ":" + stringifyJSON(obj[j]));
      	}
		for (var i = 0; i < temp.length - 1; i++) {
				value += temp[i];
				value += ",";
		}
		value += temp[temp.length - 1];
      	value += "}";
		return value;
      }
	}
};

*/


