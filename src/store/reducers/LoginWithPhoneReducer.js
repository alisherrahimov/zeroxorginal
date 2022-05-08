import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {LoginWithPhoneSendPasswordApi} from '../api/auth';

const initialState = {
  error: false,
  loading: false,
  status: null,
};

const LoginWithPhoneReducer = createSlice({
  initialState,
  name: 'LoginWithPhoneReducer',
  extraReducers: builder => {
    builder.addCase(LoginWithPhoneSendPasswordApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      LoginWithPhoneSendPasswordApi.fulfilled,
      (state, action) => {
        if (action.payload.error) {
          state.error = true;
          state.status = action.payload.data;
        }
        state.status = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(LoginWithPhoneSendPasswordApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default LoginWithPhoneReducer.reducer;
