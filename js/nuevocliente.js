(function (){
    let DB
    //selector para el formulario
    const formulario = document.querySelector("#formulario")

    document.addEventListener("DOMContentLoaded", function (){
        conectarDB()

    })

    formulario.addEventListener("submit", crearCliente())

    function crearCliente(e){e.preventDefault()

        //extraer valores de los campos de formulario
        //mediante selector
        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono= document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value
        //construir objeto a registrar
        const nuevoCliente ={
            nombre,
            email,
            telefono,
            empresa,
            id:Date.now()
        }

        const transaccion = DB.transaction(["clientes"], 'readwrite')
        const tabla = transaccion.objectStore('clientes')
        table.add(nuevoCliente)

        transaccion.onerror = function (){
            console.log("error al registrar...")
        }

        transaccion.oncomplete = function (){
            console.log("cliente agregado exitosamente")
        }
    }

    function conectarDB(){
        const abrirConexion =
            window.indexedDB.open("customersCRM", 1)

        abrirConexion.onerror=function (){
            console.log("error al conectar a base de datos")
        }
        abrirConexion.onsuccess = function (){
            console.log("conexion exitosa a la base de datos...")
            DB=abrirConexion.result
        }
    }
})()









