import {createSlice} from '@reduxjs/toolkit';
import {HomeApi} from '../api/home';
const initialState = {
  error: false,
  loading: false,
  home: [],
  user: [],
};

const HomeReducer = createSlice({
  initialState,
  name: 'HomeReducer',
  extraReducers: builder => {
    builder.addCase(HomeApi.pending, state => {
      state.loading = true;
    });
    builder.addCase(HomeApi.fulfilled, (state, action) => {
      state.home = action.payload.home;
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(HomeApi.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default HomeReducer.reducer;
