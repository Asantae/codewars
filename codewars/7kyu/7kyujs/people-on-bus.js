var number = function(busStops){
    return busStops.map(x => x.reduce((x,y) => x - y)).reduce((x,y) => x + y);
  }