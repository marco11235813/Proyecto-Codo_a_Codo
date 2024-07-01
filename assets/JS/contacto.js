const input_pais_otro = document.querySelector(".input_pais_otro");

const nameField = document.querySelector("#nombre");
const lastNameField = document.querySelector("#apellido");
const sex = document.getElementById("input_sexo");
const sexoField = document.querySelectorAll("#input_sexo input[type='radio']");
const dataField = document.querySelector("#fecha_nacimiento");
const country_Field = document.querySelector("#pais");
const emailField = document.querySelector("#email");

/** Intrumentos a Utilizar */

const pattern = {
	nombre: /^([a-zA-Z]+).([a-zA-Z]+)?.([a-zA-Z]+)?$/,
	apellido: /^([a-zA-Z]+).([a-zA-Z]+)?.([a-zA-Z]+)?$/,
	pais: /^([a-zA-Z]+).([a-zA-Z]+)?.([a-zA-Z]+)?$/,
	sexo: /^([a-zA-Z]+).([a-zA-Z]+)?.([a-zA-Z]+)?$/,
	fecha_nacimiento: /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
	email: /^([a-z\d$-_\.]+)@([a-z\d]+)\.([a-z\d]{2,3})(\.[a-z\d]{2,3})?$/,
};

const fields = {
	nombre: false,
	apellido: false,
	pais: false,
	sexo: false,
	fecha_nacimiento: false,
	email: false,
};

/** Metodos a Utilizar */

function get_pattern(field) {
	return pattern[field.name];
}

function validate_pattern(field, name_field) {
	const pattern = get_pattern(field);

	if (pattern.test(name_field)) {
		document
			.querySelector(`#input_${field.name}`)
			.classList.remove("input_error");
		document
			.querySelector(`#input_${field.name}`)
			.classList.remove("error_text");
		document.querySelector(`#input_${field.name} .error_text`).style.display =
			"none";
		fields[field.name] = true;
	} else {
		document.querySelector(`#input_${field.name}`).classList.add("input_error");
		document.querySelector(`#input_${field.name} .error_text`).style.display =
			"block";
	}
}

function validate_field(field, name_field) {
	if (name_field.trim().length === 0) {
		document.querySelector(`#input_${field.name}`).classList.add("input_error");
	} else {
		document
			.querySelector(`#input_${field.name}`)
			.classList.remove("input_error");
		validate_pattern(field, name_field);
	}
}

/** Eventos Validación */

nameField.addEventListener("blur", (e) => {
	const field = e.target;
	const name_field = e.target.value.trim();
	validate_field(field, name_field);
});

lastNameField.addEventListener("blur", (e) => {
	const field = e.target;
	const name_field = e.target.value.trim();
	validate_field(field, name_field);
});

dataField.addEventListener("blur", (e) => {
	const field = e.target;
	const name_field = e.target.value.trim();
	validate_field(field, name_field);
});

emailField.addEventListener("blur", (e) => {
	const field = e.target;
	const name_field = e.target.value.trim();
	validate_field(field, name_field);
});

sex.addEventListener("change", (e) => {
	const array = Array.from(sexoField);

	array.forEach((input) => {
		if (input.checked) {
			fields.sexo = true;
		}
	});
});

country_Field.addEventListener("change", (e) => {
	const field = e.target;
	const name_field = e.target.value.trim();
	if (name_field === "Otro") {
		input_pais_otro.style.display = "block";
	} else {
		console.log("elegido");
		fields.pais = true;
	}
});

const form = document.getElementById("form_admin");

const url_usuarios = "http://localhost:5000/";

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (
		fields.nombre &&
		fields.apellido &&
		fields.sexo &&
		fields.pais &&
		fields.email &&
		fields.fecha_nacimiento
	) {
		agregarUsuario();
	} else {
		Swal.fire({
			position: "top-end",
			icon: "error",
			title: "Debe completar todos los campos",
			showConfirmButton: false,
			timer: 1500,
		});
	}
});

function agregarUsuario() {
	const formData = new FormData();
	formData.append("nombre", nameField.value);
	formData.append("apellido", lastNameField.value);
	formData.append(
		"sexo",
		document.querySelector("input[name='sexo']:checked").value
	);
	formData.append("fecha_nacimiento", dataField.value);
	formData.append("pais", country_Field.value);
	formData.append("email", emailField.value);

	fetch(url_usuarios + "contacto", {
		method: "POST",
		body: formData,
	})
		.then((res) => {
			console.log("agregue");
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Se Agrego el usuario correctamente",
				showConfirmButton: false,
				timer: 1500,
			});
		})
		.catch(function (error) {
			console.log("no objet");
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "No pudimos agregar el usuario, intentalo nuevamente",
				showConfirmButton: false,
				timer: 1500,
			});
		});
}
