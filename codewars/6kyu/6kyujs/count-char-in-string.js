function count(string) {
    let arr = string.split("")
    const count = {};
    for (const element of arr) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    return count
}