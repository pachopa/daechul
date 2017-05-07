 var myArgs = process.argv[2];
 
function hello(myArgs){
 var a = '';
 
 for(var i = myArgs.length -1; i > -1; i--){
  a += myArgs[i];
}
  return a;
}
console.log(hello(myArgs));



