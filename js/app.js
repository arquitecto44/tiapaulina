
/* ===================================== */
/* LA TÍA PAULINA */
/* APP.JS */
/* ===================================== */


/* ===================================== */
/* SELECTORES */
/* ===================================== */

const aboutBtn =
document.getElementById("aboutBtn");

const aboutModal =
document.getElementById("aboutModal");

const closeAbout =
document.getElementById("closeAbout");

const productModal =
document.getElementById("productModal");

const closeProduct =
document.getElementById("closeProduct");

const modalImage =
document.getElementById("modalImage");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const modalPrice =
document.getElementById("modalPrice");

const modalWhatsapp =
document.getElementById("modalWhatsapp");


/* ===================================== */
/* POPUP QUIÉNES SOMOS */
/* ===================================== */

if(aboutBtn){

aboutBtn.addEventListener("click",()=>{

aboutModal.style.display="flex";

});

}

closeAbout.addEventListener("click", () => {

aboutModal.style.display = "none";

});


/* ===================================== */
/* CERRAR MODAL CLICK FUERA */
/* ===================================== */

window.addEventListener("click", (e) => {

if (e.target === aboutModal) {

aboutModal.style.display = "none";

}

if (e.target === productModal) {

productModal.style.display = "none";

}

});


/* ===================================== */
/* CONTENIDO QUIÉNES SOMOS */
/* ===================================== */



/* ===================================== */
/* BASE DE DATOS PRODUCTOS */
/* ===================================== */

