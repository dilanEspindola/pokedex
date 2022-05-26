import { deleteDoc, collection, query, doc, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { pending, error } from '../slices/statusSlice';
import { getPokemons } from './getPokemonThunk';

export const deletePokemon = idPokemon => {
  return async dispatch => {
    // delete doc from firebase
    dispatch(pending());
    try {
      const q = query(collection(db, 'pokemons'), where('id', '==', idPokemon));
      const snapshot = await getDocs(q);
      let id;
      snapshot.docs.map(doc => (id = doc.id));
      const docRef = doc(db, 'pokemons', id);
      await deleteDoc(docRef);
      dispatch(getPokemons());
    } catch (e) {
      dispatch(error());
    }
  };
};
