// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
  pontuacao += (wins * 3) + ties;
  return pontuacao
}

// Desafio 6
function highestCount(array) {
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
