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
