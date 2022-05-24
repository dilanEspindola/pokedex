import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../redux/thunks/getPokemonThunk';
import { Spinner } from '../components/Spinner';
import { Cards } from '../components/Cards';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(store => store.pokemons);
  const status = useSelector(store => store.status);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <section className='p-5'>
      {status.status === 'pending' ? (
        <Spinner />
      ) : (
        status.status === 'succeded' && (
          <div className='grid grid-cols-6 gap-5'>
            {pokemons.pokemons.map(pokemon => (
              <Cards key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export default Home;
