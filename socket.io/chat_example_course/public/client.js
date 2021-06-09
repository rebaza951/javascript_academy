
// Instanciamos el socket
var socket = io();

// Pedimos un nickname al usuario y si no ingresa uno le asignamos uno aleatorio
var nickname = prompt('Por favor ingresá un nombre de usuario.');
if(!nickname.trim()) {
  nickname = 'anon-' + Math.ceil(Math.random() * 9999);
}

// cuando el usuario envía un nuevo mensaje emitimos el evento 'mensaje creado'
var $btn = document.querySelector('#submit');
var $input = document.querySelector('input');
$btn.addEventListener('click', function(event) {
  event.preventDefault();
  var mensaje = {
    'mensaje': $input.value,
    'nickname': nickname,
    'horario': horaActual()
  };

  // Imprimimos el mensaje y lo enviamos al servidor
  imprimirMensaje(mensaje);
  socket.emit('mensaje creado', mensaje);

  // Limpio el input
  $input.value = '';
}, false);

// Cuando llega un nuevo mensaje, lo imprimimos
socket.on('nuevo mensaje', imprimirMensaje);

// Agrega el mensaje a la lista
var $lista = document.querySelector('#message-list');
function imprimirMensaje (data) {
  var html = '<li class="media"><div class="media-body">';
  html += data.mensaje;
  html += '<br /><small class="text-muted">';
  html += data.horario + ' - ' + data.nickname;
  html += '<small><hr /></div></li>';

  var div = document.createElement('div');
  div.innerHTML = html;

  $lista.appendChild(div.firstChild);
}

// Devuelve la hora actual en minutos y segundos
function horaActual () {
  var ahora = new Date();
  return ceroPadding(ahora.getHours()) + ':' + ceroPadding(ahora.getMinutes());
}

// Agrega cero al principio para horas y minutos
function ceroPadding(t) {
  return t < 10 ? '0' + t : t;
}
