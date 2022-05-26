import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { pending, error } from '../slices/statusSlice';

export const addPokemonThunk = pokemon => {
  return async dispatch => {
    try {
      dispatch(pending());
      await addDoc(collection(db, 'pokemons'), pokemon);
      window.location.reload(true);
    } catch (e) {
      dispatch(error());
    }
  };
};
