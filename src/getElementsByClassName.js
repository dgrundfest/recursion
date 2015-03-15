// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];

  function checkElement (element){
    if(element.classList != undefined && element.classList.contains(className))
      results.push(element);
  };

  function nextNode(node,func){
    func(node);
    if(node.hasChildNodes()){
      var childNodes = node.childNodes;
      for(var i=0;i<childNodes.length;i++)
        nextNode(childNodes[i],func);
    }
  };

  nextNode(document,checkElement);
  return results;

};

