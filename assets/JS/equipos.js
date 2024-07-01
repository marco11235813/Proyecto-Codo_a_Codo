/* Funciones Modal */

function mostrarModal(hist) {
	hist.style.display = "block";
}

function cerrarModal(hist) {
	hist.style.display = "none";
}

// /* Boton Regresar Escudo F1*/

// const retorno = document.querySelector("#retorno");
// const volver = document.querySelector("#volver");

// retorno.addEventListener("click", () => {
// 	document.querySelector("#volver img").style.display = "block";
// });

// volver.addEventListener("click", () => {
// 	document.querySelector("#volver img").style.display = "none";
// });

/* Boton Regresar Escudo F1*/
window.onscroll = function () {
	const scroll = document.documentElement.scrollTop || document.body.scrollTop;

	document.querySelector("#volver img").addEventListener("click", volver);

	function volver() {
		if (scroll > 0) {
			window.scrollTo(0, 0);
		}
	}

	const mostrar_Boton =
		scroll > 200
			? (document.querySelector("#volver img").style.display = "block")
			: (document.querySelector("#volver img").style.display = "none");
};

/* Datos Modales del Html Pilotos*/

const max = document.querySelector("#Max");
const Max_Hist = document.querySelector("#Max_Hist");
const btn_close_Max = document.querySelector("#btn_close_Max");
const Checo = document.querySelector("#Checo");
const Checo_Hist = document.querySelector("#Checo_Hist");
const btn_close_Checo = document.querySelector("#btn_close_Checo");
const Russell = document.querySelector("#Russell");
const Russell_Hist = document.querySelector("#Russell_Hist");
const btn_close_Russell = document.querySelector("#btn_close_Russell");
const Hamilton = document.querySelector("#Hamilton");
const Hamilton_Hist = document.querySelector("#Hamilton_Hist");
const btn_close_Hamilton = document.querySelector("#btn_close_Hamilton");
const Norris = document.querySelector("#Norris");
const Norris_Hist = document.querySelector("#Norris_Hist");
const btn_close_Norris = document.querySelector("#btn_close_Norris");
const Piastri = document.querySelector("#Piastri");
const Piastri_Hist = document.querySelector("#Piastri_Hist");
const btn_close_Piastri = document.querySelector("#btn_close_Piastri");
const Leclerc = document.querySelector("#Leclerc");
const Leclerc_Hist = document.querySelector("#Leclerc_Hist");
const btn_close_Leclerc = document.querySelector("#btn_close_Leclerc");
const Sainz = document.querySelector("#Sainz");
const Sainz_Hist = document.querySelector("#Sainz_Hist");
const btn_close_Sainz = document.querySelector("#btn_close_Sainz");
const Ricciardo = document.querySelector("#Ricciardo");
const Ricciardo_Hist = document.querySelector("#Ricciardo_Hist");
const btn_close_Ricciardo = document.querySelector("#btn_close_Ricciardo");
const Tsunoda = document.querySelector("#Tsunoda");
const Tsunoda_Hist = document.querySelector("#Tsunoda_Hist");
const btn_close_Tsunoda = document.querySelector("#btn_close_Tsunoda");
const Alonso = document.querySelector("#Alonso");
const Alonso_Hist = document.querySelector("#Alonso_Hist");
const btn_close_Alonso = document.querySelector("#btn_close_Alonso");
const Stroll = document.querySelector("#Stroll");
const Stroll_Hist = document.querySelector("#Stroll_Hist");
const btn_close_Stroll = document.querySelector("#btn_close_Stroll");
const Magnussen = document.querySelector("#Magnussen");
const Magnussen_Hist = document.querySelector("#Magnussen_Hist");
const btn_close_Magnussen = document.querySelector("#btn_close_Magnussen");
const Hulkenberg = document.querySelector("#Hulkenberg");
const Hulkenberg_Hist = document.querySelector("#Hulkenberg_Hist");
const btn_close_Hulkenberg = document.querySelector("#btn_close_Hulkenberg");
const Albon = document.querySelector("#Albon");
const Albon_Hist = document.querySelector("#Albon_Hist");
const btn_close_Albon = document.querySelector("#btn_close_Albon");
const Sargeant = document.querySelector("#Sargeant");
const Sargeant_Hist = document.querySelector("#Sargeant_Hist");
const btn_close_Sargeant = document.querySelector("#btn_close_Sargeant");
const Ocon = document.querySelector("#Ocon");
const Ocon_Hist = document.querySelector("#Ocon_Hist");
const btn_close_Ocon = document.querySelector("#btn_close_Ocon");
const Gasly = document.querySelector("#Gasly");
const Gasly_Hist = document.querySelector("#Gasly_Hist");
const btn_close_Gasly = document.querySelector("#btn_close_Gasly");
const Bottas = document.querySelector("#Bottas");
const Bottas_Hist = document.querySelector("#Bottas_Hist");
const btn_close_Bottas = document.querySelector("#btn_close_Bottas");
const Zhou = document.querySelector("#Zhou");
const Zhou_Hist = document.querySelector("#Zhou_Hist");
const btn_close_Zhou = document.querySelector("#btn_close_Zhou");

