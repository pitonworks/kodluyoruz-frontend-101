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

var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.

hello() // calistir
