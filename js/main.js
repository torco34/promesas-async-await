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
sum(4, 8)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Crea una función llamada getData
// que simule una llamada a una API
// externa (por ejemplo, usando setTimeout)
//  y devuelva una promesa que resuelva con un objeto de datos.

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        id: 1,
        name: "Saul",
        edad: 18,
      };
      resolve(data);
    }, 4000);
  });
}
getData()
  .then((data) => console.log(data))
  .catch((err) => console.err(err));

//  Crea una función llamada getUserData que tome un ID de usuario como argumento y
// devuelva una promesa que resuelva con el objeto de datos del usuario con ese ID
// (puedes simular la respuesta de una API externa usando getData).

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://example.com/api/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(`Error fetching user data for user ID ${userId}`);
        }
      })
      .catch((error) => {
        reject(`Error fetching user data for user ID ${userId}: ${error}`);
      });
  });
}
getUserData(123)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });

//EJERCICIO 3
// function getUserData(userId){
// return new Promise((resolve, reject) => {
//     fetch(`https://example.com/api/users/${userId}`)
//     then(response => {
//         if(response.ok){
//             resolve(response.json())
//         }else{
//             reject(`erro no funcion`)
//         }

//     })
// })
// }
