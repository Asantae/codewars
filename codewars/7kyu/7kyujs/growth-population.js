function nbYear(p0, percent, aug, p) {
    var years = 0;
    while (p > p0) {
      p0 += Math.floor((p0 * (percent/100)) + aug);
      years++;
    }
    return years;
  }