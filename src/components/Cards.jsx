import { useNavigate } from 'react-router-dom';
import { deletePokemon } from '../redux/thunks/deletePokemonThunk';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const Cards = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector(store => store.status);

  if (status === 'pendding') {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pokemon Eliminado',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const { id, name, types, sprites } = pokemon;

  return (
    <div
      role='cards'
      className={
        types[0].type
          ? types[0].type.name === 'grass'
            ? 'bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'fire'
            ? 'bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'water'
            ? 'bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'bug'
            ? 'bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'normal'
            ? 'bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'poison'
            ? 'bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0].type.name === 'electric'
            ? 'bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : null
          : types[0] === 'grass'
          ? 'bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'fire'
          ? 'bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'water'
          ? 'bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'bug'
          ? 'bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'normal'
          ? 'bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'poison'
          ? 'bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : types[0] === 'electric'
          ? 'bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
          : null
      }
    >
      <img
        src={sprites.other ? sprites.other.dream_world.front_default : sprites}
        alt=''
        className='cursor-pointer'
        onClick={() => navigate(`/pokemon/${id}`)}
      />
      <div className=''>
        <p className='text-center text-white'>{id}</p>
        <h1 className='text-white text-2xl capitalize'>{name}</h1>
      </div>
      <button
        className='bg-red-500 rounded-lg p-2 text-white w-full'
        onClick={() => dispatch(deletePokemon(id))}
      >
        Eliminar
      </button>
    </div>
  );
};
