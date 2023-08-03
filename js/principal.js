/*************/
/* Variables */
/*************/
const listaPalabras = ["ABANDONADO", "ABANDONAR", "ABASTECER", "ABATIDO", "ABDOMEN", "ABERTURA", "ABOGADO", "ABORTAR", "ABRASIVO", "ABSORBER", "ABSTENER", "ABUELA", "ACANTILADO", "ACELERAR", "ACENTUAR", "ACEPTAR", "ACERTIJO", "ACIERTO", "ACLARAR", "ACOMODAR", "ACONSEJAR", "ACORDEON", "ACOSTAR", "ACTIVIDAD", "ACTUALIZAR", "ADELANTE", "ADICTO", "ADIESTRAR", "ADOPCION", "ADORABLE", "ADORNAR", "ADUANA", "ADULTO", "AFECTAR", "AFICIONADO", "AFRICANO", "AGILIDAD", "AGONIA", "AGOTADO", "AGRACIADO", "AGRADECIDO", "AGREGAR", "AGRICULTOR", "AGUJERO", "AHOGADO", "AHORRAR", "AIREADO", "AJUSTAR", "ALCANZAR", "ALEGRIA", "ALENTAR", "ALMACENAR", "ALMOHADA", "ALQUILAR", "ALTERAR", "ALUMNO", "AMABLE", "AMARILLO", "AMBIENTAL", "AMISTAD", "AMOROSO", "ANALIZAR", "ANCIANO", "ANDAMIO", "ANFITRION", "ANGUSTIA", "ANIMAL", "ANOTAR", "ANSIEDAD", "ANTENA", "ANTIGUO", "ANUNCIAR", "APARECER", "APARIENCIA", "APASIONADO", "APLAUDIR", "APLICAR", "APODERADO", "APRENDER", "APROBAR", "APROVECHAR", "APROXIMAR", "AQUEJAR", "ARANDANO", "ARBOLADO", "ARCHIVO", "ARGENTINO", "ARMONIA", "ARQUITECTO", "ARREGLAR", "ARRIESGAR", "ARROJAR", "ARTISTICO", "ASAMBLEA", "ASCENDER", "ASESORAR", "ASFIXIAR", "ASIENTO", "ASOCIAR", "ASOMBRAR", "ASPIRAR", "ASUSTAR", "ATAQUE", "ATENDER", "ATERRIZAR", "ATLETA", "ATMOSFERA", "ATREVERSE", "AUMENTAR", "AUTORIDAD", "AVENTURA", "AVERGONZAR", "AYUDAR", "AZOTAR", "BACTERIA", "BAILARIN", "BANDERAS", "BARAJA", "BARRIGA", "BASTANTE", "BATERIA", "BELLEZA", "BENDICION", "BENEFICIO", "BIBLIOTECA", "BIENESTAR", "BIOLOGIA", "BOHEMIO", "BOLIGRAFO", "BOMBERO", "BOTELLA", "BOXEADOR", "BUSQUEDA", "CABALLERO", "CABALLO", "CABELLO", "CACEROLA", "CACHORRO", "CALCULAR", "CALIDAD", "CALORIA", "CALZADO", "CAMARA", "CAMBIAR", "CAMINO", "CAMPEONATO", "CANTIDAD", "CAPACIDAD", "CAPITULO", "CAPTURAR", "CARACTER", "CARAMELIZADO", "CARAMELO", "CARICIA", "CARPETA", "CARRETA", "CASTIGAR", "CATASTROFE", "CAUSAR", "CELEBRAR", "CELULA", "CEPILLO", "CEREBRO", "CERRAR", "CHAMAN", "CHAMARRA", "CHAPUZON", "CHIFLADO", "CHISME", "CHOCAR", "CHUPAR", "CICATRIZ", "CIENTIFICO", "CILINDRO", "CINEASTA", "CINTURA", "CIRCUITO", "CIUDAD", "CLAMAR", "CLINICA", "COCINAR", "COHETE", "COLINA", "COLLAR", "COLONIA", "COMANDO", "COMEDIA", "COMENZAR", "COMIDA", "COMODIDAD", "COMODO", "COMPRAR", "CONCEBIR", "CONCEPTO", "CONCIERTO", "CONCLUSION", "CONCURSO", "CONDICION", "CONECTAR", "CONFESAR", "CONFIANZA", "CONFLICTO", "CONFORT", "CONGELAR", "CONOCER", "CONQUISTA", "CONSEGUIR", "CONSENTIR", "CONSOLAR", "CONSTRUIR", "CONSUMIR", "CONTACTO", "CONTENER", "CONTINUAR", "CONTROLAR", "CONVENCER", "CORAZON", "COSTUMBRE", "CREPUSCULO", "CRIANZA", "CRISTAL", "CRUCERO", "CRUCIAL", "CRUELDAD", "CUADERNO", "CUADRO", "CUARTO", "CUATRO", "CUCHARA", "CUCHILLO", "CUERDA", "CUESTA", "CULTIVAR", "CULTURA", "CUMBRE", "CUMPLIR", "CUPULA", "CURIOSO", "CUSPIDE", "DECENTE", "DECIDIDO", "DECIDIR", "DECLARAR", "DECODIFICAR", "DECOLORAR", "DECORAR", "DECORO", "DECRETO", "DEFENSA", "DEFINIR", "DEFRAUDAR", "DEGRADAR", "DELANTE", "DELANTERO", "DELEITE", "DELGADO", "DELICIOSO", "DEMANDAR", "DEMOCRACIA", "DEMORAR", "DENTRO", "DENUNCIAR", "DEPENDER", "DEPORTAR", "DEPORTISTA", "DERECHO", "DERIVAR", "DERRAMAR", "DERRETIR", "DESAFIO", "DESFILE", "DESGARRAR", "DESGASTE", "DESGLOSAR", "DESHACER", "DESIERTO", "DESLIZAR", "DESMAYAR", "DESNUDO", "DESPERTAR", "DESTACAR", "DESTINO", "DESVELAR", "DETALLE", "DETECTAR", "DEVOLVER", "DEVORAR", "DIBUJAR", "DIFICIL", "DIFUNDIR", "DIGITAL", "DILIGENTE", "DIMENSION", "DINERO", "DIRIGIR", "DISCUTIR", "DISFRUTAR", "DISOLVER", "DISPARAR", "DISPONER", "DISTANCIA", "DISTINTO", "DIVERSION", "DIVERSO", "DIVERTIDO", "DIVIDIR", "DOBLAR", "DOLOROSO", "DOMINAR", "DORADO", "DURADERO", "DURAZNO", "EFECTIVO", "EFECTO", "EGOISTA", "EJECUTAR", "EJEMPLO", "ELECCION", "ELEFANTE", "ELEGANTE", "ELIMINAR", "ELUDIR", "EMBARCAR", "EMBARGO", "EMOCION", "EMPACAR", "EMPAPAR", "EMPATAR", "EMPRENDER", "ENAMORADO", "ENAMORAR", "ENCENDER", "ENCOMENDAR", "ENCONTRAR", "ENCUESTA", "ENDULZAR", "ENDURECER", "ENEMIGO", "ENERGIA", "ENFOCAR", "ENIGMA", "ENJUAGAR", "ENLOQUECER", "ENORME", "ENREDAR", "ENSUCIAR", "ENTENDER", "ENTREGAR", "ENTRENAR", "ENVOLVER", "ENZARZAR", "ERRORES", "ERUPCION", "ESCALERA", "ESCAPAR", "ESCONDER", "ESCRIBIR", "ESCRITOR", "ESCRITORIO", "ESCUCHAR", "ESFERA", "ESGRIMA", "ESPEJO", "ESPERANZA", "ESQUINA", "ESTACION", "ESTADO", "ESTATURA", "ESTILO", "ESTIRAR", "ESTOMAGO", "ESTUDIAR", "ETIQUETA", "EUFORIA", "EUROPA", "EVALUACION", "EVENTO", "EXACTO", "EXAMEN", "EXCESO", "EXCUSA", "EXHALAR", "EXIGENTE", "EXISTIR", "EXOTICO", "EXPERIMENTO", "EXPLICAR", "EXPLORAR", "EXPONER", "EXTENDER", "EXTRAER", "EXTRAVIAR", "FABRICAR", "FABULA", "FACTOR", "FALLECER", "FAMILIA", "FANTASMA", "FANTASTICO", "FARAON", "FASCINANTE", "FAVORITO", "FELICIDAD", "FESTEJAR", "FESTEJO", "FILTRAR", "FINALIZAR", "FINANCIAR", "FLAMENCO", "FOMENTAR", "FORJAR", "FORMAR", "FORTALEZA", "FOTOGRAFIA", "FRAGANCIA", "FRASCO", "FRENTE", "FRUNCIR", "FUNCIONAR", "FUNDAR", "FURIOSO", "FUTBOL", "FUTURO", "GABARDINA", "GALAXIA", "GALERIA", "GANADOR", "GARANTIA", "GARGANTA", "GASTAR", "GENERAR", "GENEROSO", "GIGANTE", "GIRASOL", "GITANO", "GLORIOSO", "GOBERNAR", "GOBIERNO", "GOLPEAR", "GORGOTEO", "GOURMET", "GRADUAR", "GRANIZO", "GRISACEO", "GRUESO", "GUARDAR", "GUERRA", "GUITARRA", "GUSTAR", "HABILIDAD", "HABITAR", "HABITO", "HABLAR", "HALCON", "HALLAZGO", "HAMBRE", "HARINA", "HECHIZO", "HERMOSO", "HERRAMIENTA", "HIGIENE", "HISTORIA", "HOCICO", "HOLGADO", "HOMBRE", "HONESTO", "HORMIGA", "HORROR", "HOSPITAL", "HUELGA", "HUELLA", "HUERTO", "HUMANIDAD", "HUMEDAD", "HUMILDE", "HUNDIR", "HURACAN", "HURGAR", "IDENTIFICAR", "IDIOMA", "IGNORAR", "ILUSION", "IMAGEN", "IMAGINAR", "IMITAR", "IMPACTO", "IMPEDIR", "IMPERIO", "IMPLORAR", "IMPONER", "IMPORTAR", "IMPRESIONANTE", "IMPRIMIR", "IMPROVISAR", "IMPULSAR", "IMPULSO", "INCENDIO", "INCLUIR", "INDICAR", "INDIVIDUO", "INFANCIA", "INFLUIR", "INFORMAR", "INGENIO", "INGRESAR", "INICIAR", "INMENSIDAD", "INMIGRAR", "INMORTAL", "INQUIETO", "INSISTIR", "INSOMNIO", "INSTANTE", "INSTRUIR", "INTEGRAR", "INTEGRO", "INTENSO", "INTENTAR", "INTERCAMBIAR", "INTERES", "INTERNO", "INTIMAR", "INTUIR", "INUNDAR", "INVENTAR", "INVERTIR", "INVESTIGAR", "INVIERNO", "INVITAR", "IRONICO", "ITALIANO", "JARDIN", "JIRAFA", "JOYERIA", "JUEVES", "JUGADOR", "JUICIOSO", "JUNTOS", "JURADO", "JUSTICIA", "JUVENTUD", "KILOGRAMO", "KILOMETRO", "KILOVATIO", "LABERINTO", "LADRON", "LAGRIMA", "LAGUNA", "LAMENTAR", "LAMPARA", "LANZAR", "LAPICERO", "LAVABO", "LEALTAD", "LECTOR", "LEGADO", "LEGUMBRE", "LENGUA", "LEYENDA", "LIBERTAD", "LIBRERIA", "LICENCIA", "LIMITE", "LIMPIAR", "LINTERNA", "LIQUIDO", "LLEGADA", "LLUVIA", "LOGICA", "LONCHERA", "LONGITUD", "LUCHAR", "LUMINARIA", "LUMINOSIDAD", "LUMINOSO", "MADERA", "MALDAD", "MALVADO", "MAQUINA", "MARAVILLA", "MARAVILLOSO", "MARCAR", "MARCHA", "MARGARITA", "MARGEN", "MARIDO", "MARIPOSA", "MARTILLO", "MASAJE", "MASCAR", "MASCOTA", "MATERIA", "MATRIMONIO", "MAXIMO", "MECEDORA", "MEDICINA", "MEJILLA", "MEJORAR", "MELENA", "MELODIA", "MEMORIA", "MENTIR", "MERIENDA", "MERMELADA", "METEORITO", "MIGRAR", "MILAGRO", "MINIMO", "MIRADA", "MISTERIO", "MOCHILA", "MODULO", "MOLESTAR", "MOLINO", "MOMENTO", "MONEDA", "MORADA", "MOROSO", "MOSAICO", "MOTIVO", "MOVIMIENTO", "MUCHACHO", "MULTIPLE", "MURALLA", "MURMULLO", "MUSCULO", "MUSICA", "NACION", "NARANJA", "NATACION", "NATURALEZA", "NAVEGADOR", "NAVEGAR", "NECESITAR", "NERVIOSO", "NITIDO", "NOBLEZA", "NOCIVO", "NOMADA", "NOSTALGIA", "NOTICIA", "NOVATO", "NOVELA", "NUCLEO", "NUMERO", "NUTRIR", "OBEDECER", "OBISPO", "OBJETO", "OBLIGAR", "OBSERVAR", "OCASION", "OCASIONAL", "OCEANO", "OCULTAR", "OCUPAR", "OFENDER", "OFERTA", "OFICINA", "OMITIR", "ONEROSO", "OPINAR", "OPONER", "OPORTUNIDAD", "OPUESTO", "ORACION", "ORGULLO", "ORIENTE", "ORQUESTA", "OSCURO", "OVACION", "PAJARO", "PALABRA", "PALIDO", "PALOMA", "PALPITAR", "PANADERIA", "PANCARTA", "PANICO", "PANTALLA", "PANTALON", "PAQUETE", "PARACAIDAS", "PARAGUAS", "PAREJA", "PARIENTE", "PARQUE", "PARTIR", "PASAPORTE", "PASILLO", "PASION", "PASTOR", "PATENTE", "PATINAR", "PATRIA", "PATRON", "PEATON", "PECADO", "PEGAJOSO", "PEINADO", "PELICULA", "PELIGRO", "PELOTA", "PENOSO", "PENSAR", "PERDER", "PERFORAR", "PERICO", "PERMISO", "PERSONAL", "PERTENECER", "PESADO", "PETALO", "PETROLEO", "PIERNA", "PIJAMA", "PIMIENTA", "PINTURA", "PIRATA", "PIZARRA", "PLANTA", "PLURAL", "PODRIDO", "POESIA", "POLITICA", "POLIZA", "POMADA", "POMELO", "PORCION", "PORDIOSERO", "PORQUE", "PORTON", "POSIBLE", "POSTAL", "POSTRE", "POTENCIA", "PRACTICA", "PRACTICO", "PRADERA", "PREGUNTA", "PRESENTAR", "PRESION", "PREVENIR", "PRINCESA", "PRISION", "PRIVADO", "PROBLEMA", "PROCESO", "PRODUCTO", "PROFESOR", "PROGRAMA", "PROGRESO", "PROHIBIR", "PROMESA", "PRONUNCIAR", "PROPIO", "PROTEGER", "PROYECTO", "PRUEBA", "PUBLICAR", "PUEBLO", "PUERRO", "PUERTA", "PUESTO", "PUPILA", "PUREZA", "PURGAR", "PURIFICAR", "QUEBRAR", "QUEMAR", "QUERIDO", "QUIETO", "QUIMICA", "QUINCE", "QUINTO", "QUIROFANO", "QUISIERA", "QUISQUILLOSO", "RAPIDO", "RASTRO", "RECETA", "RECOGER", "RECUERDO", "REDONDO", "REEMPLAZAR", "REFLEJAR", "REFUGIO", "REGALAR", "REGRESO", "RELEVAR", "REMEDIO", "REMOLQUE", "RENOVAR", "REPARAR", "REPETIR", "REPOSAR", "REPUGNANTE", "RESCATE", "RESERVAR", "RESFRIADO", "RESIDIR", "RESPETO", "RESPLANDECIENTE", "RESPLANDOR", "RESTAURANTE", "RESULTAR", "RETIRAR", "RIESGO", "RIQUEZA", "RODEAR", "ROSQUILLA", "ROSTRO", "RUBORIZAR", "SABADO", "SACERDOTE", "SAGRADO", "SALADO", "SALIDA", "SALIVA", "SALMON", "SALTAR", "SALUDAR", "SALUDO", "SALVAJE", "SANDWICH", "SANGRE", "SANIDAD", "SATISFACCION", "SECRETARIO", "SECTOR", "SECUELA", "SEDUCIR", "SEDUCTOR", "SENSIBLE", "SENTIDO", "SEPARAR", "SEPTIEMBRE", "SERAFIN", "SERPIENTE", "SERRAR", "SIMBOLO", "SINCERIDAD", "SINFONIA", "SINTOMA", "SINTONIZAR", "SISTEMA", "SOBERANO", "SOBERBIO", "SOBORNO", "SOBRADO", "SOBREMESA", "SOBREVENIR", "SOBREVIVIR", "SOBRINA", "SOCIEDAD", "SOCORRO", "SODOMIA", "SOLAMENTE", "SOLDADO", "SOLEDAD", "SOLICITAR", "SOLIDARIO", "SOLIDO", "SOLITARIO", "SOLUCION", "SOMBRA", "SOMBRERO", "SOMETER", "SONAMBULO", "SONDAR", "SONIDO", "SONRIENTE", "SONRISA", "SOPLAR", "SOPRANO", "SORDERA", "SORPRENDENTE", "SORPRENDIDO", "SORPRESA", "SORTEAR", "SOSPECHA", "SOSTENIBLE", "SOTANO", "SUAVIZAR", "SUBIDA", "SUBLIME", "SUBRAYAR", "SUCEDER", "SUFICIENTE", "SUFRIMIENTO", "SUJETAR", "SUMERGIR", "SUNTUOSO", "SUPERAR", "SUPERVIVENCIA", "SUPONER", "SUPUESTO", "SURCAR", "SURTIDO", "SUSPENSO", "SUSPIRAR", "SUSTANCIA", "SUSTENTO", "SUSTITUIR", "SUTILIDAD", "TABACO", "TACITURNO", "TALENTO", "TALLER", "TANQUE", "TARDANZA", "TARJETA", "TATUAJE", "TEATRO", "TECNOLOGIA", "TEDIOSO", "TEMBLOR", "TEMPORAL", "TENTACION", "TERNERO", "TERNURA", "TERRIBLE", "TERRITORIO", "TESTIGO", "TIERNO", "TIJERAS", "TIMIDO", "TIPICO", "TIRANO", "TOLERAR", "TOMATE", "TORCER", "TORTUGA", "TOTALIDAD", "TOXICO", "TRABAJO", "TRAGEDIA", "TRAMITE", "TRAMPA", "TRANCE", "TRANQUILO", "TRANSPORTE", "TRASCENDER", "TRASLADAR", "TRATADO", "TRAUMA", "TRAVESIA", "TREINTA", "TRIANGULO", "TRISTEZA", "TRIVIAL", "TRONCO", "TROPIEZO", "TRUENO", "TUERTO", "TURISMO", "ULTIMO", "UNICIDAD", "UNIDAD", "VACACION", "VAGABUNDO", "VAGANCIA", "VALIENTE", "VALORAR", "VASTAGO", "VEGETAL", "VELERO", "VENCER", "VENDEDOR", "VENTAJA", "VERANO", "VERDAD", "VERIFICAR", "VERTIGO", "VESTIDO", "VETERANO", "VICTIMA", "VIDRIO", "VIENTO", "VIGILAR", "VINCULO", "VIOLIN", "VIRGEN", "VIRTUD", "VISUAL", "VITALIDAD", "VIVIENDA", "VOLCAN", "VOLUMEN", "VOLVER", "VOMITO", "VULNERABLE", "XILOFONO", "YACIMIENTO", "ZAFIRO", "ZAPATO", "ZODIACO", "ZOOLOGICO", "ZUMBIDO", "ZURDOS"];
let palabraElegida; //Palabra a adivinar
let palabraAdivinada; //Palabra que se va a ir formando
let largoPalabra; //Largo de la palabra
let vidas; //Vidas en juego
let aciertos; //Contador de letras acertadas

