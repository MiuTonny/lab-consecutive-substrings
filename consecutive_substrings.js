function consecutiveSubstrings(string) {
  console.log("Input received:", string); //debugging

  const substrings = [];

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      substrings.push(string.slice(start, end));
    }
  }

  return substrings;
}

module.exports = consecutiveSubstrings;


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}




