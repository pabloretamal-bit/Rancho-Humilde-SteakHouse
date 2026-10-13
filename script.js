const menuItems = {
  cortes: [
    ["Flat Iron Wagyu","Marmoleado delicado, sellado a fuego vivo. 250 g.","$15.000","PARA DESCUBRIR"],
    ["Entraña Angus","Corte intenso y jugoso, terminado con sal de mar. 250 g.","$18.900","FAVORITO"],
    ["Ribeye Wagyu","Grasa intramuscular y sabor profundo. 300 g.","$29.900","CORTE PREMIUM"],
    ["New York Strip","Textura firme, sabor limpio y costra dorada. 300 g.","$27.900","CORTE PREMIUM"],
    ["Tomahawk para compartir","Corte con hueso, ideal para el centro de la mesa. 900 g aprox.","$59.900","PARA COMPARTIR"],
    ["Picaña a la brasa","Capa exterior dorada y centro rosado. 350 g.","$24.900","DE LA CASA"],
    ["Filete premium","Suave, delicado y cocinado al punto que prefieras. 250 g.","$22.900","CLÁSICO"],
    ["Degustación Rancho","Selección de tres cortes para explorar texturas y sabores.","$39.900","EXPERIENCIA"]
  ],
  parrilla: [
    ["Costillar glaseado","Cocción lenta, glaseado de la casa y brasas al final.","$19.900","COCCIÓN LENTA"],
    ["Pollo de campo a la brasa","Marinado de hierbas, limón y mantequilla tostada.","$15.900","DE LA CASA"],
    ["Short ribs","Costilla de res de cocción prolongada y jugos intensos.","$23.900","FAVORITO"],
    ["Brochetas de lomo","Lomo, cebolla morada y pimientos a fuego directo.","$16.900","A LA BRASA"],
    ["Hamburguesa Humilde","Blend de res, queso maduro, cebolla caramelizada y papas.","$15.000","CLÁSICO"],
    ["Parrillada para dos","Selección de carnes, chorizo artesanal y acompañamientos.","$42.900","PARA COMPARTIR"]
  ],
  entradas: [
    ["Tártaro de res","Corte a cuchillo, mostaza antigua, alcaparras y tostadas.","$12.900","DE AUTOR"],
    ["Provoleta a la parrilla","Queso fundido, orégano, tomate asado y pan rústico.","$9.900","PARA COMPARTIR"],
    ["Empanaditas de osobuco","Relleno de cocción lenta con salsa de la casa.","$8.900","3 UNIDADES"],
    ["Carpaccio de res","Láminas finas, rúcula, parmesano y aceite de oliva.","$11.900","FRESCO"],
    ["Chorizo a las brasas","Chorizo parrillero con pebre ahumado.","$7.900","DE LA PARRILLA"],
    ["Ostras de temporada","Servidas frías con limón y vinagreta suave.","$13.900","SEGÚN DISPONIBILIDAD"]
  ],
  acompanamientos: [
    ["Papas rústicas","Papas doradas, romero y sal de mar.","$4.500","CLÁSICO"],
    ["Puré cremoso","Puré de papas con mantequilla y pimienta recién molida.","$4.900","CREMOSO"],
    ["Ensalada de hojas","Hojas frescas, pera, nueces y vinagreta cítrica.","$5.500","FRESCO"],
    ["Verduras a la brasa","Verduras de estación, aceite de oliva y hierbas.","$5.900","DE TEMPORADA"],
    ["Choclo a la mantequilla","Choclo dorado con mantequilla de merkén suave.","$4.500","DE LA CASA"],
    ["Arroz cremoso de hongos","Arroz meloso, hongos salteados y parmesano.","$7.900","RECOMENDADO"],
    ["Pan de masa madre","Pan tostado con mantequilla batida de hierbas.","$3.900","PARA LA MESA"],
    ["Pebre ahumado","Tomate, cilantro, cebolla y toque de humo.","$2.500","EXTRA"]
  ],
  vinos: [
    ["Copa de tinto de la casa","Selección rotativa de Cabernet Sauvignon o Carmenère.","$5.900","POR COPA"],
    ["Carmenère reserva","Fruta negra, especias y final persistente.","$24.900","BOTELLA"],
    ["Cabernet Sauvignon reserva","Estructura firme, ideal para cortes intensos.","$27.900","BOTELLA"],
    ["Pinot Noir","Perfil elegante, frutos rojos y taninos suaves.","$29.900","BOTELLA"],
    ["Malbec","Notas de ciruela, cuerpo medio y final amable.","$26.900","BOTELLA"],
    ["Espumante brut","Burbuja fina y frescura para comenzar la noche.","$23.900","BOTELLA"],
    ["Vino blanco sauvignon blanc","Cítrico y fresco; ideal para entradas y mariscos.","$21.900","BOTELLA"]
  ],
  bebestibles: [
    ["Agua mineral","Con o sin gas.","$2.500","330 ML"],
    ["Bebidas","Variedades tradicionales.","$2.500","LATA"],
    ["Limonada de la casa","Limón fresco, hielo y menta.","$3.900","SIN ALCOHOL"],
    ["Tónica botánica","Tónica, cítricos y romero.","$4.500","SIN ALCOHOL"],
    ["Espresso","Café corto, intenso y aromático.","$2.500","CAFÉ"],
    ["Americano / cortado","Café recién preparado.","$2.900","CAFÉ"],
    ["Mocktail ahumado","Manzana, jengibre, cítricos y aroma de romero.","$5.500","SIN ALCOHOL"],
    ["Cerveza artesanal","Selección de estilos según disponibilidad.","$4.900","330 ML"]
  ],
  postres: [
    ["Volcán de chocolate","Centro tibio, cacao intenso y helado de vainilla.","$7.900","FAVORITO"],
    ["Crème brûlée","Crema de vainilla con cubierta fina de caramelo.","$6.900","CLÁSICO"],
    ["Cheesecake de frutos rojos","Textura cremosa, frutos rojos y base crocante.","$6.500","DE LA CASA"],
    ["Panqueque manjar","Panqueque tibio, manjar y helado artesanal.","$6.900","PARA COMPARTIR"],
    ["Tabla dulce","Bocados de la casa para cerrar la experiencia.","$9.900","PARA DOS"]
  ]
};
const grid = document.querySelector("#menu-grid");
const tabs = document.querySelectorAll(".tab");
function renderMenu(category){
  grid.innerHTML = menuItems[category].map((item,i)=>`<article class="dish" style="animation-delay:${i*35}ms"><div><h3>${item[0]}</h3><div class="dish-tag">${item[3]}</div></div><div class="dish-price">${item[2]}</div><p>${item[1]}</p></article>`).join("");
  tabs.forEach(tab=>{const active=tab.dataset.category===category;tab.classList.toggle("active",active);tab.setAttribute("aria-selected",active?"true":"false");});
}
tabs.forEach(tab=>tab.addEventListener("click",()=>renderMenu(tab.dataset.category)));
renderMenu("cortes");
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰";}));
const dateInput=document.querySelector('input[name="date"]');
if(dateInput){const today=new Date();dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];}
document.querySelector("#reservation-form").addEventListener("submit",e=>{e.preventDefault();document.querySelector("#form-note").textContent="Gracias. Esta es una demostración: todavía debes conectar el formulario a un servicio de reservas o WhatsApp.";});
