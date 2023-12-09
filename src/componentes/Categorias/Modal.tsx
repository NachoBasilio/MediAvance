import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';

interface ModalProps {
  setCategorias: React.Dispatch<React.SetStateAction<string[]>>;
  categorias: string[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setCategorias, categorias, setModalOpen }: ModalProps): JSX.Element {
  const [categoria, setCategoria] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setModalOpen]);

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria("");
    setModalOpen(false);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoria(e.target.value);
  };

  return (
    <div
      ref={modalRef}
      className='modal absolute rounded bg-teal-200 p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    >
      <form className='flex gap-5' onSubmit={handlerSubmit}>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Programar...'
          value={categoria}
          onChange={handlerChange}
        />
        <button className='bg-transparent hover:bg-teal-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>
          Agregar
        </button>
      </form>
    </div>
  );
}
