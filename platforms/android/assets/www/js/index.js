// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// funcion para logearse
function login(){
  var nombre_usuario = document.querySelector('#form_usuario').value;
  var contrasena = document.querySelector('#form_contrasena').value;
  
  var url = 'http://myotheri-brandomhk434243.codeanyapp.com:8000/test/api-token-auth/';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  var datos = new FormData();
  datos.append('nombre_usuario', nombre_usuario);
  datos.append('password', contrasena);
  alert(datos);
  xhttp.send(datos);
}