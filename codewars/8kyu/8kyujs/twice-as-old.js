function twiceAsOld(dadYearsOld, sonYearsOld) {
    for(i=0; i < Infinity; i++){
      if(dadYearsOld/sonYearsOld > 2){
        dadYearsOld++;
        sonYearsOld++;
      }
      else if(dadYearsOld/sonYearsOld == 2){return i;}
      else if(dadYearsOld/sonYearsOld < 2){
        dadYearsOld--;
        sonYearsOld--;
      }
      else {return Math.abs(i);}
    }
  }