// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let h2 = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "Değişen bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add("btn")

let title2 = document.getElementById('title2')
title2.innerHTML = "Değişen bilgi"
console.log(title2.innerHTML)