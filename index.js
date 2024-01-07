let button  = document.getElementById("button-no")
let buttonsi  = document.getElementById("button-si")
let panel  = document.getElementById("panel-si")
button.addEventListener("mouseenter", function (e) {
  // Genera valores aleatorios para las coordenadas X e Y
  var randomX = Math.random() * 200;
  var randomY = Math.random() * 300;

  // Aplica la transformación con una cadena combinada
  button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  console.log("funciona")
});

buttonsi.addEventListener("click", function() {
  console.log("hola")
  panel.style.display = `inline`;

});