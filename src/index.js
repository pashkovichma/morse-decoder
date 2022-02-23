const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    const keysArr = Object.keys(MORSE_TABLE);
    let keysNew = [];
    const valuesArr = Object.values(MORSE_TABLE);

    for (let i = 0; i < keysArr.length; i++) {
        let a = '';
        for (let j = 0; j < keysArr[i].length; j++) {
            if (keysArr[i][j] == '.') {
            a = a + '10';
            } else a = a + '11';
        }
        while (a.length < 10) {
            a = '0' + a;
        }
        keysNew[i] = a;
    }

    for (let i = 0; i < expr.length; i = i + 10) {
      for (let j = 0; j < keysNew.length; j++) {
        if (expr.slice(i, i + 10) == keysNew[j]) {
          res = res + valuesArr[j];
          console.log('+');
        }
      }
      if (expr.slice(i, i +10) == '**********') {
        res = res + ' ';
      }
    }
    return (res);
  }

module.exports = {
    decode
}