import { updateDoc, getDocs, collection, query, where, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { pending, succeded, error } from '../slices/statusSlice';
import { getPokemons } from './getPokemonThunk';

export const editPokemonThunk = pokemon => {
  return async dispatch => {
    dispatch(pending());
    try {
      const q = query(collection(db, 'pokemons'), where('id', '==', pokemon.id));
      const snapshot = await getDocs(q);
      let id;
      snapshot.docs.map(doc => (id = doc.id));
      const docRef = doc(db, 'pokemons', id);
      await updateDoc(docRef, pokemon).then(() => dispatch(succeded()));
      dispatch(getPokemons());
    } catch (e) {
      dispatch(error());
    }
  };
};
