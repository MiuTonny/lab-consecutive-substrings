function consecutiveSubstrings(string) { //function for consecutive substrings
  console.log("Input received:", string); //debugging

  const substrings = [];//empty array for storage

  for (let start = 0; start < string.length; start++) { //outer loop go eacg letter
    for (let end = start + 1; end <= string.length; end++) { //inner loop: build substrings adding 1 letter until the end
      substrings.push(string.slice(start, end)); //extract substring 
    }
  }

  return substrings; //return the list of substrings
}

module.exports = consecutiveSubstrings;


if (require.main === module) {
  
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}




