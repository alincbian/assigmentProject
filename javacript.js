let a = "radar";
let b = "rader";

let len = b.length;
console.log(len)

for (let i = 0; i < len / 2; i++) {
  console.log(b[i])  
  console.log(b[len - 1 - i])
  if (b[i] !== b[len - 1 - i]) {
    return console.log("It is not a palindrome");
  } else {
    return console.log("It is a palindrome");
  }
}

const checkPalindrome = (word) => {
  let joined = word.split("").reverse().join("");
  if (joined === word) {
    console.log(`${word} is palindrome `);
  } else {
    console.log(`${word} is not palindrome `);
  }
};

checkPalindrome(b);
// let a = 5;
// let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
