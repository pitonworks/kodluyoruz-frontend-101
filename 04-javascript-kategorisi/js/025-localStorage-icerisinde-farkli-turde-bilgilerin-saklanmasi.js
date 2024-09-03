// Local Storage Islemleri:
// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

let user = {userName: "omergungor11", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) ) // objeyi stringe dönüştürüp aldık


let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)


// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali :(
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', userStatus),

let userStatus1 = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus1))
//commetne1
// commenti