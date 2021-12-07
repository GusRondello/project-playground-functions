// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Metodo do '.split()' aprendido no https://www.w3schools.com/js/js_string_methods.asp
function splitSentence(frase) {
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
  pontuacao += (wins * 3) + ties;
  return pontuacao;
}

// Desafio 6
// Metodo da '.sort() aprendido no https://www.w3schools.com/jsref/jsref_sort.asp
function highestCount(array) {
  let numeros = array.sort();
  let maiorNumero = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= 0) {
      if (array[i] >= numeros[numeros.length - 1]) {
        maiorNumero.push(array[i]);
      }
    }
    if (array[i] < 0) {
      if (array[i] >= numeros[0]) {
        maiorNumero.push(array[i]);
      }
    }
  }
  return maiorNumero.length;
}

// Desafio 7
// "Math.abs()" aprendido em https://www.w3schools.com/js/js_math.asp
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = []
  for (let i = 0; i < array.length; i += 1){
    let elemento = array[i]
    if (elemento % 3 === 0){
      arrayReturn[i] = "fizz";
    }
    if (elemento % 5 === 0){
      arrayReturn[i] = "buzz";
    }
    if (elemento % 3 === 0 && elemento % 5 === 0){
      arrayReturn[i] = "fizzBuzz";
    }
    if (elemento % 3 !== 0 && elemento % 5 !== 0) {
      arrayReturn[i] = "bug!";
    }
  }
  return arrayReturn;
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
