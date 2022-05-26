import { useForm } from '../hooks/useForm';
import { editPokemonThunk } from '../redux/thunks/editPokemonThunk';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Spinner } from './Spinner';

export const FormEdit = ({ pokemon, setStateModal }) => {
  const dispatch = useDispatch();
  const { status } = useSelector(store => store.status);
  const { dataForm, handleChange } = useForm({
    name: '',
    id: '',
    sprites: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const id = dataForm.id === '' ? pokemon && pokemon.id : dataForm.id;
    const name = dataForm.name === '' ? pokemon && pokemon.name : dataForm.name;
    const sprites = dataForm.sprites === '' ? pokemon && pokemon.sprites : dataForm.sprites;

    dispatch(editPokemonThunk({ id, name, sprites }));
    setStateModal(false);
    if (status === 'pending') return <Spinner />;
    if (status === 'succeded') {
      Swal.fire({
        title: 'Success',
        text: 'Pokemon edited successfully',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    }
    if (status === 'error') {
      Swal.fire({
        title: 'Error',
        text: 'Pokemon not edited',
        icon: 'error',
      });
    }
  };

  return (
    <form
      action=''
      className='flex flex-col gap-3 mx-auto mt-5 bg-white p-5'
      onSubmit={handleSubmit}
    >
      <label htmlFor='' className='text-black capitalize'>
        id
      </label>
      <input
        type='text'
        name='id'
        className='bg-white border-4 focus:outline-none p-2 text-black'
        defaultValue={pokemon && pokemon.id}
        style={{ border: '1px solid black' }}
        disabled
      />

      <label htmlFor='' className='text-black capitalize'>
        name
      </label>
      <input
        type='text'
        name='name'
        className='bg-white border-4 focus:outline-none p-2 text-black'
        onChange={handleChange}
        defaultValue={pokemon && pokemon.name}
        style={{ border: '1px solid black' }}
      />

      <label htmlFor='' className='text-black capitalize'>
        image
      </label>
      <input
        type='text'
        name='image'
        className='bg-white border-4 focus:outline-none p-2 text-black'
        onChange={handleChange}
        defaultValue={
          pokemon.sprites.other ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites
        }
        style={{ border: '1px solid black' }}
      />
      <button
        className='bg-whiterounded-lg mt-5 p-2 text-black hover:bg-black 
        hover:text-white transition-all duration-300 ease-in-out rounded-md'
        style={{ border: '1px solid black' }}
      >
        Editar
      </button>
    </form>
  );
};
