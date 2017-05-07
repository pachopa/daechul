   var myArgs = process.argv[2];
  
  function hello(myArgs){
   var a = '';
  
   for(var i = 1; i <myArgs.length; i++){
    a += myArgs[i];
  }
    
    return a += myArgs[0] + "ay";
  }
  console.log(hello(myArgs));
  
