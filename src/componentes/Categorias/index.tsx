import { useState } from "react"
import Modal from './Modal';

export default function Categorias() {
  const [categorias, setCategorias] = useState(["Ejemplo"])
  const [modalOpen, setModalOpen] = useState(false)

  const handlerClick = () => {
    setModalOpen(anterior => !anterior)
  }

  return (
    <div className="flex gap-10 p-10 bg-yellow-400 mt-10 w-full rounded">
      <h2 className="font-bold py-2 px-4 text-2xl">Categorías:</h2>
      <div className="flex gap-2">
          {
            categorias.map(categoria => <h1 className="py-2 px-4 text-2xl bg-yellow-600 rounded-md hover:bg-yellow-300 text-white hover:text-black hover:cursor-pointer" key={categoria}> {categoria} </h1>)
          }
      </div>
      <button 
      className="bg-transparent hover:bg-yellow-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
      onClick={handlerClick}
      >Agregar +</button>
      {
        modalOpen ?
        <Modal 
        setCategorias={setCategorias}
        categorias={categorias}
        setModalOpen={setModalOpen}
        ></Modal>:
        ""
      }
    </div>
  )
}