let cantidadJugadores; // Cantidad de jugadores que van a jugar
class jugador {
  constructor (name) {
    this.nombre = name;
    this.puntaje = 0;
  }  
} // Clase para crear cada jugador
const jugadores =[]; // Array con los jugadores 


const rules = document.querySelector("#rules");
const numberOfPlayers = document.querySelector("#numberofplayers");
numberOfPlayers.addEventListener("submit", empezar);
const players = document.querySelector("#players");
document.addEventListener('DOMContentLoaded', () => players.select());
const names = document.querySelector("#names");
names.addEventListener("submit", saveNames);


function empezar (ev){
  ev.preventDefault();
  const start = document.querySelector("#start");
  players.setAttribute("disabled", "");
  start.setAttribute("disabled", "");
  cantidadJugadores = Number(players.value);
  // Crea cada jugador dentro del array de jugadores
  for (let i=1; i<=cantidadJugadores; i+=1) {
    names.innerHTML += `
    <label for="player${i}">Nombre Jugador ${i}</label>
    <input type="text" name="player${i}" id="player${i}" required>
    `;
  }
  const guardarNombres = document.createElement("button");
  guardarNombres.innerHTML = "Guardar nombres";
  names.appendChild(guardarNombres);
  document.querySelector("#player1").select();
}

