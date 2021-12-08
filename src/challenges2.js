// Desafio 10
function techList(techArray, username) {
  let techLearn = [];
  techArray.sort();
  if (techArray && username != null) {
    for (let i = 0; i < techArray.length; i += 1) {
      let nameTech = techArray[i];
      techLearn.push({
        tech: nameTech,
        name: username,
      });
    }
  }
  if (techArray.length === 0) {
    return "Vazio!";
  }
  return techLearn;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
