function DNAStrand(dna){
    let arr = []
    dna.split('').forEach(item => (item == 'A' ? arr.push('T'):(item == 'T' ? arr.push('A'):(item == 'C' ? arr.push('G'):(item == 'G' ? arr.push('C'):'')))));
    return arr.join('');
    
  }