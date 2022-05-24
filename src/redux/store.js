import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import getPokemonsSlice from './slices/getPokemonsSlice';
import statusSlice from './slices/statusSlice';

export const store = configureStore(
  {
    reducer: {
      pokemons: getPokemonsSlice,
      status: statusSlice,
    },
  },
  applyMiddleware(thunk)
);
