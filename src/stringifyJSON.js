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

/* Done in class:
var stringifyJSON = function(obj) {
	if (Array.isArray(obj)) {
		var temp =[];
		for (var i =0; i<obj.length; i++){
			temp.push(stringifyJSON(obj[i]));
		}
		return "["+temp.join(",")+"]"
	}

	if (typeof obj ==="object" && obj) {
		var temp =[];
		for (var key in obj){
			if (typeof obj[key] !=="function" && obj[key] !== undefined ) {
				temp.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));	
			}
		}
		return "{"+temp.join(",")+"}"
	}
	
	if (typeof obj ==="string"){
		return '"'+obj+'"';
	}
	return ""+obj;
};
*/
