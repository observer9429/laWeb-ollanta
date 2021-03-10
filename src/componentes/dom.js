//eplo de uso de una api
let texto="vaya a la cocina";
const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

//hablar(texto);

console.log(document.body);
//la etiqueta html
console.log(document.documentElement);
console.log(document.charset);

setTimeout(()=>{
//imprime el texto seleccionado con el mouse
    console.log(document.getSelection().toString());
},3000)


//LOS QUERYSELECTOR DEVUELVEN NODELIST, Y LOS OTROS UNOS COLLECTIONS


console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));

console.log(document.getElementsByName("nombre"));
//aqui es nombre individual ya que los identificadores son unicos

console.log(document.getElementById("menu"));



//recibe un selector que aun no se sabe de css, se debe especificar el tipo
console.log(document.querySelector("#menu"));//solo trae el primero
//para traer todos los elementos con queryselector, y no solo el priemro
console.log(document.querySelectorAll("a"));

console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li"));

//AHOERA IMPRIMIRMOS TODOS LOS ELELEMNTOS TRAIDOS DE UN QUERY SELECTOR

document.querySelectorAll("a").forEach((valor)=>console.log(valor));

//no siempre se obtienen los mismos resultados
 //con el . metodo or el metodo GET

 console.log(document.documentElement.lang);
 console.log(document.documentElement.getAttribute("lang"));
 
 //con este metodo se obtuvo el link en numero
 console.log(document.querySelector(".link-dom").href);

 //con este metodo se obtuvo lo que se puso en el html dom.html
 console.log(document.querySelector(".link-dom").getAttribute("href"));

 //alterar el valor de una propiedad
 document.documentElement.lang="es";//se cambio lo que indica el idioma en el html de english a espanish

 document.documentElement.setAttribute("lang","es-ESP");

 console.log(document.documentElement.lang);

 //ahora guardamos en una variable el document.("linkdom"),
 //para ya no escribir tanto

 //le agregamos para que sepan que es variable de html o del DOM
 const $linkDOM=document.querySelector(".link-dom");

 //usando el target
 $linkDOM.setAttribute("target","_blank");
 //para evitar ciertos ataques de crackeo
 //pone que no hay relacion entre las paginas
$linkDOM.setAttribute("rel","noopener");

$linkDOM.setAttribute("href","https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=63");
//para ver si tiene un atributo
console.log($linkDOM.hasAttribute("rel"));
//eliminando un atrivbuto
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
//cambiando el valorde esa propiedad
$linkDOM.setAttribute("data-description","Modelo de objeto del documento");
console.log($linkDOM.dataset.description);

console.log($linkDOM.style);//este es mas frecuente de ver
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);

console.log(window.getComputedStyle($linkDOM));

//aplicando stylo al link
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.borderRadius=".5rem";

const $html=document.documentElement,
$body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color") ;

 console.log(varDarkColor,varYellowColor);

 $body.style.backgroundColor=varDarkColor;
 $body.style.color=varYellowColor;
//cambiando el valor a una propiedad del css root
$html.style.setProperty("--dark-color","#22");//faltaria aplicarlo tambien al body
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);

const $card=document.querySelector(".card");

console.log($card);
//agregando algo de css creo ala imagen o card
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.classList);
//se peude remover tambien
$card.classList.remove("rotate-45");

//existe otro metodo que si un elemtno no tiene una propiedad se la agrega
//y si la tiene se la quita--> es toogle
$card.classList.toggle("rotate-45");
//reemplazando una clase de css
$card.classList.replace("rotate-45","rotate-135");
//agregando varias clases a un elmentop
$card.classList.add("opacity-80","sepia");//tambien tiene remove y toggle

//capturamos el que-es
const $whatIsDOM=document.getElementById("que-es");

let text=`<p>primer ejemplo</p><p>segundo ejemplo</p><p>tercer ejemplo</p>`
//agregar contenido textual
$whatIsDOM.textContent=text;
//si queremos que tambien lea las etiquetas de html
$whatIsDOM.innerHTML=text;

//traversing reccorriendo el dom
const $cards=document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);//VEMOS EL TERCER ELEMENTO
console.log($cards.parentElement);//retorna el elementop padre 
//vemos el primer hijo, si funciona
console.log("primero child element");
console.log($cards.firstChild);
console.log($cards.firstElementChild);//con element si se ve el eleementos

console.log($cards.previousElementSibling);//para ver el elemento que esta antes de este

console.log($cards.children[3].closest("section"));//da el nombre del objeto html más cercano indicado









 





