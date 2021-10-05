document.addEventListener('DOMContentLoaded',function(){
    crearServicios();
})

async function crearServicios(){
    try {
        //Llamar documento JSON
        const resultado = await fetch('servicios.json')
        const db = await resultado.json();
        
        const { servicios } = db

        //Generar HTML  
        servicios.forEach(servicio => {
            const {nombre,id,precio,descripcion} = servicio

            //DOM Scripting 

            //Crear el contenedor del servicio
            const contenedorServicios = document.querySelector('.contenedor-servicios');
            const contenedorServicio = document.createElement('DIV');
            contenedorServicio.classList.add('servicio')
            contenedorServicios.appendChild(contenedorServicio)

            //Crear nombre del servicio
            const nombreServicio = createElement('H3')
            nombreServicio.textContent = nombre


        });


    } catch (error) {
        
    }
}