  
import mysql.connector
from mysql.connector import Error

try:
  
    conexion = mysql.connector.connect(
      host='ljyunesmor.mysql.pythonanywhere-services.com',
      user='jyunesmor',
      password='Simon310783',
      database='jyunesmor$default',
      )
  
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
