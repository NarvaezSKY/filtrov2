import { rutas } from "/proyectoFiltro/modules/db.js";
// console.log(rutas)


document.addEventListener('DOMContentLoaded', ()=>{
    let nombreRuta=document.getElementById('nombre')
    let minKm=document.getElementById('minkm')
    let maxKm=document.getElementById('maxkm')
    let estadoRuta=document.getElementById('estado')
    let calificacionRuta=document.getElementById('calificacion')
    let tipoVia=document.getElementById('tipovia')
    // VARIABLES
    let arrayOpciones=[]
    arrayOpciones.push(nombreRuta,estadoRuta,calificacionRuta, tipoVia)
  

    let resultadoBusqueda=document.getElementById('resultado')
    // mostrarRutas()
    
    rutas.forEach(element => {
        // console.log(element)

    // poblar opciones
        let opcNombre=document.createElement('option')
        opcNombre.value=element
        opcNombre.textContent=element.nombre
        nombreRuta.appendChild(opcNombre)

        let opcMaxKm=document.createElement('option')
        opcMaxKm.value=element
        opcMaxKm.textContent=element.maxKilometros
        maxKm.appendChild(opcMaxKm)

        let opcMinKm=document.createElement('option')
        opcMinKm.value=element
        opcMinKm.textContent=element.minKilometros
        minKm.appendChild(opcMinKm)
    });
    
// FUNCION QUE MUESTRA LAS RUTAS
    // function mostrarRutas(){
    //     rutas.forEach((element)=>{
    //         let divElemento=document.createElement('div')
    //         divElemento.classList.add('divElemento')
    //         divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${element.nombre}
    //         <b class="textoRuta">Kilometros Min: </b> ${element.minKilometros}
    //         <b class="textoRuta">Kilometros Max: </b> ${element.maxKilometros}
    //         <b class="textoRuta">Estado: </b> ${element.estado}
    //         <b class="textoRuta">Calificación: </b> ${element.calificacion}
    //         <b class="textoRuta">Tipo de vía: </b> ${element.tipoVia}`

    //         resultadoBusqueda.appendChild(divElemento)

       
    //     })

        
    // }

    function limpiarHTML(){
        resultadoBusqueda.innerHTML=""
    }

arrayOpciones.forEach((e)=>{
e.addEventListener('change', (element)=>{
    limpiarHTML()
    // console.clear()

        for(const clave of rutas){
            
            for(const clavedo in clave){
                
                const valor=clave[clavedo]
                

                if (element.target.value===valor){
                    console.log("a", valor)


                    limpiarHTML()
                    // rutas.forEach((so)=>{
                    //     // console.log(element.target.value)
                    //     let divElemento=document.createElement('div')
                    //     divElemento.classList.add('divElemento')
                    //     divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
                    //     <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
                    //     <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
                    //     <b class="textoRuta">Estado: </b> ${so.estado}
                    //     <b class="textoRuta">Calificación: </b> ${so.calificacion}
                    //     <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
                    //     resultadoBusqueda.appendChild(divElemento)
                    // })

                    resultadoBusqueda.innerHTML=`${valor}`
                 
                 
                }


                
            }
        } 
})
})

    // estadoRuta.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target.value)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.estado){
                
    //             console.log(so)
    //             let divElemento=document.createElement('div')
    //             divElemento.classList.add('divElemento')
    //             divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
    //             <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
    //             <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
    //             <b class="textoRuta">Estado: </b> ${so.estado}
    //             <b class="textoRuta">Calificación: </b> ${so.calificacion}
    //             <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
    //             resultadoBusqueda.appendChild(divElemento)
             
    //         }
            
    //     })
        
        
    // })
    
    // tipoVia.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target.value)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.tipoVia){
                
    //             console.log(so)
    //             let divElemento=document.createElement('div')
    //             divElemento.classList.add('divElemento')
    //             divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${so.nombre}
    //             <b class="textoRuta">Kilometros Min: </b> ${so.minKilometros}
    //             <b class="textoRuta">Kilometros Max: </b> ${so.maxKilometros}
    //             <b class="textoRuta">Estado: </b> ${so.estado}
    //             <b class="textoRuta">Calificación: </b> ${so.calificacion}
    //             <b class="textoRuta">Tipo de vía: </b> ${so.tipoVia}`
    //             resultadoBusqueda.appendChild(divElemento)
             
    //         }
            
    //     })
        
        
    // })

    



  























})

