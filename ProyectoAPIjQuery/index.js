var numPagina=1, referenciaFuncion;


function peticionBusiness() {
  if(referenciaFuncion!=peticionBusiness){
    numPagina=1;
  }
  $("#global").text("");
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numPagina+"&pageSize=15&country=us&category=business&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  referenciaFuncion=peticionBusiness;
}

function peticionEntertainment() {
  if(referenciaFuncion!=peticionEntertainment){
    numPagina=1;
  }
  $("#global").text("");
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numPagina+"&pageSize=15&country=us&category=entertainment&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  referenciaFuncion=peticionEntertainment;
}

function peticionGeneral() {
  if(referenciaFuncion!=peticionGeneral){
    numPagina=1;
  }
  $("#global").text("");
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numPagina+"&pageSize=15&country=us&category=general&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  referenciaFuncion=peticionGeneral;
}

function peticionHealth() {
  if(referenciaFuncion!=peticionHealth){
    numPagina=1;
  }
  $("#global").text("");
  loadDoc("https://newsapi.org/v2/top-headlines?page="+numPagina+"&pageSize=15&country=us&category=health&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  referenciaFuncion=peticionHealth;
}

function peticionBuscador()
{
  if(referenciaFuncion!=peticionBuscador){
    numPagina=1;
  }
  $("#global").text("");
  evento= window.event;
  leidoDelInput= evento.target.value;
if(leidoDelInput!=""){
  loadDoc("https://newsapi.org/v2/everything?q="+leidoDelInput+"&page"+numPagina+"&pageSize=15&apiKey=5e976ef6430f49e08d17ea33c7605f41");
}
else{
  
}
    referenciaFuncion=peticionBuscador;
}

function cambiarPagina(){
    numPagina++;
    referenciaFuncion();
}

function loadDoc(url){
  $.ajax({
    url: "https://api.allorigins.win/raw?url="+encodeURIComponent(url),
    beforeSend: function() {
      
      $("#miimagen").attr("style", "display: inline");
    }
  })
    .done(function( misDatos ) {
    
        console.log( "Sample of data:", misDatos);
        $("#miimagen").attr("style", "display: none");

        $.each(misDatos, (i)=>{
         crearCard(misDatos.articles[i]);
        });
    });
}




 window.onload = () =>{

   loadDoc("https://newsapi.org/v2/everything?q=game&pageSize=15&apiKey=5e976ef6430f49e08d17ea33c7605f41");
   
 }

 var numeroPagina=1;
 var referenciaFuncion;
 
 window.onload = () =>{
   loadDoc("https://newsapi.org/v2/everything?q=covid&pageSize=12&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
   
 }
 
 

 function crearCard(){
  divpadre=$("<div class='w3-container-noticia' id='w3-container'></div>");

  img=$("<img class='imgpadre'></img>");
  boton=$("<button class='botonpadre'></button>");
  titulo=$("<h3 class='mih3'></h3>");

  divpadre.appendTo($("#global"));
  titulo.appendTo($("#w3-container"));
  img.appendTo($("#w3-container"));
  boton.appendTo($("#w3-container"));

  !noticia.urlToImage ? $("imgpadre").attr("src", "img/imagennodisponible.png"):
  $("imgpadre").attr("src", noticia.urlToImage);
  $(".botonpadre").click(mostrarDetalle(noticia));
  $(".botonpadre").text("Mas informacion");
  $(".mih3").text(noticia.title);
 }

   function mostrarDetalle(articulo)
 {
    modal = $("#modalDetalle");
    autor= $(".Autor");
    descripcion= $(".descripcion");
    contenido=$(".contenido");
    publicado=$(".publicado");
    enlace=$(".url");
    !articulo.author? autor.text("Anónimo"): autor.text(articulo.author);
    !articulo.content? autor.text("No hay contenido"):autor.text(articulo.content);   
    !articulo.description? descripcion.text("No hay descripcion"):descripcion.text(articulo.description);
    contenido.text(articulo.contenido);
    publicado.text(articulo.publishedAt);
    enlace.attr("href", articulo.url);
    modal.style.display = "block";

 }
   
 
  function peticionScience() {
    if(referenciaFuncion!=peticionScience){
      numeroPagina=1;
    }
   document.getElementById("global").innerHTML="";
   loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=science&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
   referenciaFuncion=peticionScience;
 }
 
 function peticionHealth() {
   if(referenciaFuncion!=peticionHealth){
     numeroPagina=1;
   }
   document.getElementById("global").innerHTML="";
   loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=health&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
   referenciaFuncion=peticionHealth;
 }
 
 function peticionSports() {
   if(referenciaFuncion!=peticionSports){
     numeroPagina=1;
   }
   document.getElementById("global").innerHTML="";
   loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=sports&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
   referenciaFuncion=peticionSports;
 }
 
 function peticionTechnology() {
   if(referenciaFuncion!=peticionTechnology){
     numeroPagina=1;
   }
   document.getElementById("global").innerHTML="";
   loadDoc("https://newsapi.org/v2/top-headlines?page="+numeroPagina+"&country=us&pageSize=12&category=technology&apiKey=1c34e728a9ed40dbabbc3b34991bc560");
   referenciaFuncion=peticionTechnology;
 }
 
 function peticionBuscador() {
   document.getElementById("global").innerHTML="";
   evento= window.event;
   leidoDelInput= evento.target.value;
   if(leidoDelInput!="")
   loadDoc("https://newsapi.org/v2/everything?q="+leidoDelInput+"&pageSize=12&apiKey=1c34e728a9ed40dbabbc3b34991bc560")
   else{
       img= document.createElement("img");
       img.setAttribute("src", "img/notFound.jfif");
       img.setAttribute("id", "img");
   document.getElementById("global").appendChild(img);
   }
 }
 
 function pasoPagina(){
   numeroPagina++;
   referenciaFuncion();
 }