// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var results = [];

  var findClass = function(node) {
  //	console.log(node);
  	var arr = node.className.split(' ');
 // 	console.log(arr);
    if (arr.indexOf(className) >= 0) {
  	  results.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
    	findClass(node.children[i]);
    }
  }

  findClass(document.body);
 // console.log(results);
  return results;  
};

// document.body - http://www.w3schools.com/jsref/prop_doc_body.asp
// element.childNodes – http://www.w3schools.com/jsref/prop_node_childnodes.asp
// element.classList - http://www.w3schools.com/jsref/prop_element_classlist.asp