// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom")
  e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const checkArray = (arr) => {
  let res = 0;
  arr.forEach((num) => {
    console.log(num > 5);
    if (num > 5) {
      res += num;
    }
  });
  return res;
};

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà:
  "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di 
    ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 22.5,
    name: "old clock",
    id: "1234",
    quantity: 3,
  },
  {
    price: 1.2,
    name: "pencil",
    id: "2032",
    quantity: 21,
  },
  {
    price: 100,
    name: "GTA6",
    id: "2034",
    quantity: 1,
  },
  {
    price: 12,
    name: "strwberry candy",
    id: "5232",
    quantity: 5,
  },
  {
    price: 24,
    name: "picture",
    id: "3462",
    quantity: 2,
  },
];

const shoppingCartTotal = () => {
  let res = 0;
  shoppingCart.forEach((obj) => {
    res += obj.price * obj.quantity;
  });
  return res;
};

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart"
  e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = (obj) => {
  shoppingCart.push(obj);
  return shoppingCart.length;
};

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà:
  "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso 
 contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = (arr) => {
  let mostExpensive = { price: 0 };
  arr.forEach((obj) => {
    if (obj.price > mostExpensive.price) {
      mostExpensive = obj;
    }
  });
  return mostExpensive;
};

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà:
  "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = (arr) => arr[arr.length - 1];

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per 
 tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = (n) => {
  const arrLastThree = [];
  for (let i = 0; i < 3; i++) {
    let newNumber = Math.floor(Math.random() * 10);
    console.log(newNumber);
    arrLastThree.push(newNumber);
  }
  while (arrLastThree[0] <= n || arrLastThree[1] <= n || arrLastThree[2] <= n) {
    arrLastThree.shift();
    let newNumber = Math.floor(Math.random() * 10);
    console.log(newNumber);
    arrLastThree.push(newNumber);
  }
};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta
 automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const average = (arr) => {
  let tot = 0;
  let numberOfNumbers = 0;
  arr.forEach((elem) => {
    if (typeof elem == "number") {
      tot += elem;
      numberOfNumbers++;
    }
  });
  return tot / numberOfNumbers;
};

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const longest = (arr) => {
  let res = "";
  arr.forEach((str) => {
    if (str.length > res.length) {
      res = str;
    }
  });
  return res;
};

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato 
 "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const antiSpamFilter = (emailContent) => {
  const emailContentWords = emailContent.split(" ");
  let control = 0;
  emailContentWords.forEach((word) => {
    if (word == "SCAM" || word == "SPAM") {
      control += 1;
    }
  });
  return control < 1;
};

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const howManyDays = (date) => {
  const thatDay = date.split("/")[0];
  const thatMonth = date.split("/")[1] - 1;
  const thatYear = date.split("/")[2];
  const thatDate = new Date(thatYear, thatMonth, thatDay);
  const thatDateInMilliseconds = thatDate.getTime();
  const today = new Date();
  const todayInMilliseconds = today.getTime();
  const diffrenceMilliseconds = todayInMilliseconds - thatDateInMilliseconds;
  const diffrenceDay = Math.floor(diffrenceMilliseconds / (1000 * 60 * 60 * 24));
  return diffrenceDay;
};

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno 
 della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = (x, y) => {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push("" + i + j);
    }
  }
  return matrix;
};
