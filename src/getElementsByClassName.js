// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var newArray = [];
  var dom = document.body;
  for (var i = 0; i < dom.length; i++)  
  // iterate through document.body
  // at each element, use recursion to search through nested elements? 
};


// document.body - http://www.w3schools.com/jsref/prop_doc_body.asp
// element.childNodes – http://www.w3schools.com/jsref/prop_node_childnodes.asp
// element.classList - http://www.w3schools.com/jsref/prop_element_classlist.asp