const products = {

premium01:{
title:"Amanecer Gourmet",
image:"assets/premium-01.jpeg",
price:"S/49.90",
description:`
Incluye:

• 2 minihamburguesas
• 3 tequeños de queso 
• Bebida durazno 296ml
• Salsa
• Lazo decorativo
• Tarjeta personalizada
`
},

premium02:{
title:"Despertar Especial",
image:"assets/premium-02.jpeg",
price:"S/59.90",
description:`
Incluye:

• 1 croissant de jamon y queso 
• 2 empanadas 
• Ensalada de frutas
• 1 jugo de naranja 500 ml
• Lazos decorativos
• Tarjeta personalizada
`
},

premium03:{
title:"Buenos Dias Deluxe",
image:"assets/premium-03.jpeg",
price:"S/59.90",
description:`
Incluye:

• 1 jugo naranja de 500ml
• 2 petipanes con jamon y queso 
• 2 petipanes de pollo
• 1 porcion de waffles con fresas y arandanos
• Tarjeta personalizada
• Lazo decorativo
 `
},

premium04:{
title:"Sorpresa Matinal",
image:"assets/premium-04.jpeg",
price:"S/59.90",
description:`
Incluye:

• 1 jugo de naranja de 500ml
• 2 mini hamburguesas o 2 petipanes de pollo
• 2 tequeños mixtos
• 4 alfajores de maicena
• Tarjerta personalizada
• Lazo decorativo 
`
},

premium05:{
title:"Momento Inolvidable",
image:"assets/premium-05.jpeg",
price:"S/94.90",
description:`
Incluye:

• 1 jugo de naranja de 500ml
• 1 porcion de yogurt mas granola y arandanos
• 3 mini empanaditas
• 3 petipanes de pollo
• 4 triples mixtos
• 4 alfajores de maicena
• 1 porcion de panqueques mas fresa arandano y miel
• Tarjeta dedicatoria personalizada y lazo decorativo 
`
},

premium06:{
title:"Experiencia Premium",
image:"assets/premium-06.jpeg",
price:"S/84.90",
description:`
Incluye:

• 1 jugo de naranja de 500ml
• 2 hamburguesas de pollo crispy
• 2 mini hamburguesas de carne 
• 3 alitas crispy
• 2 mini frankfurters mas papitas al hilo
• 1 porcion de papas fritas mas cremas
• Tarjeta personalizada 
• Lazo decorativo
`
},

premium07:{
title:"Detalle Perfecto",
image:"assets/premium-07.jpeg",
price:"S/159.90",
description:`
Incluye:

• 1 jugo de naranja de 500ml
• globo burbuja personalizada
• set de cubiertos mas servilletas 
• 1 pan con pollo
• 2 cervezas cusqueña
• 1 porcion de waffles
• ensalada de frutas
• frasco con granola
• 1 nectar selva 300ml
• 1 yogurt danlac
• 1 taza de alianza lima
• 1 cholate ferrero de 3 unidades
`
},

premium08:{
title:"Caja Signature",
image:"assets/premium-08.jpeg",
price:"S/189.90",
description:`
Incluye:
• panel personalizado a escojer
• globo burbuja personalizado
• 1 tarjeta personalizada
• 1 peluche de lucifer
• 1 croissant de queso
• 1 papita pringles
• 1 ensalada de frutas
• 1 porcion de waffles 
• 1 pan con pollo
• 1 nectar
• 1 yogurt tigo
`
},

fit01:{
title:"Energia Natural",
image:"assets/fit-01.jpeg",
price:"S/69.90",
description:`
Incluye:

• 1 croissant de jamon y queso 
• 1 frasco con granola
• 1 ensala de fruta mas miel
• 1 jugo de naranja 500ml
• 4 alfajores de maicena
• avena precocida con chia y frutas
• tarjeta personalizada y lazo decorativo
`
},

fit02:{
title:"Balance Perfecto",
image:"assets/fit-02.jpeg",
price:"S/74.90",
description:`
Incluye:

• 1 jugo de naranja
• 1 porcion de waffles de avena mas fruta mas miel
• parfit de yogurt
• 1 globito de corazon
• set cubiertos 
• cafe en sobre
• tarjeta de dedicatoria personalizada
• 2 fotos personalizadas
`
},

fit03:{
title:"Vital Fit",
image:"assets/fit-03.jpeg",
price:"S/89.90",
description:`
Incluye:

• 1 jugo de naranja de 500ml
• 1 porcion de waffles de avena mas fruta y miel
• brownies 
• parfay de yogurt
• chicken sandwiche mas palta 
• globito de corazon
• set de cubiertos
• caja con dedicatoria personalizada
• cafe mas te 

`
},

fit04:{
title:"Power Breakfast",
image:"assets/fit-04.jpeg",
price:"S/88.90",
description:`
Incluye:

• 1 estracto natural
• 1 porcion de waffles
• 1 parfait con fresas y arandanos 
• fruta picada 
• wraps relleno de pollo
• lazo decorativos
• tarjeta dedicatoria personalizada 
`
},

fit05:{
title:"Nutricion Plus",
image:"assets/fit-05.jpeg",
price:"S/119.90",
description:`
Incluye:

• 2 jugos de naranja 
• 1 porcion de waffles de avena mas fruta mas miel
• 2 parfait
• 1 chicken sandwiche mas palta 
• 1 globito de corazon 
• caja de con dedicatoria personalizada
• cafe mas te
`
},

fit06:{
title:"Fit Experience",
image:"assets/fit-06.jpeg",
price:"S/119.90",
description:`
Incluye:

• 1 jugo natural de fresa
• 1 yogurt danlac
• 1 frasco con granola
• 1 bowl de ensalada de frutas
• 3 petipan de pollo
• 3 mini sandwiche crapesse
• tarjeta dedicatoria 
• lazo decorativo
`
},

fit07:{
title:"Healthy Morning",
image:"assets/fit-07.jpeg",
price:"S/94.90",
description:`
Incluye:

• 1 jugo de naranja 500ml 
• 1 porcion de waffles de avena mas fruta mas miel
• brownies
• parfait de yogurt
• chicken sandwiche mas palta
• un globito de corazon
• 4 fotos personalizadas
• set de cubierto mas servilleta
`
},

fit08:{
title:"Smart Breakfast",
image:"assets/fit-08.jpeg",
price:"S/94.90",
description:`
Incluye:
• 1 jugo de naranja 500ml
• 1 porcion de waffles de avena y miel
• parfait de yogurt
• chicken sandwiche de palta
• globito de corazon
• set de cubiertos mas servilletas
• 4 fotos 
• cafe mas te
`
},

corp01:{
title:"Reconocimento Empresarial",
image:"assets/corp-01.jpeg",
price:"S/14.90",
description:`
• 2 mini brownies
• 1 ensalada frutas
• 1 minicrossaint de jamon y queso
• 1 mini hamburguesa
`
},

corp02:{
title:"Detalle Ejecutivo",
image:"assets/corp-02.jpeg",
price:"S/24.90",
description:`
• 1 jugo de naranja 500ml
• 1 ensalada de frutas
• 1 pan con chicharron
• caja personalizada
`
},

corp03:{
title:"Agradecimineto Ejecutivo",
image:"assets/corp-03.jpeg",
price:"S/93.90",
description:`
• caja de carton
• dedicatoria personalizada
• lazo decorativo
• 1 jugo de naranja 500ml
• 1 vino ricardona
• 1 petipan de pollo
• 1 minicroissant mixto 
• 1 brownie 
• 1 globito
• frutas
• embutidos
`
},

corp04:{
title:"Éxito y Gratitud",
image:"assets/corp-04.jpeg",
price:"S/44.90",
description:`
• 1 danlac
• 1 jugo de naranja
• 1 pan con pollo 
• 1 frasco granola
• caja personalizada
• lazos y tarjeta personalizada
`
},

corp05:{
title:"Logro Profesional",
image:"assets/corp-05.jpeg",
price:"S/46.90",
description:`
• caja personalizada
• 3 unidades de chocolate ferrero 
• 1 vaso termico 
• decoracion segun a gusto 
• tarjeta personalizada
`
},

corp06:{
title:"Impulso Empresarial",
image:"assets/corp-06.jpeg",
price:"S/69.90",
description:`
• 1 vino personalizado
• 1 taza personalizada
• 1 chocolate hersey
• un frasco de granola
• una tarjeta personaliza 
• decoracion segun pedido
`
},

corp07:{
title:"Distincion Ejecutiva",
image:"assets/corp-07.jpeg",
price:"S/77.90",
description:`
• 1 vino intipalka
• 1 tabla de queso gourmet con frutas
• decoracion segun la ocacion 
• 1 tarjeta personalizada
• lazos decorativos
`
},

corp08:{
title:"Elite corporativa",
image:"assets/corp-08.jpeg",
price:"S/99.90",
description:`
• 1 caja de pino
• 1 tabla gourmet
• 1 vino intipalka
• 1 copa de vino mas nombre 
• decoracion segun ocacion
• lazos decorativos y tarjeta personalizadas
`
}

};


