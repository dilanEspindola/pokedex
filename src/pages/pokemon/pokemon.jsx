import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/thunks/getPokemonThunk';
import { Spinner } from '../../components/Spinner';
import { Evolutions } from '../../components/Evolutions';
import { ModalEdit } from '../../components/ModalEdit';

export const Pokemon = () => {
  const [isActive, setIsActive] = useState(false);
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const { pokemons } = useSelector(store => store.pokemons);
  const { status } = useSelector(store => store.status);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const showModal = () => {
    setIsActive(true);
  };

  if (status === 'pending') return <Spinner />;

  const getPokemon = pokemons.find(pokemons => pokemons.id === Number(pokemon));

  if (!getPokemon) return;

  const { id, name, types, sprites, evolutions } = getPokemon;

  return (
    <div className='p-5'>
      <div
        className={
          types[0].type
            ? types[0].type.name === 'grass'
              ? 'w-4/12 mx-auto bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'fire'
              ? 'w-4/12 mx-auto bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'water'
              ? 'w-4/12 mx-auto bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'bug'
              ? 'w-4/12 mx-auto bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'normal'
              ? 'w-4/12 mx-auto bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'poison'
              ? 'w-4/12 mx-auto bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : types[0].type.name === 'electric'
              ? 'w-4/12 mx-auto bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
              : null
            : types[0] === 'grass'
            ? 'w-4/12 mx-auto bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'fire'
            ? 'w-4/12 mx-auto bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'water'
            ? 'w-4/12 mx-auto bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'bug'
            ? 'w-4/12 mx-auto bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'normal'
            ? 'w-4/12 mx-auto bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'poison'
            ? 'w-4/12 mx-auto bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : types[0] === 'electric'
            ? 'w-4/12 mx-auto bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : null
        }
      >
        <img src={sprites.other ? sprites.other.dream_world.front_default : sprites} alt={name} />
        <p className='absolute top-5 left-5 text-3xl text-white'>{id}</p>
        <div className='flex w-full gap-1 items-center'>
          <img
            src='https://res.cloudinary.com/dp9zv16le/image/upload/v1653418470/pokeball_j3fgx9.png'
            alt=''
            className='w-10 mr-2'
          />
          <div className='flex gap-2'>
            {types.map((type, index) => (
              <p key={index} className='capitalize text-2xl text-rose-700 font-bold'>
                {type.type ? type.type.name : type},
              </p>
            ))}
          </div>
        </div>
        <h1 className='text-3xl capitalize text-lime-200'>{name}</h1>
        <Evolutions evolutions={evolutions} />
        <button
          className='bg-blue-700 rounded-lg p-2 w-3/12 text-white 
          capitalize mt-3'
          onClick={showModal}
        >
          editar
        </button>
      </div>
      {isActive && (
        <ModalEdit showModal={isActive} setStateModal={setIsActive} pokemon={getPokemon} />
      )}
    </div>
  );
};
