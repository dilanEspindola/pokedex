import { db } from '../../firebase';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { setPokemons } from '../slices/getPokemonsSlice';
import { pending, succeded, error } from '../slices/statusSlice';

export const getPokemons = () => {
  return async dispatch => {
    dispatch(pending());
    try {
      const q = query(collection(db, 'pokemons'), orderBy('id', 'asc'));
      const snapshot = await getDocs(q);
      const pokemons = snapshot.docs.map(doc => doc.data());
      dispatch(setPokemons(pokemons));
      dispatch(succeded());
    } catch (e) {
      dispatch(error());
    }
  };
};
