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
  // add your own test in here

  console.log("");

  console.log("Expecting: ['p', 'pi', 'pik', 'pika', 'pikac', 'pikach', 'pikachu', 'i', 'ik', 'ika', 'ikac', 'ikach', 'ikachu', ...]");
  console.log("=>", consecutiveSubstrings('pikachu'));

  console.log("");

  console.log("Expecting: ['e', 'ev', 'eve', 'v', 've', 'e']");
  console.log("=>", consecutiveSubstrings('eve'));

  console.log("");

  console.log("Expecting: ['c', 'ch', 'cha', 'char', 'chart', 'charte', 'charter', 'h', 'ha', 'har', 'hart', 'harte', 'harter', ...]");
  console.log("=>", consecutiveSubstrings('charter'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
 

 //pre build test case
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}




