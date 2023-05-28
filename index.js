function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);

  return word === reversedWord;
}

//reverse String function using method chaining
function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
step 1: create array with copy of input string using .split()
step 2: reverse the array using .reverse()
step 3: join the array into new string using .join()
step 4: compare input value with new string using if === statement
step 5: return true or false

*/

/*
  Add written explanation of your solution here
  my code will create a new string with the input from the function.
  then in one line it will split into an array, reverse, and join back into a string
  then we will test whether the original word and this new word match
  if they match: the word is a Palindrome and if they dont match it is not a Palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
