import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../redux/thunks/getPokemonThunk';

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { pokemons } = useSelector(store => store.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const getPokemon = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return { pokemonSearch: getPokemon, search, setSearch };
};
