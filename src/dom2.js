
//asignamos a variables tipos de objetos de html
const $figure=document.createElement("figure"),
$img=document.createElement("img"),
$figcaption=document.createElement("figcaption"),
$figcaptionText=document.createTextNode("Animales we"),
$cards=document.querySelector(".cards");

 
//agregamos el texto al figcaption
$figcaption.appendChild($figcaptionText);
//asignamos la imagen al objeto img
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");

//al img le agregamos que tenga la clase de css para que este ordenado
$figure.classList.add("card");

//agregamos objetos html a l objeto html
$figure.appendChild($img);
$figure.appendChild($figcaption);

//metodo para agregar elementos html a otro elemento
$cards.appendChild($figure);

//AHORA IMAGEN AGREGADA DE OTRA FORMA IGUAL CON JS
const $figure2=document.createElement("figure");

$figure2.innerHTML=`<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;//no se visualiza la imagen

$figure2.classList.add("card");

const estaciones=["Primavera","Verano","Otoño","Invierno"];
const $ul=document.createElement("ul");
document.write("<h3>estaciones del año</h3>");
//agregamos la ul al body
document.body.appendChild($ul);
//recorremos el array y le creamos li
estaciones.forEach(el=>{
    const $li=document.createElement("li")
    $li.textContent=el;//se le asigna el texto al li,(el nombre de la estacion)
    $ul.appendChild($li);
});

//ahora agregamos elemenbtos por fragmentacion, que es mejor
const meses=[
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio"
]

//todos los elementoa se le agregaran al fragmento, cuando esten todos, ahi
//reciendo se les agrega al dom, creo que es asi
const $ul3=document.createElement("ul");

//creamos un fragmento
const $fragment=document.createDocumentFragment();
meses.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragment.appendChild($li)
})
document.write("<h3>Algunos meses del año</h3>");

$ul3.appendChild($fragment);
document.body.appendChild($ul3);


