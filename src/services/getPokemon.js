import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

(async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/23';
  const res = await fetch(url);
  const data = await res.json();
  const { name, types, sprites, id } = data;

  await addDoc(collection(db, 'pokemons'), { name, types, sprites, id });
})();