/* Eventos Modales Pilotos*/

max.addEventListener("click", () => mostrarModal(Max_Hist));
btn_close_Max.addEventListener("click", () => cerrarModal(Max_Hist));
Checo.addEventListener("click", () => mostrarModal(Checo_Hist));
btn_close_Checo.addEventListener("click", () => cerrarModal(Checo_Hist));
Russell.addEventListener("click", () => mostrarModal(Russell_Hist));
btn_close_Russell.addEventListener("click", () => cerrarModal(Russell_Hist));
Hamilton.addEventListener("click", () => mostrarModal(Hamilton_Hist));
btn_close_Hamilton.addEventListener("click", () => cerrarModal(Hamilton_Hist));
Norris.addEventListener("click", () => mostrarModal(Norris_Hist));
btn_close_Norris.addEventListener("click", () => cerrarModal(Norris_Hist));
Piastri.addEventListener("click", () => mostrarModal(Piastri_Hist));
btn_close_Piastri.addEventListener("click", () => cerrarModal(Piastri_Hist));
Leclerc.addEventListener("click", () => mostrarModal(Leclerc_Hist));
btn_close_Leclerc.addEventListener("click", () => cerrarModal(Leclerc_Hist));
Sainz.addEventListener("click", () => mostrarModal(Sainz_Hist));
btn_close_Sainz.addEventListener("click", () => cerrarModal(Sainz_Hist));
Ricciardo.addEventListener("click", () => mostrarModal(Ricciardo_Hist));
btn_close_Ricciardo.addEventListener("click", () =>
	cerrarModal(Ricciardo_Hist)
);
Tsunoda.addEventListener("click", () => mostrarModal(Tsunoda_Hist));
btn_close_Tsunoda.addEventListener("click", () => cerrarModal(Tsunoda_Hist));
Alonso.addEventListener("click", () => mostrarModal(Alonso_Hist));
btn_close_Alonso.addEventListener("click", () => cerrarModal(Alonso_Hist));
Stroll.addEventListener("click", () => mostrarModal(Stroll_Hist));
btn_close_Stroll.addEventListener("click", () => cerrarModal(Stroll_Hist));
Magnussen.addEventListener("click", () => mostrarModal(Magnussen_Hist));
btn_close_Magnussen.addEventListener("click", () =>
	cerrarModal(Magnussen_Hist)
);
Hulkenberg.addEventListener("click", () => mostrarModal(Hulkenberg_Hist));
btn_close_Hulkenberg.addEventListener("click", () =>
	cerrarModal(Hulkenberg_Hist)
);
Albon.addEventListener("click", () => mostrarModal(Albon_Hist));
btn_close_Albon.addEventListener("click", () => cerrarModal(Albon_Hist));
Sargeant.addEventListener("click", () => mostrarModal(Sargeant_Hist));
btn_close_Sargeant.addEventListener("click", () => cerrarModal(Sargeant_Hist));
Ocon.addEventListener("click", () => mostrarModal(Ocon_Hist));
btn_close_Ocon.addEventListener("click", () => cerrarModal(Ocon_Hist));
Gasly.addEventListener("click", () => mostrarModal(Gasly_Hist));
btn_close_Gasly.addEventListener("click", () => cerrarModal(Gasly_Hist));
Bottas.addEventListener("click", () => mostrarModal(Bottas_Hist));
btn_close_Bottas.addEventListener("click", () => cerrarModal(Bottas_Hist));
Zhou.addEventListener("click", () => mostrarModal(Zhou_Hist));
btn_close_Zhou.addEventListener("click", () => cerrarModal(Zhou_Hist));

