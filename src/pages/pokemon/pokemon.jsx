import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/thunks/getPokemonThunk';
import { Spinner } from '../../components/Spinner';

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

  return (
    <div>
      <h1>pokemon</h1>
    </div>
  );
};

// export const PokemonMemoized = memo(Pokemon);
