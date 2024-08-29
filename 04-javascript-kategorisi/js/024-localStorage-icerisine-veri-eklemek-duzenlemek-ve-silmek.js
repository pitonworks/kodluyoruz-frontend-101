// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
let email = "omergungor99@gmail.com"
let name = "Ömer Faruk"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir (key, value)
localStorage.setItem('userName', name)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..