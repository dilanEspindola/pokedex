import { createSlice } from '@reduxjs/toolkit';

export const getPokemonsSlice = createSlice({
  name: 'getPokemon',
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = getPokemonsSlice.actions;

export default getPokemonsSlice.reducer;
