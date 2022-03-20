var BolillasDisponibles = [];
var BolillasSacadas = [];
var BolillaActual;

const NUMERO_ORIGIN = 1;
const NUMERO_LIMIT = 100;

function loadBolillas() {
  for (let i = NUMERO_ORIGIN; i < NUMERO_LIMIT; i++ ) {
    BolillasDisponibles.push(i);
  }
}

function getBolilla() {
  let index = Math.floor(Math.random() * BolillasDisponibles.length);
  BolillaActual = BolillasDisponibles[index];
}

function actualizarBolillas() {
  BolillasSacadas.push(BolillaActual);
  BolillasDisponibles = BolillasDisponibles.filter((b) => b != BolillaActual);
}

function mostrarBolillas(bolillas, destino) {
  const makeBall = (value) => {
    return '<div>' + value + '</div>';
  }
  const target = document.getElementById(destino);
  target.innerHTML = '';
  bolillas.forEach(function(value) {
    target.innerHTML += makeBall(value);
  });
  
}

function sacarBolilla() {
  getBolilla();
  document.getElementById('bolilla-actual').innerHTML = BolillaActual;
  actualizarBolillas();
  mostrarBolillas(BolillasSacadas, 'bolillas-sacadas');
  mostrarBolillas(BolillasDisponibles, 'bolillas-disponibles');
  if (BolillasDisponibles.length === 0) {
    document.getElementById('btn-sacar').style.display = 'none';
    document.getElementById('bolilla-actual').style.display = 'none';
    document.getElementById('bolillas-title').innerHTML = '¡Eso es todo!';
  }
}

loadBolillas();
mostrarBolillas(BolillasDisponibles, 'bolillas-disponibles');


