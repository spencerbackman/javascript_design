// function list(names){
//   for (var key in names){
//     var obj = names[key];
//     console.log(obj)
//   }
// }

// function lists(names){
//   var res = '';
//   for(var i = 0; i < names.length; i++) {
//     var obj = names[i];
//     for(var key in obj){
//       var name = obj[key]
//       if(name[+1] && name[+2]) {
//         res += name + ', ';
//       } 
//     }
//   }
//   return res
// }

// console.log(lists([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))


// function repeatedChars(str){
//   var res = '';
//   var letter = str.split('');
//   for(var i = 0; i < letter.length; i++){
//     var char = letter[i];
//     res += char + char;
//   }
//   return res;
// }

// console.log(repeatedChars('hello'))


// function countPositivesSumNegatives(input) {  
//   var positive = 0;
//   var negative = 0;
//   for(var i = 0; i < input.length; i++){
//     var char = input[i];
//     if(char > 0) {
//       positive += 1;
//     } else {
//       negative += char;
//     }
//   }
//   var arr = [positive, negative]
//   return arr;
// }

// console.log(countPositivesSumNegatives([1,2,3,4,5,0,-3,-5]))

function neg(n) {
  if(n < 0) {
    return n;
  } else {
    return -n;
  }
}

console.log(neg(5))