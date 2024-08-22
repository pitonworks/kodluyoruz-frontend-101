// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********
//parametreler
// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


let firstName = "Lorem"

function greetings(firstName="", lastName="") { // default parametre aliyor..
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    // console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 

console.log(firstName) // degisken
greetings() // fonksiyona parametre gondermedik ??
greetings("Parametre")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ?????
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum") )

//********************************************************************
function fonksiyonunAdi (parametre1, parametre2,...parametreN) {
    // ALINAN PARAMETRELER İLE YAPILMAK İSTENEN İŞLEMLER
    return fonksiyonunCiktisi
}
//********************************************************************

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama(r) {// Fonksiyonumuz, r parametresini alıyor. {
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.