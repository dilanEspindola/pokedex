import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    status: 'idle',
  },
  reducers: {
    pending: state => {
      state.status = 'pending';
    },
    succeded: state => {
      state.status = 'succeded';
    },
    error: state => {
      state.status = 'error';
    },
  },
});

export const { pending, succeded, error } = statusSlice.actions;

export default statusSlice.reducer;
