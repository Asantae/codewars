function getCount(str) {
    let vowels = str.match(/[aeiou]/gi);
    if(vowels === null){return 0}
    return vowels.length;
    
  }