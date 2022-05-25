import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/thunks/getPokemonThunk';
import { Spinner } from '../../components/Spinner';
import { Evolutions } from '../../components/Evolutions';

export const Pokemon = () => {
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const { pokemons } = useSelector(store => store.pokemons);
  const { status } = useSelector(store => store.status);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  if (status === 'pending') return <Spinner />;

  const getPokemon = pokemons.find(pokemons => pokemons.id === Number(pokemon));

  if (!getPokemon) return;
  const type = getPokemon.types.map(type => type.type.name);
  const { name, id, types, sprites, evolutions } = getPokemon;

  return (
    <div className='p-5'>
      <div
        className={
          type[0] === 'grass'
            ? 'w-4/12 mx-auto relative bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'fire'
            ? 'w-4/12 mx-auto relative bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'water'
            ? 'w-4/12 mx-auto relative bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'bug'
            ? 'w-4/12 mx-auto relative bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'normal'
            ? 'w-4/12 mx-auto relative bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'poison'
            ? 'w-4/12 mx-auto relative bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : type[0] === 'electric'
            ? 'w-4/12 mx-auto relative bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2'
            : null
        }
      >
        <img src={sprites.other.dream_world.front_default} alt={name} />
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
                {type.type.name},
              </p>
            ))}
          </div>
        </div>
        <h1 className='text-3xl capitalize text-lime-200'>{name}</h1>
        <Evolutions evolutions={evolutions} />
      </div>
    </div>
  );
};
