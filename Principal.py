# importar la libreria flask
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates') #Creamos una variable de tipo app y pedimos a la funcion Flask


@app.route('/')
# llamar a index.html en la ruta principal
def principal():
    return render_template('/index2.html')

#Segundo Controlador
@app.route('/form')
#Funcion llamada formulario 
def formulario():
    # llamar a form.html a la ruta seucndaria para llenar datos
    return render_template('/form.html')
    
# ejecutar
if __name__ == '__main__':
    app.run(debug=True)
