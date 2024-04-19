const input_pais_otro = document.querySelector(".input_pais_otro");

const pais = document
	.querySelector("#pais")
	.addEventListener("change", function () {
		document.querySelector(".input_pais_otro").style.display =
			this.value == "Otro" ? "inline-block" : "none";
	});