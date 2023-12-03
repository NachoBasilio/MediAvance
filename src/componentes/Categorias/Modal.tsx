import React, { useState } from 'react'

export default function Modal({setCategorias, categorias, setModalOpen}) {
  const [categoria, setCategoria] = useState("")

  const handlerSubmit = (e) => {
    e.preventDefault()
    setCategorias([...categorias, categoria])
    setCategoria("")
    setModalOpen(anterior => !anterior)
  }

  const handlerChange = (e) => {
    setCategoria(e.target.value)
  }


  return (
    <div className='modal absolute rounded bg-teal-200 p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    onSubmit={handlerSubmit}
    >
      <form className='flex gap-5' action="">

        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Programar..."
        value={categoria}
        onChange={handlerChange}
        />

        <button className='bg-transparent hover:bg-teal-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'
        >Agregar</button>
      </form>
    </div>
  )
}
