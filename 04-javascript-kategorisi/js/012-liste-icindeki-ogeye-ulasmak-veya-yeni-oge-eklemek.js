// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let item = document.querySelector("ul#list>li:last-child")

let lastChild = document.querySelector("ul#list>li:last-child") // son öğe değiştirdi "last-child"
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child") // ilk öğe değişti "first-child"
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM)

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."