/* ===================================== */
/* BOTONES DETALLES */
/* ===================================== */
function attachProductEvents(){

document.addEventListener("click", function(e){

const btn = e.target.closest(".details-btn");

if(!btn) return;

const productKey = btn.dataset.product;

const product = products[productKey];

if(!product){
console.error("Producto no encontrado:", productKey);
return;
}

modalImage.src = product.image;

modalTitle.innerText = product.title;

modalPrice.innerText = product.price;

modalDescription.innerHTML = product.description;

const mensaje = encodeURIComponent(
`Hola 👋, estoy interesado en el desayuno "${product.title}".

¿Podrían brindarme más información sobre disponibilidad, personalización y entrega? Gracias.`
);

modalWhatsapp.href =
`https://wa.me/51937392556?text=${mensaje}`;

productModal.style.display = "flex";

});

}
/* ===================================== */
/* CERRAR MODAL PRODUCTO */
/* ===================================== */

closeProduct.addEventListener(
"click",
() => {

productModal.style.display =
"none";

}
);


/* ===================================== */
/* SCROLL SUAVE */
/* ===================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});

});

});


/* ===================================== */
/* ANIMACIÓN APARICIÓN */
/* ===================================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".product-card, .stat-card, .testimonial"
)
.forEach(el=>{

observer.observe(el);

});
attachProductEvents();



/* ===================================== */
/* PREPARADO PARA FUTURO */
/* WHATSAPP INDIVIDUAL */
/* ===================================== */

/*

Ejemplo futuro:

https://wa.me/51937392556?text=
Hola%20quiero%20el%20Premium%2001

Cada producto podrá enviar
su nombre automáticamente.

*/


/* ===================================== */
/* FIN */
/* ===================================== */