/* Datos Modales del Html Equipos*/

/* Alpine */
const Alpine = document.querySelector("#alpine_car");
const Alpine_Hist = document.querySelector("#Alpine_Hist");
const btn_close_Alpine = document.querySelector("#btn_close_Alpine");
/* Aston */
const Aston = document.querySelector("#astonmartin_car");
const Aston_Hist = document.querySelector("#Aston_Hist");
const btn_close_Aston = document.querySelector("#btn_close_Aston");
/* RedBull */
const RedBull = document.querySelector("#redbull_car");
const RedBull_Hist = document.querySelector("#RedBull_Hist");
const btn_close_RedBull = document.querySelector("#btn_close_RedBull");
/* Haas */
const Hass = document.querySelector("#haas_car");
const Haas_Hist = document.querySelector("#Haas_Hist");
const btn_close_Haas = document.querySelector("#btn_close_Haas");
/* RB */
const RB = document.querySelector("#racingbull_car");
const RB_Hist = document.querySelector("#RB_Hist");
const btn_close_RB = document.querySelector("#btn_close_RB");
/* Mercedes */
const Mercedes = document.querySelector("#mercedes_car");
const Mercedes_Hist = document.querySelector("#Mercedes_Hist");
const btn_close_Mercedes = document.querySelector("#btn_close_Mercedes");
/* Williams */
const Williams = document.querySelector("#williams_car");
const Williams_Hist = document.querySelector("#Williams_Hist");
const btn_close_Williams = document.querySelector("#btn_close_Williams");
/* Stake */
const Stake = document.querySelector("#stake_car");
const Stake_Hist = document.querySelector("#Stake_Hist");
const btn_close_Stake = document.querySelector("#btn_close_Stake");
/* Mclaren */
const Mclaren = document.querySelector("#mclaren_car");
const Mclaren_Hist = document.querySelector("#Mclaren_Hist");
const btn_close_Mclaren = document.querySelector("#btn_close_Mclaren");
/* Ferrari */
const Ferrari = document.querySelector("#ferrari_car");
const Ferrari_Hist = document.querySelector("#Ferrari_Hist");
const btn_close_Ferrari = document.querySelector("#btn_close_Ferrari");

/* Eventos Modales Equipos */

Ferrari.addEventListener("click", () => mostrarModal(Ferrari_Hist));
btn_close_Ferrari.addEventListener("click", () => cerrarModal(Ferrari_Hist));
Alpine.addEventListener("click", () => mostrarModal(Alpine_Hist));
btn_close_Alpine.addEventListener("click", () => cerrarModal(Alpine_Hist));
Aston.addEventListener("click", () => mostrarModal(Aston_Hist));
btn_close_Aston.addEventListener("click", () => cerrarModal(Aston_Hist));
RB.addEventListener("click", () => mostrarModal(RB_Hist));
btn_close_RB.addEventListener("click", () => cerrarModal(RB_Hist));
Williams.addEventListener("click", () => mostrarModal(Williams_Hist));
btn_close_Williams.addEventListener("click", () => cerrarModal(Williams_Hist));
Stake.addEventListener("click", () => mostrarModal(Stake_Hist));
btn_close_Stake.addEventListener("click", () => cerrarModal(Stake_Hist));
Mercedes.addEventListener("click", () => mostrarModal(Mercedes_Hist));
btn_close_Mercedes.addEventListener("click", () => cerrarModal(Mercedes_Hist));
Mclaren.addEventListener("click", () => mostrarModal(Mclaren_Hist));
btn_close_Mclaren.addEventListener("click", () => cerrarModal(Mclaren_Hist));
RedBull.addEventListener("click", () => mostrarModal(RedBull_Hist));
btn_close_RedBull.addEventListener("click", () => cerrarModal(RedBull_Hist));
Hass.addEventListener("click", () => mostrarModal(Haas_Hist));
btn_close_Haas.addEventListener("click", () => cerrarModal(Haas_Hist));
