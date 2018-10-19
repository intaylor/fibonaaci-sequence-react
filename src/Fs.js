function Fs(number) {
  var a = 1, b = 0, temp;
  var result;

  // calculate the sequence based on the input number
  while (number > 0){

    if (b === 0) {
      result = ''+b;
    } else {
      result = result + ', ' + b;
    }
    temp = a;
    a = a + b;
    b = temp;
    number--;

  }

  return result;
}

export default Fs;
