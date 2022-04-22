/* -------Task 1--------- */

// function lengthOfString( input ){
//     var a='';

//     for(var i=0; i<input.length; i++){
//         if(a.indexOf(input[i])==-1){
//         a += input[i];
//         }
//     }

//     let stringLength = a.length;
//     return stringLength;
// }
//     console.log(lengthOfString('tddddddddddffdduraall'));





/* -------Task 2--------- */

// function arrayOrder(arr){

// let number = [];
// let string = [];
// let result = [];

// for(let element of arr) {
//     if(typeof element === 'number') {
//         number.push(element);
//     }
//     else {
//         string.push(element);
//     }
// }
// result = number.concat(string);

// console.log(result);
// }

// arrayOrder([2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1]);






/* -------Task 3--------- */
 
    //  var N = 4;
  
    //  function rotateClockwise(a) {
  
    //      for (i = 0; i < parseInt(N / 2); i++) {
    //          for (j = i; j < N - i - 1; j++) {
  
    //              var temp = a[i][j];
    //              a[i][j] = a[N - 1 - j][i];
    //              a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
    //              a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
    //              a[j][N - 1 - i] = temp;
    //          }
    //      }
    //  }
  

    //  function printMatrix(arr) {
    //      for (i = 0; i < N; i++) {
    //          for (j = 0; j < N; j++)
    //              document.write(arr[i][j] + " ");
    //          document.write("<br/>");
    //      }
    //  }
      
    //      var arr = [ [ 1, 2, 3, 4 ],
    //                  [ 5, 6, 7, 8 ],
    //                  [ 9, 10, 11, 12 ],
    //                  [ 13, 14, 15, 16 ] ];
    //      rotateClockwise(arr);
    //      printMatrix(arr);
  




/* -------Task 4--------- */

// function anagram(a, b) {

//     let wordA = a.length;
//     let wordB = b.length;

//     if(wordA !== wordB){
//        console.log('False');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');

//     if(str1 === str2){
//        console.log("True");
//     } else {
//        console.log("False");
//     }
//  }
// anagram("alert","ertal") // to check the result.




/* -------Task 5--------- */

// function integerCouple(arr, val) {

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 1; j <i; j++) {

//             if ( (arr[i] + arr[j]) == val){
//                 console.log((arr[i]+ ' ' + arr[j]));
//             }
//         }

//     }
// }
// integerCouple([1 ,2 ,3, 5,4 , 6 ] , 9)




/* -------Task 6--------- */
// function missingItems(arr, n) {
//     let missingItems = [];
//     for (let i = 1; i <= n; i++) {
//       if (!arr.includes(i)) {
//         missingItems.push(i);
//       }
//     }
//     return missingItems;
//   }
//   console.log(missingItems([9, 1, 4, 2, 10, 6,13,14,12,17,18,20], 20));