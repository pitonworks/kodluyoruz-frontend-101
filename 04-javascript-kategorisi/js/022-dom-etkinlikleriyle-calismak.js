// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}
// metot 1
element.addEventListener(event, function);
// id =button olan nesne seçildi
const buton = document.querySelector("id");
// Nesneye bir etkinlik atandı..
const buton = document.querySelector("#button");
//Burada ilk olarak tip ('click') ,ikinci olarak da fonksiyonun kendisi parametre olarak eklenir
buton.addEventListener('click' , function(){
  alert("Buton Tıklandı");
       })
 
// Çıktı : Buton Tıklandı
