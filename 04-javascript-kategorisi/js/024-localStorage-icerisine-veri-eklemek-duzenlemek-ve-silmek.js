// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
let email = "omergungor99@gmail.com"
let name1 = "Ömer Faruk"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir (key, value)
localStorage.setItem('userName', name1)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..

// Veri ekleyip çıkarabileceğimiz dinamik bir uygulama **************************************************
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>New Tab App</title>

  <link rel="stylesheet" href="css/primitive.css">
</head>

<body>

  <div class="small-container">
    <h1>New Tab App</h1>

    <form>
      <input id="item" type="text" placeholder="New">
    </form>

    <h2>Items</h2>
    <ul></ul>

    <button>Clear All</button>
  </div>

  <script src="js/scripts.js"></script>
</body>

</html>