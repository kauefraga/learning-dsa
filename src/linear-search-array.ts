// Essa função faz uma busca linear e retorna verdadeiro caso o elemento procurado exista
// Complexidade O(n) porque quanto mais nomes, mais tempo iterando
function linear_search(names: string[], name: string): boolean {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === name) {
      return true;
    }
  }

  return false;
}

console.log(
  linear_search(["Omen", "Cypher", "Skye"], "Cypher"),
  linear_search(["Omen", "Cypher", "Skye"], "Brimstone")
);
