var compra = window.open("compra.html");

function calcular_D() {
    var unidad = document.getElementById("numero").value;
    var precio = document.getElementById("price").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto").innerHTML= monto;

}
function calcular_T() {
    var unidad = document.getElementById("numero_2").value;
    var precio = document.getElementById("price_2").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto_2").innerHTML= monto;

}
function calcular_L() {
    var unidad = document.getElementById("numero_3").value;
    var precio = document.getElementById("price_3").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto_3").innerHTML= monto;

}
function calcular_F() {
    var unidad = document.getElementById("numero_4").value;
    var precio = document.getElementById("price_4").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto_4").innerHTML= monto;

}
function calcular_B() {
    var unidad = document.getElementById("numero_5").value;
    var precio = document.getElementById("price_5").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto_5").innerHTML= monto;

}
function calcular_Y() {
    var unidad = document.getElementById("numero_7").value;
    var precio = document.getElementById("price_7").innerHTML;
    var monto = unidad * precio;
    
    document.getElementById("monto_7").innerHTML= monto;

}

var mont = 0;
var num = 0;
function enviar_carrito1(numero, precio, nombre, imagen, monto) {
  if (numero >= 1) {
    
    var tabla = document.getElementById("tab");

    if (tabla) {
      
      var fila = tabla.insertRow(tabla.rows.length);

    
      var celdaImagen = fila.insertCell();
      var celdaNombre = fila.insertCell();
      var celdaPrecio = fila.insertCell();
      var celdaCantidad = fila.insertCell();
      var celdaSubtotal = fila.insertCell();

     
      var imagenElement = document.createElement("img");
      imagenElement.src = "img/" + imagen; 

    
      celdaImagen.appendChild(imagenElement);

      
      celdaNombre.textContent = nombre;
      celdaPrecio.textContent = precio;
      celdaCantidad.textContent = numero;
      celdaSubtotal.textContent = monto;

     
      mont += parseInt(monto);
      num ++;
      document.getElementById("contador").innerHTML = num;
    } else {
      console.log("No se encontró la tabla con ID 'tab'.");
    }
  } else {
    alert("Ingrese las unidades del producto: " + nombre);
  }
}

function realizarCompra() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;

  console.log(nombre, email);

  // Mostrar
  document.getElementById("rptci").innerHTML = nombre;
  document.getElementById("rptc").innerHTML = email;
  document.getElementById("rptt").innerHTML = mont;
}



function limpiar() {
  document.getElementById("rptci").innerHTML = "nombre";
  document.getElementById("rptc").innerHTML = "email";
  document.getElementById("rptt").innerHTML = "mont";
  document.getElementById("numero").value = "";
  document.getElementById("numero_2").value = "";
  document.getElementById("numero_3").value = "";
  document.getElementById("numero_4").value = "";
  document.getElementById("numero_5").value = "";
  document.getElementById("numero_7").value = "";
  document.getElementById("monto").innerHTML= "";
  document.getElementById("monto_2").innerHTML= "";
  document.getElementById("monto_3").innerHTML = "";
  document.getElementById("monto_4").innerHTML= "";
  document.getElementById("monto_5").innerHTML = "";
  document.getElementById("monto_7").innerHTML= "";
  document.getElementById("contador").innerHTML = "";

  limpiarTabla();
  
}

function limpiarTabla() {
  // Obtener la referencia de la tabla
  var tabla = document.getElementById("tab");

  // Obtener la cantidad de filas en la tabla
  var filas = tabla.rows.length;

  // Eliminar las filas una por una, comenzando desde la última fila hacia arriba
  for (var i = filas - 1; i > 0; i--) {
    tabla.deleteRow(i);
  }
}