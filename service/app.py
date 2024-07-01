from flask import Flask, render_template, request, redirect,  jsonify, url_for
from flask_cors import CORS
import db
import Usuario
from datetime import datetime, date
user = Usuario.Usuario()

app = Flask(__name__, static_folder='../assets' ,template_folder= '../src')
CORS(app)

@app.route("/", methods=['GET'])
def home():
  return render_template("index.html")

@app.route("/calendario", methods=['GET'])
def calendario():
  return render_template("cronograma.html")

@app.route("/equiposypilotos", methods=['GET'])
def equiposypilotos():
  return render_template("equipos.html")

@app.route("/estadisticas", methods=['GET'])
def estadisticas():
  return render_template("estadisticas.html")

@app.route("/galeria", methods=['GET'])
def galeria():
  return render_template("galeria.html")

@app.route("/administrador", methods=['GET'])
def administrador():
  return render_template("administrador.html")

@app.route("/contacto", methods=['GET','POST'])
def agregar_Usuario():
    if request.method == 'POST':
        user.agregar_Usuario(request.form['nombre'].lower(),request.form['apellido'].lower(),request.form['sexo'].lower(),request.form['fecha_nacimiento'],request.form['pais'].lower(),request.form['email'].lower())
    return render_template("contacto.html")

@app.route("/contacto/<int:codigo>", methods=["DELETE"])
def eliminar_usuario(codigo):
  if request.method == 'DELETE':
    user.eliminar_usuario(codigo);
    return render_template("administrador.html")
  

@app.route("/contacto/<int:codigo>", methods=["PUT"])
def modificar_usuario(codigo):
  if request.method == 'PUT':
    user.modificar_usuario(codigo,request.form.get('nombre'),request.form.get('apellido'),request.form.get('sexo'),request.form.get('fecha_nacimiento'),request.form.get('pais'),request.form.get('email'));
    return render_template("administrador.html")
  


@app.route("/usuarios", methods=['GET'])
def listar_usuarios():
  users = user.obtener_Usuarios();
  return jsonify(users)
  
  
@app.route("/usuarios/<int:codigo>", methods=['GET'])
def obtener_usuario(codigo):
    return jsonify(user.obtener_Usuario(codigo))




if __name__ == "__main__":
  app.run(debug=True)