function saveNames(ev){
  ev.preventDefault();
  for (let i=1; i<=cantidadJugadores; i+=1) {
    const player = document.querySelector("#player" + i);
    jugadores[i-1] = new jugador(player.value.toUpperCase());
  }
  console.log(jugadores)
  juego()
}

function juego() {
  do {
  // Juegan una palabra cada jugador
  for (let i=0; i<cantidadJugadores; i+=1) {
    //Inicializo variables y borro consola en cada ronda
    palabraAdivinada = [];
    largoPalabra = 0;
    vidas = 6;
    aciertos = 0;
    letraIngresada = "";
    letrasPedidas = [];
    console.clear();


    if (cantidadJugadores == 1) {
      elegirPalabra(true);
    } else {
      elegirPalabra(confirm("Turno de " + jugadores[i].nombre + "\n¿Quieres usar palabras guardadas o que un contrincante ingrese una nueva?\nACEPTAR: Usar palabra aleatoria.\nCANCELAR: Ingresar palabra para jugar."));
    }
    
    
    //Se piden letras hasta que adivine la palabra o se quede sin vidas
    while(true){
      mostrarTablero(jugadores[i].nombre);
      pedirLetra(jugadores[i].nombre);
      comprobarLetra();
      if (vidas == 0) {
        mostrarTablero(jugadores[i].nombre);
        alert('Has fallado ' + jugadores[i].nombre + '. La palabra era "' + palabraElegida.join("") + '".\nNo has sumado puntos.' );
        break;
      }
      if (aciertos == largoPalabra) {
        mostrarTablero(jugadores[i].nombre);
        alert('Felicitaciones ' + jugadores[i].nombre + ', has acertado!!! La palabra es "' + palabraElegida.join("") + '".\nSumaste ' + vidas + ' punto/s.');
        jugadores[i].puntaje += vidas;
        break;
      }
    }
  }
  //Pregunto si quiere jugar otra ronda
  seguirJugando = confirm("¿Quiere/n jugar otra ronda?");
}while (seguirJugando);

console.clear();

// Muestro los puntajes de cada jugador ordenados de mayor a menor
console.log("TABLA DE POSICIONES");
jugadores.sort((a, b) => b.puntaje - a.puntaje);
console.table(jugadores);
}











const letrasAbecedario = document.querySelectorAll(".letter")
letrasAbecedario.forEach(letra => {letra.addEventListener("click",click)})

function click(){
  console.log(this.innerHTML)
  this.classList.add("presion")
}

document.addEventListener("keyup", teclado)

function teclado (tecla){
  letrasAbecedario.forEach(letra=>{
    if (letra.innerHTML ==  tecla.key.toUpperCase()){  
      letra.classList.add("presion")
    }})

}



