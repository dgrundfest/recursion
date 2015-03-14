// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if(obj === null){
		   	return "null";
	};
	if(typeof obj === 'function' || obj === "undefined" || obj ==="functions" || obj === undefined){
		return "";
	};
   if(typeof obj === 'string'){
   	return '\"'+obj+'\"';
   };
   if(typeof obj === 'number' || typeof obj === 'boolean'){
   	return obj.toString();
   };
   if(typeof obj === 'object'){
	   var returnForObject,toAdd;
	   if(Array.isArray(obj)){
	   	var returnForObject="[";
	   	for(var i=0;i<obj.length;i++){
	  		toAdd=stringifyJSON(obj[i]);
	  		returnForObject+=toAdd;
	  		if(i<obj.length-1 && toAdd != ""){
	  			returnForObject+=",";
	  		};
		};
		returnForObject+="]";
	  } else{
	  	var keys=Object.keys(obj);
	   	returnForObject="{"
	    	for (var i=0;i<keys.length;i++){
	    		toAdd=stringifyJSON(keys[i])+":"+stringifyJSON(obj[keys[i]]);
	    		if(toAdd!=":"){
	    			returnForObject+=toAdd;
	    		};
	    		if(i<keys.length-1 && returnForObject!="{"){
	    			returnForObject+=",";
	    		};
	    	};
	    returnForObject+="}";
	    };
	  return returnForObject;
    };
};


