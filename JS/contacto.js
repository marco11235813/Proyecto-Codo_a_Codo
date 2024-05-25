const input_pais_otro = document.querySelector(".input_pais_otro");

const pais = document
	.querySelector("#pais")
	.addEventListener("change", function () {
		document.querySelector(".input_pais_otro").style.display =
			this.value == "Otro" ? "inline-block" : "none";
	});

let contacto = document.getElementsByName("contacto")[0];
let boton = document.getElementById("b1");

let validarNombre = function (e) {
	if (contacto.nombre.value == 0) {
		alert("Complete el campo nombre");
		e.preventDefault();
	}
};
let validarApellido = function (e) {
	if (contacto.apellido.value == 0) {
		alert("Complete el campo apellido");
		e.preventDefault();
	}
};

let validarRadio = function (e) {
	if (
		contacto.sexo[0].checked == true ||
		contacto.sexo[1].checked == true ||
		contacto.sexo[2].checked == true
	) {
	} else {
		alert("Seleccione una opción de género");
		e.preventDefault();
	}
};
let validarPais = function (e) {
	if (contacto.pais.value == 0) {
		alert("Complete su país de residencia");
		e.preventDefault();
	}
};
let validarEmail = function (e) {
	if (contacto.email.value == 0) {
		alert("Complete el campo email");
		e.preventDefault();
	}
};
let validar = function (e) {
	validarNombre(e),
		validarApellido(e),
		validarRadio(e),
		validarPais(e),
		validarEmail(e);
};
contacto.addEventListener("submit", validar);
