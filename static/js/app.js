var boton=document.getElementById('agregar'); //Creamos una variable para agregar el botom
var guardar=document.getElementById('guardar') // Pra guardar la informacion
var lista=document.getElementById('lista')
var data=[]; //generamos un variable de tipo dato con un array
var cant = 0;
boton.addEventListener('click', agreagar); //le damos funcion al boton si da un click
function agreagar(){ //creamos la funcion agregar
    var nombre=document.getElementById('nombre').value; //pedimos que nos del el nombre
    var correo=document.getElementById('correo').value;// obtenemos el correo
    var prioridades=document.getElementById('prioridades').value;//obtenemos las prioridades

    //Agregar elementos al arreglo
    data.push(
        {       "id":cant,
                "nombre":nombre,
                "correo":correo,
                "prioridades":prioridades

        }
    );
    //Creamos un id_row para que cuando vayamos agregando nuevas filas no se desoredenn
    var id_row='row'+cant;
    var fila='<tr id='+id_row+'><td>'+nombre+'</td><td>'+correo+'</td><td>'+prioridades+'</td><td><a href="#" class="btn btn-light" onclick="eliminar('+cant+')";>Eliminar</a></tr>';
    //Agregar a la tabla
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#correo").val('');
    $("#prioridades").val('');
    $("#nombre").focus();
    cant++;

}
 
function save(){

}
//row fue como le nombramos a la listas
function eliminar(row){

    //remover la fila  de la tabla html
    $("#row"+row).remove();
    var i = 0; //variable que se inicializa en 0
    var pos=0; //una posicion en 0
    //para todo x de data
    for(x of data){ 
        if(x.id==row){ //x.id == row, row significa fil
            pos=i; //posicion va hacer igual a i
        }
        i++; //y aumentada en uno
    }
    data.splice(pos,1); //Entonces la posicion estara en 1 

}


function sololetras(e){
    key=e.keyCode || e.which;

    tecaldo=String.fromCharCode(key).toLowerCase();

    letras = "abcdefgijklmnopqrstuvwxyz";
    especiales="8-37-38-46-164";

    teclado_especial = false;

    for(var i in especiales){
        if(key==especiales[1]){
            teclado_especial=true;break;

        }

    }
    if(letras.indexOf(teclado) ==-1 && !teclado_especial) {
        return false;

    }

}