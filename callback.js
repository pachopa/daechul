var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(input){


    return Math.sqrt(input.x * input.x + input.y * input.y);

})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


// var kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//                {key: 3, value: 30}];

// var reformattedArray = kvArray.map(function(obj) {
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });

