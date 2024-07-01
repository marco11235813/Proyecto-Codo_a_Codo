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
			: (document.querySelector("#volver img").style.display = "none");
};
/* Modales */
const modal_EmiratosArabes = document.querySelector("#modal_EmiratosArabes");
const modal_Qatar = document.querySelector("#modal_Qatar");
const modal_LasVegas = document.querySelector("#modal_LasVegas");
const modal_SaoPaulo = document.querySelector("#modal_Brasil");
const modal_Mexico = document.querySelector("#modal_Mexico");
const modal_Austin = document.querySelector("#modal_Austin");
const modal_Singapur = document.querySelector("#modal_Singapur");
const modal_Azerbaiyan = document.querySelector("#modal_Azerbaiyan");
const modal_Italia = document.querySelector("#modal_Italia");
const modal_PaisesBajos = document.querySelector("#modal_PaisesBajos");
const modal_Belgica = document.querySelector("#modal_Belgica");
const modal_Hungria = document.querySelector("#modal_Hungria");
const modal_GranBretana = document.querySelector("#modal_GranBretana");
const modal_Austria = document.querySelector("#modal_Austria");
const modal_Canada = document.querySelector("#modal_Canada");
const modal_Monaco = document.querySelector("#modal_Monaco");
const modal_EmiliaRomana = document.querySelector("#modal_EmiliaRomana");
const modal_Miami = document.querySelector("#modal_Miami");
const modal_China = document.querySelector("#modal_China");
const modal_Japon = document.querySelector("#modal_Japon");
const modal_Australia = document.querySelector("#modal_Australia");
const modal_ArabiaSaudita = document.querySelector("#modal_ArabiaSaudita");
const modal_Bahrein = document.querySelector("#modal_Bahrein");

/* Btn Open Modales */

const btn_open_EmiratosArabes = document.querySelector(
	"#btn_open_EmiratosArabes"
);

const btn_open_Qatar = document.querySelector("#btn_open_Qatar");
const btn_open_LasVegas = document.querySelector("#btn_open_LasVegas");
const btn_open_SaoPaulo = document.querySelector("#btn_open_SaoPaulo");
const btn_open_Mexico = document.querySelector("#btn_open_Mexico");
const btn_open_Austin = document.querySelector("#btn_open_Austin");
const btn_open_MarinaBay = document.querySelector("#btn_open_MarinaBay");
const btn_open_Baku = document.querySelector("#btn_open_Baku");
const btn_open_Monza = document.querySelector("#btn_open_Monza");
const btn_open_Spa_Francorschamps = document.querySelector(
	"#btn_open_Spa_Francorschamps"
);
const btn_open_Zandvoort = document.querySelector("#btn_open_Zandvoort");
const btn_open_Hungaroring = document.querySelector("#btn_open_Hungaroring");
const btn_open_Silverstone = document.querySelector("#btn_open_Silverstone");
const btn_open_Monaco = document.querySelector("#btn_open_Monaco");
const btn_open_Barcelona = document.querySelector("#btn_open_Barcelona");
const btn_open_Canada = document.querySelector("#btn_open_Canada");
const btn_open_Miami = document.querySelector("#btn_open_Miami");
const btn_open_China = document.querySelector("#btn_open_China");
const btn_open_Japon = document.querySelector("#btn_open_Japon");
const btn_open_Australia = document.querySelector("#btn_open_Australia");
const btn_open_ArabiaSaudita = document.querySelector(
	"#btn_open_ArabiaSaudita"
);
const btn_open_Bahrein = document.querySelector("#btn_open_Bahrein");
const btn_open_EmiliaRomana = document.querySelector("#btn_open_EmiliaRomana");
const btn_open_RedBullRing = document.querySelector("#btn_open_RedBullRing");

/* Btn Cerrar Modales */

const btn_close_EmiratosArabes = document.querySelector("#btn_close_Emiratos");
const btn_close_Qatar = document.querySelector("#btn_close_Qatar");
const btn_close_LasVegas = document.querySelector("#btn_close_LasVegas");
const btn_close_SaoPaulo = document.querySelector("#btn_close_SaoPaulo");
const btn_close_Mexico = document.querySelector("#btn_close_Mexico");
const btn_close_Austin = document.querySelector("#btn_close_Austin");
const btn_close_Singapur = document.querySelector("#btn_close_Singapur");
const btn_close_Baku = document.querySelector("#btn_close_Baku");
const btn_close_Monza = document.querySelector("#btn_close_Monza");
const btn_close_Zandvoort = document.querySelector("#btn_close_Zandvoort");
const btn_close_Spa_Francorchamps = document.querySelector(
	"#btn_close_Spa-Francorchamps"
);
const btn_close_Hungaroring = document.querySelector("#btn_close_Hungaroring");
const btn_close_Silverstone = document.querySelector("#btn_close_Silverstone");
const btn_close_RedBullRing = document.querySelector("#btn_close_RedBullRing");
const btn_close_Gilles_Villeneuve = document.querySelector(
	"#btn_close_Gilles_Villeneuve"
);
const btn_close_Monaco = document.querySelector("#btn_close_Monaco");
const btn_close_EmiliaRomana = document.querySelector(
	"#btn_close_EmiliaRomana"
);
const btn_close_Miami = document.querySelector("#btn_close_Miami");
const btn_close_China = document.querySelector("#btn_close_China");
const btn_close_Japon = document.querySelector("#btn_close_Japon");
const btn_close_Australia = document.querySelector("#btn_close_Australia");
const btn_close_ArabiaSaudita = document.querySelector(
	"#btn_close_ArabiaSaudita"
);
const btn_close_Bahrein = document.querySelector("#btn_close_Bahrein");

