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


// metot 2
element.addEventListener(event, functionName);

//id =button olan nesne seçildi
const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
button.addEventListener('click',btnClicked);
  function btnClicked(){
    alert("Buton Tıklandı!!!")
    }

// Çıktı : Buton Tıklandı!!!

// mouse click
//id=text olan buton çağrıldı
//dblclick=çift tıklama etkinliği nesneye atandı,fonksiyon ismi parametre olarak tanımlandı
const button = document.querySelector("#text");
button.addEventListener('dblclick',clickFonksiyonu);
  
//fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
function clickFonksiyonu(){
  document.getElementById("text").innerHTML = "NEW FORM";
  }

//id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  
//console ekranı : etkinlik tipi: cut

