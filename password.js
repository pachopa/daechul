
function obfuscate(){
    var currentArg = process.argv[2];
    currentArg = currentArg.replace(/a/g, "4");
    currentArg = currentArg.replace(/e/g, '3');
    currentArg = currentArg.replace(/o/g, '0');
    currentArg = currentArg.replace(/l/g, '1');
    return  currentArg;
}
console.log(obfuscate());

