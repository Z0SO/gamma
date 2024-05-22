// Importamos el componente Link de la librería react-router-dom
import { Link } from "react-router-dom"

// Definimos un componente funcional llamado CaseCard que recibe como props un objeto data y un índice
function CaseCard({ data, index }) {

  // El componente devuelve un Link, que es un componente de react-router-dom que genera un enlace de navegación
  return (
    <Link
      // El enlace dirige a '/cases/id'
      to='/cases/id'
      // Cuando el mouse entra en el área del enlace, se ejecuta la siguiente función
      onMouseEnter={() => {
        const img = document.getElementById(data.id)
        img.classList.remove('scale-normal')
        img.classList.add('scale-down')
      }}
      onMouseLeave={() => {
        const img = document.getElementById(data.id)
        img.classList.remove('scale-down')
        img.classList.add('scale-normal')
      }}

      // Añadimos algunas clases al enlace para darle estilo
      className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        {/* // Mostramos una imagen con el id igual al id de los datos y la url de la imagen viene de los datos */}
        <img id={data.id} className="h-96 w-full transition-all duration-400 object-cover" src={data.imageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-800">
            {/* // Mostramos el nombre de la categoría y el enlace a la categoría viene de los datos */}
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            {/* // Mostramos el título y el id del párrafo es igual al índice */}
            <p id={index} className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-400 ease-in-out text-gray-900">{data.title}</p>
            {/* // Mostramos la descripción */}
            <p className="mt-3 text-2xl space-y-2 leading-9 text-gray-500">{data.description}</p>
          </a>
        </div>
      </div>
    </Link>
  )
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default CaseCard