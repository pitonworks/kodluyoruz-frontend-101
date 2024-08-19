// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector("#greeting") // id si greeting olan elemanı seç

greeting.classList.add("text-primary") // text-primary style eklendi
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek


greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek

console.log(greeting.classList)