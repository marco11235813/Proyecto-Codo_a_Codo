  
import mysql.connector
from mysql.connector import Error

try:
  
    conexion = mysql.connector.connect(
      host='localhost',
      user='root',
      password='',
      database='ddbb_usuarios',
      port=3307)
  
    if conexion.is_connected():
      print('Conexion Exitosa')
  
except Error as ex:
  print('Error durante la conexión' , ex)
  
cursor = conexion.cursor(dictionary=True) 
cursor.execute(
      '''CREATE TABLE IF NOT EXISTS usuarios 
        (codigo INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(15) NOT NULL,
        apellido VARCHAR(15) NOT NULL,
        sexo VARCHAR(15) NOT NULL,
        fechaNacimiento DATE NOT NULL,
        pais VARCHAR(15) NOT NULL,
        email VARCHAR(30) NOT NULL)''')
conexion.commit()
