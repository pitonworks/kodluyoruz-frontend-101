// ** Ilk Fonksiyonumuzu Tanimlamak:
// fonksiyonlar
function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}


// hata alabiliriz...
// function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }

function addition(sayi1,sayi2){  //function name and parameters
    console.log(sayi1+sayi2);     //body
}

var add = function (sayi1,sayi2){  //Anonim bir fonksiyon oluşturduktan sonra bu 
    //fonsksiyonu bir değişkene atadık
console.log(sayi1+sayi2);
}

function addition(sayi1,sayi2){
    return (sayi1+sayi2);
}
// **************************************************************
var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};
// **************************************************************
var sonuc = topla(10,20); // 30 döner.

function carp(sayi1, sayi2) {
sayi1 * sayi2;
};

result=carp(10,20); // undefined

// **************************************************************

var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz
// **************************************************************
// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
    let result = a + b;
    return result;
  };
// **************************************************************

hello() // calistir
