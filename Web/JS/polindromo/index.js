const palavras = [];
const NUMERO_DE_PALAVRAS = 10000;
let numerosDePalindromos = 0;

const gerarPalavraAleatoria = () => {
  let letras = "abcdefghijklmnopqrstuvwxyz";
  let aleatorio = "";
  let qtdLetras = Math.floor(Math.random() * 3 + 3);
  for (let i = 0; i < qtdLetras; i++) {
    let rnum = Math.floor(Math.random() * letras.length);
    aleatorio += letras.substring(rnum, rnum + 1);
  }
  return aleatorio;
};

for (let i = 0; i < NUMERO_DE_PALAVRAS; i++) {
  palavras.push(gerarPalavraAleatoria());
}

for (let i = 0; i < NUMERO_DE_PALAVRAS; i++) {
  let palavra = palavras[i];
  let palindromo = palavra.split("").reverse().join("");
  // let palindromo = palavra.split(/(?:)/u).reverse().join("");
  if (palindromo === palavra) {
    // se quiser ver se a palavra é a mesma que o palindromo
    // console.log({ palindromo, palavra });
    numerosDePalindromos++;
  }
}

console.log({ numerosDePalindromos });
