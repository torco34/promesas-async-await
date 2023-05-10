
// Crea una función llamada sum que tome dos números como
// argumentos y devuelva una promesa que resuelva con la 
// suma de estos dos números.

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Ambos argumentos deben ser números"));
    } else {
      resolve(a + b);
    }
  });
}

sum(2, 3)
  .then((result) => console.log(result)) // Imprime 5
  .catch((error) => console.error(error));

sum(2, 4)
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); // Imprime "Error: Ambos argumentos deben ser números"
  sum(2, "error")
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); 