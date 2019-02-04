function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// reverseString
// console.log(reverseString("sumga"));
// i learned about splitting arrays and joining arrays

function isPalindrome(str) {
    return str.toUpperCase() === reverseString(str).toUpperCase();
}

// isPalindrome
// console.log(isPalindrome("Racecar"));


function reverseInteger(int) {
    intString = reverseString(int.toString());
    return parseInt(intString);
}

// reverseInteger
// console.log(reverseInteger(19));
// i leaned how to convert between string and Int

function capitaliseLetters(str) {
    wordArray = str.split(' ');
    capWordArray = wordArray.map(function(word){
        return word[0].toUpperCase() + word.substr(1);
    })

    return capWordArray.join(' ');
}

// capitaliseLetters
// console.log(capitaliseLetters("hi b"));
// here i learned about substr and mapping

function maxCharacter(str) {
    const characterMap = {};
    let maxNum = 0;
    let maxChar = '';

    charactersArray = str.split('');
    charactersArray.forEach(function(char){
        if(characterMap[char]) {
            characterMap[char]++;
        } else {
            characterMap[char] = 1;
        }
    });

    for(let char in characterMap) {
        if (characterMap[char] > maxNum) {
            maxNum = characterMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}

// console.log(maxCharacter('penis'))
// here i leaned how to deal with maps/dictionaries
// just do long way if there is no shortcu

function fizzBuzz() {
    for(let i = 1; i < 100; i++) {
        var result = ''
        if(i % 3 == 0) { result += 'Fizz'; }
        if(i % 5 == 0) { result += 'Buzz'; }

        if(result == '') { result = i; }

        console.log(result);
    }

}

// fizzBuzz();
// dont be afeain of doing for loops -> + for concat strings
