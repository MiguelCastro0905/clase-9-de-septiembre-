(function (){

    function crearDB(){
        const crearDB = window.indexedDB.open("customersCRM", 1 )

        let DB

        crearDB.onerror = function (){
            console.log("Error crear db")
        }

        crearDB.onsuccess = function (){
            console.log("Base de datos creada")
            DB = crearDB.result
        }

        crearDB.onupgradeneeded = function (e){
            const db = e.target.result
            const tabla = db.createObjectStore("clientes",{
                keyPath : 'id',
                autoIncrement: true
            });
        tabla.createIndex('nombre', 'nombre', {unique:false })
        tabla.createIndex('email', 'email', {unique:true})
        tabla.createIndex('telefono', 'telefono', {unique:false})
        tabla.createIndex('id', 'id', {unique:true})
        console.log("base datos lista y creada")
        }
    }

    document.addEventListener("DOMContentLoaded", function (){
        crearDB()
    })
})()





/*(()=>{

    let DB

    const crearBD = () =>{
        const crearBD = window.indexedDB.open('crm' , 1)
        crearBD.onerror = () => {
            console.log("humo un error")
        }

        crearBD.onsuccess =()=>{
            DB = crearBD.result
        }

        crearBD.onupgradeneeded=(e)=>{
            const db = e.target.result
            //creamos tabla
            const  objectStore = db.createObjectStore('crm' ,
                {keyPath: 'id',
                        autoIncrement: true
                        }
                )
            objectStore.createIndex('nombre' , 'nombre', {unique: false})
            objectStore.createIndex('email' , 'email', {unique: false})
            objectStore.createIndex('telefono' , 'telefono', {unique: false})
            objectStore.createIndex('id' , 'id', {unique: false})

            console.log('DB lista y creada')
        }
    }


    const obtenerClientes = () => {
        const abrirConexion = window.indexedDB.open('crm' , 1)
        abrirConexion.onerror = () => {
            console.log("hubo error al obtener clientes")
        }

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result
            const objectStore = DB.transaction('crm').objectStore('crm')

            objectStore.openCursor().onsuccess = (e) => {
                const cursor = e.target.result;
                if(cursor){
                    //console.log(cursor.value)
                    const {nombre, empresa, email , telefono , id} = cursor.value
                    const listadoClientes = document.querySelector("#listado-clientes")
                    listadoClientes.innerHTML += ` <tr>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                  <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                  <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                              </td>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                  <p class="text-gray-700">${telefono}</p>
                              </td>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                  <p class="text-gray-600">${empresa}</p>
                              </td>
                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                  <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                  <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                              </td>
                          </tr>
                      `;
                    cursor.continue()
                }else{
                    console.log("no jay mas registros")
                }
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        crearBD()
        if(window.indexedDB.open('crm' , 1)){
            obtenerClientes()
        }
    })


})()*/