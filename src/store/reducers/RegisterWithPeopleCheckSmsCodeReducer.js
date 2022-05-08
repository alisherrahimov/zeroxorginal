import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {SmsCheckCodeApi} from '../api/auth';

const initialState = {
  error: false,
  loading: false,
  status: null,
};

const RegisterWithPeopleCheckSmsCodeReducer = createSlice({
  initialState,
  name: 'RegisterWithPeopleCheckSmsCodeReducer',
  extraReducers: builder => {
    builder.addCase(SmsCheckCodeApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(SmsCheckCodeApi.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = true;
        state.status = action.payload.data;
      }
      state.status = action.payload;
      state.loading = false;
    });
    builder.addCase(SmsCheckCodeApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default RegisterWithPeopleCheckSmsCodeReducer.reducer;
