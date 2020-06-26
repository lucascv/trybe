// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, 
// instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios 
// de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 
// 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then 
// e um catch à Promise com qualquer coisa dentro só para que o código funcione.

/* Resolvendo com FOR
new Promise((resolve, reject) => {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    let newNumber = (Math.floor(Math.random() * (50 - 1)) + 1) ** 2;
    arr.push(newNumber);
    sum += newNumber;
  }
  if (sum < 8000) resolve(console.log(sum));
  else reject('Soma menor que 8000');

})    
*/

// Resolvendo com HOF's

new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = arr.map(num => num = Math.floor(Math.random() * 50) ** 2);
  const sum = arr2.reduce((a, b) => a + b);
  if (sum < 8000) resolve(console.log(sum));
  else reject(console.log('Erro!'));
})


