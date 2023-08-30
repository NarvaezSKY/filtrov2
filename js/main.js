import { rutas } from "/proyectoFiltro/modules/db.js";

document.addEventListener('DOMContentLoaded', ()=>{

    // VARIABLES
    let nombreRuta=document.getElementById('nombre')
    let minKm=document.getElementById('minkm')
    let maxKm=document.getElementById('maxkm')
    let estadoRuta=document.getElementById('estado')
    let calificacionRuta=document.getElementById('calificacion')
    let tipoVia=document.getElementById('tipovia')

    let resultadoBusqueda=document.getElementById('resultado')
    mostrarRutas()
    
    rutas.forEach(element => {

    // poblar opciones
        let opcNombre=document.createElement('option')
        opcNombre.value=element.nombre
        opcNombre.textContent=element.nombre
        nombreRuta.appendChild(opcNombre)

        let opcMaxKm=document.createElement('option')
        opcMaxKm.value=element.maxKilometros
        opcMaxKm.textContent=element.maxKilometros
       
        maxKm.appendChild(opcMaxKm)

        let opcMinKm=document.createElement('option')
        opcMinKm.value=element.minKilometros
        opcMinKm.textContent=element.minKilometros
        minKm.appendChild(opcMinKm)
    });
    
// FUNCION QUE MUESTRA LAS RUTAS
    function mostrarRutas(){
        rutas.forEach((element)=>{
            let divElemento=document.createElement('div')
            divElemento.classList.add('divElemento')
            divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${element.nombre}
            <b class="textoRuta">Kilometros Min: </b> ${element.minKilometros}
            <b class="textoRuta">Kilometros Max: </b> ${element.maxKilometros}
            <b class="textoRuta">Estado: </b> ${element.estado}
            <b class="textoRuta">Calificación: </b> ${element.calificacion}
            <b class="textoRuta">Tipo de vía: </b> ${element.tipoVia}`

            resultadoBusqueda.appendChild(divElemento)
        }) 
    }

    // OBJETO VACIO

    let filtro={
        nombre: "",
        minKilometros: "",
        maxKilometros: "",
        estado: "",
        calificacion: "",
        tipoVia: ""
    }

    // EVENTOS DE LOS SELECT
    nombreRuta.addEventListener('change', (e)=>{
        filtro.nombre=e.target.value
        console.table(filtro)
        filtrarTipo()
    })
    minKm.addEventListener('change', (e)=>{
        console.log(e.target.value)
        filtro.minKilometros=parseInt(e.target.value)
        console.table(filtro)
        filtrarTipo()
    })
    maxKm.addEventListener('change', (e)=>{
        filtro.maxKilometros=parseInt(e.target.value)
        console.table(filtro)
        filtrarTipo()
    })
    estadoRuta.addEventListener('change', (e)=>{
        filtro.estado=e.target.value
        console.table(filtro) 
        filtrarTipo()
    })
    calificacionRuta.addEventListener('change', (e)=>{
        filtro.calificacion=parseInt(e.target.value)
        console.table(filtro) 
        filtrarTipo()
        
    })
    tipoVia.addEventListener('change', (e)=>{
        filtro.tipoVia=e.target.value
        console.table(filtro) 
        filtrarTipo()
        
    })

// FILTRO Y TAL
    function filtrarTipo() {
        limpiarHTML()
        rutas.forEach((element)=>{
            const variables=(element.nombre===filtro.nombre ||filtro.nombre==="") && 
            (element.minKilometros===filtro.minKilometros ||filtro.minKilometros==="")&&
            (element.maxKilometros===filtro.maxKilometros ||filtro.maxKilometros==="")&&
            (element.estado===filtro.estado || filtro.estado==="") && 
            (element.calificacion===filtro.calificacion || filtro.calificacion==="") && 
            (element.tipoVia===filtro.tipoVia || filtro.tipoVia==="")

            console.log(variables)
        
            if (variables){
            
                    let divElemento=document.createElement('div')
                    divElemento.classList.add('divElemento')
                    divElemento.innerHTML=`<b class="textoRuta">Nombre Ruta:</b> ${element.nombre}
                    <b class="textoRuta">Kilometros Min: </b> ${element.minKilometros}
                    <b class="textoRuta">Kilometros Max: </b> ${element.maxKilometros}
                    <b class="textoRuta">Estado: </b> ${element.estado}
                    <b class="textoRuta">Calificación: </b> ${element.calificacion}
                    <b class="textoRuta">Tipo de vía: </b> ${element.tipoVia}`
        
                    resultadoBusqueda.appendChild(divElemento) 
                }   
        })
    }

    
//  DESCARTADISIMOS
        
       
        
   

    // nombreRuta.addEventListener('change',(element)=>{
    //     limpiarHTML()
    //     console.clear()
    //     console.log(element.target)
    //     rutas.forEach((so)=>{
    //         if (element.target.value===so.nombre){
                
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

    function limpiarHTML(){
        resultadoBusqueda.innerHTML=""
    }
})