// or via CommonJS
const url_usuarios = "http://localhost:5000/";
let codigo = " ";

document.addEventListener("DOMContentLoaded", cargaPagina);

function cargaPagina() {
	fetch(url_usuarios + "usuarios", { method: "GET" })
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Error al agregar los usuarios");
			}
		})
		.then((usuarios) => {
			if (usuarios.length >= 1) {
				cargaUsuarios();
			} else {
				const tableBody = document.querySelector("#msgVacio");
				const row = document.createElement("h1");
				row.innerHTML =
					"No hay Usuarios cargados, por favor intentalo más tarde";
				tableBody.appendChild(row);
			}
		})
		.catch(function (error) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "No pudimos Cargar el usuario, intentalo nuevamente",
				showConfirmButton: false,
				timer: 1500,
			});
		});
}

/* Cargar Datos de Base en Administrador
 */
const btn_modificar = document.querySelector("#b1");

const form = document.getElementById("form_admin");

form.addEventListener("submit", modificarUsuario);

function cargaUsuarios() {
	fetch(url_usuarios + "usuarios", { method: "GET" })
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Error al agregar los usuarios");
			}
		})
		.then((usuarios) => {
			const tableBody = document.querySelector("#table tbody");
			usuarios.forEach((usuario) => {
				const fecha = new Date(`${usuario.fechaNacimiento}`);
				const day = String(fecha.getUTCDate()).padStart(2, "0");
				const month = String(fecha.getUTCMonth() + 1).padStart(2, "0");
				const year = fecha.getUTCFullYear();

				const name = capitalize(usuario.nombre);
				const surname = capitalize(usuario.apellido);
				const pais = capitalize(usuario.pais);

				const row = document.createElement("tr");

				row.innerHTML += `<td id="codigo">${usuario.codigo}</td>
					<td>${name}</td>
					<td>${surname}</td>
					<td>${usuario.sexo}</td>
					<td>${day} - ${month} - ${year}</td>
					<td>${pais}</td>
					<td>${usuario.email}</td>
					<td class="one">
						<a onclick="obtenerUsuario('${usuario.codigo}')">
							<span class="material-symbols-sharp">
								edit
							</span>
						</a>
						<a onclick="eliminarUsuario('${usuario.codigo}')">
							<span class="material-symbols-sharp">
								delete
							</span>
						</a>
					<td>`;

				tableBody.appendChild(row);
			});
		})
		.catch(function (error) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "No pudimos Cargar el usuario, intentalo nuevamente",
				showConfirmButton: false,
				timer: 1500,
			});
		});
}

function modificarUsuario(e) {
	e.preventDefault();
	Swal.fire({
		title: "Estas Seguro de modificarlo?",
		text: "No hay forma de revertirlo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si, Modificar!",
	}).then((result) => {
		if (result.isConfirmed) {
			const codId = document.getElementById("codigoMod").value;
			const data = new FormData();
			data.append("codigo", codId);
			data.append("nombre", document.getElementById("nombreModificar").value);
			data.append(
				"apellido",
				document.getElementById("apellidoModificar").value
			);
			data.append(
				"sexo",
				document.querySelector("input[name='sexoModificar']:checked").value
			);
			data.append("pais", document.getElementById("paisModificar").value);
			data.append("email", document.getElementById("emailModificar").value);
			data.append(
				"fecha_nacimiento",
				document.getElementById("fecha_nacimientoModificar").value
			);

			fetch(url_usuarios + "contacto/" + codId, {
				method: "PUT",
				body: data,
			})
				.then((res) => {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Se Modifico el usuario correctamente",
						showConfirmButton: false,
						timer: 1500,
					});
				})
				.catch(function (error) {
					Swal.fire({
						position: "top-end",
						icon: "error",
						title: "No pudimos Modificar el usuario, intentalo nuevamente",
						showConfirmButton: false,
						timer: 1500,
					});
				});
		}
		location.href = location.href;
		cargaUsuarios();
	});
}

function eliminarUsuario(codigo) {
	Swal.fire({
		title: "Estas Seguro de Eliminarlo?",
		text: "No hay forma de revertirlo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si, Eliminarlo!",
	}).then((result) => {
		if (result.isConfirmed) {
			fetch(url_usuarios + "contacto/" + codigo, {
				method: "DELETE",
			})
				.then((res) => {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Se Elimino al usuario correctamente",
						showConfirmButton: false,
						timer: 1500,
					});
				})
				.catch(function (error) {
					Swal.fire({
						position: "top-end",
						icon: "error",
						title: "No pudimos Eliminar al usuario, intentalo nuevamente",
						showConfirmButton: false,
						timer: 1500,
					});
				});
		}
		location.href = location.href;
		cargaUsuarios();
	});
}

function obtenerUsuario(codigo) {
	fetch(url_usuarios + `usuarios/${codigo}`, { method: "GET" })
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Error al agregar los usuarios");
			}
		})
		.then((user) => {
			document.getElementById("form_admin").style.display = "block";
			codigo = user.codigo;
			nombre = user.nombre;
			apellido = user.apellido;
			sexo = user.sexo;
			pais = user.pais;
			email = user.email;
			fechaNacimiento = user.fechaNacimiento;

			fechaNacimiento = new Date(fechaNacimiento);

			document.getElementById("codigoMod").value = codigo;
			document.getElementById("nombreModificar").value = capitalize(nombre);
			document.getElementById("apellidoModificar").value = capitalize(apellido);
			document.getElementById("fecha_nacimientoModificar").value =
				fechaNacimiento.toISOString().substring(0, 10);
			document.getElementById("bpais").value = capitalize(pais);
			document.getElementById("emailModificar").value = email;
			document.getElementById("ValueSex").value = capitalize(sexo);

			btn_modificar.value = `Modificar datos de : ${user.apellido}, ${user.nombre}`;
		})
		.catch(function (error) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "No pudimos Cargar el usuario, intentalo nuevamente",
				showConfirmButton: false,
				timer: 1500,
			});
		});
}

/* Hacer Capital la Pirmer Letra */

function firsthChar(text) {
	const first = text.charAt(0).toUpperCase();
	const otherChars = text.substring(1);
	return `${first}${otherChars}`;
}

function capitalize(text) {
	return text
		.split(" ")
		.map((word) => firsthChar(word))
		.join(" ");
}
