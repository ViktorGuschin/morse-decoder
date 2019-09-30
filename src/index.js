const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const decodeChars = expr.match(/.{1,10}/g);
  const encodeChars = decodeChars.map(el => {
    let symb = '';
    if (el === '**********') {
      symb += ' ';
    } else {
      let arrChars = el.match(/.{1,2}/g);
      arrChars.forEach(element => {
        if (element === '10') {
          symb += '.';
        } else if (element === '11') {
          symb += '-';
        }
      });
    }
    return symb;
  });
  let phrase = '';
  phrase = encodeChars.reduce((acc, item) => {
    if (item === ' ') {
      return acc + item;
    } else {
      return acc + MORSE_TABLE[item];
    }
  }, phrase);
  return phrase;
}

module.exports = {
  decode,
};
