
// Definimos un componente funcional llamado ServiceCard que recibe como props un objeto data y un índice
function ServiceCard({ data, index }) {
    // El componente devuelve un div
    return (
        <div
            // Cuando el mouse entra en el área del div, se ejecuta la siguiente función
            onMouseEnter={() => {
                // Obtenemos el elemento con el id igual al índice
                const title_element = document.getElementById(index)
                // Añadimos la clase 'text-orange-500' al elemento
                title_element.classList.add('text-orange-500')
                // Eliminamos la clase 'text-gray-900' del elemento
                title_element.classList.remove('text-gray-900')
            }}
            // Cuando el mouse sale del área del div, se ejecuta la siguiente función
            onMouseLeave={() => {
                // Obtenemos el elemento con el id igual al índice
                const title_element = document.getElementById(index)
                // Eliminamos la clase 'text-orange-500' del elemento
                title_element.classList.remove('text-orange-500')
                // Añadimos la clase 'text-gray-900' al elemento
                title_element.classList.add('text-gray-900')
            }}


            // Añadimos algunas clases al div para darle estilo
            className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-2 transition duration-300 ease-in-out">
            <div className="w-full ">
                {/* // Mostramos una imagen cuya url viene de los datos */}
                <img src={data.img} className='w-10 h-10' />
                {/* // Mostramos el título que viene de los datos */}
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                {/* // Mostramos el título nuevamente como párrafo */}
                <p className="text-lg font-regular text-gray-500 pt-4">{data.title}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
                {/* // Mostramos un título con el texto "Learn More" y el id del h2 es igual al índice */}
                <h2 id={index} className="items-end text-xl font-semibold text-gray-900 pt-8">Learn More</h2>
            </div>
        </div>
    )
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default ServiceCard