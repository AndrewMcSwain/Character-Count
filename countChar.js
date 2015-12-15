function countChar(string, target){
	
	var length = string.length;
   	var counter = "";
  
    function currentLetterIndex(index){
      return string.charAt(index);
    }
  
    for (i = 0; i < length; i++){
   
      if (currentLetterIndex(i) == target){
        counter += "1";
      	};
    };  
    
  var result = counter.length;
  return result;
  
};
      
console.log(countChar("bau bau bau bau babaloO!!", "b"))
