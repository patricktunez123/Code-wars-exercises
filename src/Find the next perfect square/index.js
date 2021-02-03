function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
        console.log(Math.pow(++number, 2))
      return Math.pow(++number, 2)
    }
    console.log(-1)
    return -1;
  }

  findNextSquare(114) // 114 is not a perfect square so the result is -1
  findNextSquare(9) // 9 is a perfect square so the result is 16