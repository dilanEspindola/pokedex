import { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addPokemonThunk } from '../redux/thunks/addPokemonThunk';

export const AddPokemon = () => {
  const [modal, setModal] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const dispatch = useDispatch();

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const { handleChange, dataForm } = useForm({
    id: '',
    name: '',
    image: '',
    height: '',
  });

  const handleChecked = ({ target }) => {
    const { checked, value } = target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newPokemon = {
      id: Number(dataForm.id),
      name: dataForm.name,
      sprites: dataForm.image,
      types: checkedValues,
      height: dataForm.height,
    };
    dispatch(addPokemonThunk(newPokemon));
    closeModal();
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <button className='bg-green-500 p-2 capitalize text-lg' onClick={showModal}>
        Añadir pokemon
      </button>
      <Modal isOpen={modal} className=''>
        <svg
          className='w-6 h-6 cursor-pointer'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          onClick={closeModal}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
        <div className='flex flex-col w-4/12 items-center mx-auto border-2 p-5'>
          <h1 className='text-2xl mb-5'>Añadir pokemon</h1>
          <form className='w-full flex flex-col gap-3' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor=''>Id:</label>
              <input
                type='number'
                name='id'
                className='focus:outline-none p-2 border-black rounder-sm'
                style={{ border: '1px solid black' }}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>Name:</label>
              <input
                type='text'
                name='name'
                className='focus:outline-none p-2 border-black rounder-sm'
                style={{ border: '1px solid black' }}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>URL Image:</label>
              <input
                type='text'
                name='image'
                className='focus:outline-none p-2 border-black rounder-sm'
                style={{ border: '1px solid black' }}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>Weight:</label>
              <input
                type='text'
                name='weight'
                className='focus:outline-none p-2 border-black rounder-sm'
                style={{ border: '1px solid black' }}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor=''>Height:</label>
              <input
                type='text'
                name='height'
                className='focus:outline-none p-2 border-black rounder-sm'
                style={{ border: '1px solid black' }}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className=''>
                Types:
              </label>
              <div className='flex gap-2'>
                <div>
                  <label htmlFor='normal'>Normal</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='normal'
                    value='normal'
                    onChange={handleChecked}
                  />
                </div>
                <div>
                  <label htmlFor='fire'>Fire</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='fire'
                    value='fire'
                    onChange={handleChecked}
                  />
                </div>
                <div>
                  <label htmlFor='water'>Water</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='water'
                    value='water'
                    onChange={handleChecked}
                  />
                </div>
                <div>
                  <label htmlFor='electric'>Electric</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='electric'
                    value='electric'
                    onChange={handleChecked}
                  />
                </div>
                <div>
                  <label htmlFor='flying'>Flying</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='flying'
                    value='flying'
                    onChange={handleChecked}
                  />
                </div>
                <div>
                  <label htmlFor='poison'>Poison</label>
                  <input
                    type='checkbox'
                    name='normal'
                    id='poison'
                    value='poison'
                    onChange={handleChecked}
                  />
                </div>
              </div>
            </div>
            <button className='mt-5 bg-green-500 capitalize p-2 text-white'>añadir</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