/* Funcion de Apertura */

btn_open_EmiratosArabes.addEventListener("click", () => {
	modal_EmiratosArabes.style.display = "Block";
});

btn_open_Qatar.addEventListener("click", () => {
	modal_Qatar.style.display = "Block";
});

btn_open_LasVegas.addEventListener("click", () => {
	modal_LasVegas.style.display = "Block";
});

btn_open_SaoPaulo.addEventListener("click", () => {
	modal_SaoPaulo.style.display = "Block";
});

btn_open_Mexico.addEventListener("click", () => {
	modal_Mexico.style.display = "Block";
});

btn_open_Austin.addEventListener("click", () => {
	modal_Austin.style.display = "Block";
});

btn_open_RedBullRing.addEventListener("click", () => {
	modal_Austria.style.display = "Block";
});

btn_open_MarinaBay.addEventListener("click", () => {
	modal_Singapur.style.display = "Block";
});

btn_open_Baku.addEventListener("click", () => {
	modal_Azerbaiyan.style.display = "Block";
});

btn_open_Monza.addEventListener("click", () => {
	modal_Italia.style.display = "Block";
});

btn_open_Spa_Francorschamps.addEventListener("click", () => {
	modal_Belgica.style.display = "Block";
});

btn_open_Zandvoort.addEventListener("click", () => {
	modal_PaisesBajos.style.display = "Block";
});

btn_open_Hungaroring.addEventListener("click", () => {
	modal_Hungria.style.display = "Block";
});

btn_open_Silverstone.addEventListener("click", () => {
	modal_GranBretana.style.display = "Block";
});

btn_open_Monaco.addEventListener("click", () => {
	modal_Monaco.style.display = "Block";
});

btn_open_Barcelona.addEventListener("click", () => {
	modal_Espana.style.display = "Block";
});

btn_open_Canada.addEventListener("click", () => {
	modal_Canada.style.display = "Block";
});

btn_open_EmiliaRomana.addEventListener("click", () => {
	modal_EmiliaRomana.style.display = "Block";
});

btn_open_Miami.addEventListener("click", () => {
	modal_Miami.style.display = "Block";
});

btn_open_China.addEventListener("click", () => {
	modal_China.style.display = "Block";
});

btn_open_Japon.addEventListener("click", () => {
	modal_Japon.style.display = "Block";
});

btn_open_Australia.addEventListener("click", () => {
	modal_Australia.style.display = "Block";
});

btn_open_ArabiaSaudita.addEventListener("click", () => {
	modal_ArabiaSaudita.style.display = "Block";
});

btn_open_Bahrein.addEventListener("click", () => {
	modal_Bahrein.style.display = "Block";
});

/* Funcion de Cierre */

btn_close_EmiratosArabes.addEventListener("click", () => {
	modal_EmiratosArabes.style.display = "none";
});

btn_close_Qatar.addEventListener("click", () => {
	modal_Qatar.style.display = "none";
});

btn_close_LasVegas.addEventListener("click", () => {
	modal_LasVegas.style.display = "none";
});

btn_close_SaoPaulo.addEventListener("click", () => {
	modal_SaoPaulo.style.display = "none";
});

btn_close_Mexico.addEventListener("click", () => {
	modal_Mexico.style.display = "none";
});

btn_close_Austin.addEventListener("click", () => {
	modal_Austin.style.display = "none";
});

btn_close_Singapur.addEventListener("click", () => {
	modal_Singapur.style.display = "none";
});

btn_close_Baku.addEventListener("click", () => {
	modal_Azerbaiyan.style.display = "none";
});

btn_close_Monza.addEventListener("click", () => {
	modal_Italia.style.display = "none";
});

btn_close_Zandvoort.addEventListener("click", () => {
	modal_PaisesBajos.style.display = "none";
});

btn_close_Spa_Francorchamps.addEventListener("click", () => {
	modal_Belgica.style.display = "none";
});

btn_close_Hungaroring.addEventListener("click", () => {
	modal_Hungria.style.display = "none";
});

btn_close_Silverstone.addEventListener("click", () => {
	modal_GranBretana.style.display = "none";
});

btn_close_RedBullRing.addEventListener("click", () => {
	modal_Austria.style.display = "none";
});

btn_close_Barcelona.addEventListener("click", () => {
	modal_Espana.style.display = "none";
});

btn_close_Gilles_Villeneuve.addEventListener("click", () => {
	modal_Canada.style.display = "none";
});

btn_close_Monaco.addEventListener("click", () => {
	modal_Monaco.style.display = "none";
});

btn_close_EmiliaRomana.addEventListener("click", () => {
	modal_EmiliaRomana.style.display = "none";
});

btn_close_Miami.addEventListener("click", () => {
	modal_Miami.style.display = "none";
});

btn_close_China.addEventListener("click", () => {
	modal_China.style.display = "none";
});

btn_close_Japon.addEventListener("click", () => {
	modal_Japon.style.display = "none";
});

btn_close_Australia.addEventListener("click", () => {
	modal_Australia.style.display = "none";
});

btn_close_ArabiaSaudita.addEventListener("click", () => {
	modal_ArabiaSaudita.style.display = "none";
});

btn_close_Bahrein.addEventListener("click", () => {
	modal_Bahrein.style.display = "none";
});

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
			: (document.querySelector("#volver img").style.display = "none");
};
