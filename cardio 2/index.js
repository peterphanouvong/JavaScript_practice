function longestWord(sen) {
    // get each word separately from the sentence
    const wordArr = sen.match(/[a-z0-9]+/gi);

    const sortedWordArr = wordArr.sort((a,b) => b.length - a.length);

    const longestWordArr = sortedWordArr.filter(word => word.length === sortedWordArr[0].length);

    if(longestWordArr.length == 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }


}

// console.log(longestWord('my name is peter hello'));

// match --> find the words that contain a substring
// syntax: .match(/[allowable letters]+/gi)
// + means to match words not letters, gi means global case-insensitive

// function chunkArray(arr, len) {
//     var iterations = Math.floor(arr.length / len);
//     let finalArr = [];
//     for (let i = 0; i < iterations; i++) {
//         let newArr = [];
//         for (let j = i*len; j < i*len + len; j++) {
//             newArr.push(arr[j]);
//         }
//         finalArr.push(newArr);
//     }

//     if (arr.length % len != 0) {
//         const extra = arr.length % len;
//         const extraArr = [];
//         for (let i = arr.length - extra; i < arr.length; i++) {
//             extraArr.push(arr[i]);
//         }
//         finalArr.push(extraArr);
//     }

//     return finalArr;
// }

function chunkArray(arr, len) {
    const chunkedArray = [];
    let i = 0;

    while( i < arr.length ) {
        chunkedArray.push(arr.slice(i , i + len));
        i += len;
    }

    return chunkedArray;
}

// console.log(chunkArray([1,2,3,4,5,6], 4));
// split for strings, slice for numbers
// .slice(first index included, end index exluded)

// test_array = [1,2,3,4,5,6,7,8,9,10];
// console.log(test_array.slice(1,9));

const flat_array = [[1,2],[3,4],[5,6]];


// flattened = flat_array.reduce(function(a, b){
//     return a.concat(b);
// });

flattened = [].concat.apply([], flat_array);
// this says: array has a method called concat
// i would like to apply this method to an empty array
// the arguements i would like to concat are in flat_array

console.log(flattened);
