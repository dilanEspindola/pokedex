import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../redux/thunks/getPokemonThunk';
import { Spinner } from '../components/Spinner';
import { Cards } from '../components/Cards';
import { useSearch } from '../hooks/useSearch';
import { AddPokemon } from '../components/AddPokemon';
import { Logout } from '../components/Logout';

import { motion } from 'framer-motion';

const Home = () => {
  const { setSearch, search, pokemonSearch } = useSearch();
  const dispatch = useDispatch();
  const pokemons = useSelector(store => store.pokemons);
  const status = useSelector(store => store.status);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <motion.section
      className='p-5'
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0%)' }}
      exit={{ transform: 'translateX(100%)', transition: { duration: 0.6 } }}
    >
      <div className='flex justify-center mb-10 '>
        <input
          type='search'
          className='border-2 w-4/12 bg-blue-400 p-2 
          rounded-md text-white placeholder:text-white'
          placeholder='busca tu pokemon favorito...'
          onChange={handleSearch}
        />
        <AddPokemon />
      </div>
      {status.status === 'pending' ? (
        <Spinner />
      ) : (
        status.status === 'succeded' && (
          <div className='grid grid-cols-6 gap-5'>
            {search === '' ? (
              pokemons.pokemons.map(pokemon => <Cards key={pokemon.id} pokemon={pokemon} />)
            ) : pokemonSearch.length < 1 ? (
              <h1 className='text-2xl mt-5'>No hay resultados</h1>
            ) : (
              pokemonSearch.map(pokemon => <Cards key={pokemon.id} pokemon={pokemon} />)
            )}
          </div>
        )
      )}
      <Logout />
    </motion.section>
  );
};

export default Home;
