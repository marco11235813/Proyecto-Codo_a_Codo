import db
# Si es necesario, pip install Werkzeug 
from werkzeug.utils import secure_filename 
# No es necesario instalar, es parte del sistema standard de Python
import os 
import time

ruta_destino = '../assets/img/UsuarioImages/'

class Usuario() :

  def agregar_Usuario(codigo,nombre,apellido,sexo,fechaNacimiento,pais,email):

    sql ="INSERT INTO usuarios (nombre,apellido,sexo,fechaNacimiento,pais,email) VALUES (%s,%s,%s,%s,%s,%s)"
    valores = (nombre,apellido,sexo,fechaNacimiento,pais,email)
    db.cursor.execute(sql,valores)
    db.conexion.commit()

    return db.cursor.lastrowid

# Modificar Usuario

  def modificar_usuario(self, codigo, nvo_nombre, nvo_apellido, nvo_sexo, nvo_fechaNacimiento, nvo_pais, nvo_email):

        sql = "UPDATE usuarios SET nombre = %s , apellido = %s , sexo = %s , fechaNacimiento = %s , pais = %s , email = %s WHERE codigo = %s"
        valores = (nvo_nombre,nvo_apellido,nvo_sexo,nvo_fechaNacimiento,nvo_pais,nvo_email, codigo)
        db.cursor.execute(sql,valores)
        db.conexion.commit()
    
        return db.cursor.rowcount > 0

  # Eliminar Usuario    

  def eliminar_usuario(self, codigo): 
      db.cursor.execute(f"DELETE FROM usuarios WHERE codigo = {codigo}");
      db.conexion.commit()
      
      return db.cursor.rowcount > 0


  def obtener_Usuario(self, codigo):
    # Consultamos un producto a partir de su código
    db.cursor.execute(f"SELECT * FROM usuarios WHERE codigo = {codigo}")

    return db.cursor.fetchone()



  def obtener_Usuarios(self):
    # Consultamos usuarios
    db.cursor.execute("SELECT * FROM usuarios")

    return db.cursor.fetchall()

