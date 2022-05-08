import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {UserDataPostApi} from '../api/auth';

const initialState = {
  error: false,
  loading: false,
  status: null,
};

const RegisterWithPeoplePhoneNumberReducer = createSlice({
  initialState,
  name: 'RegisterWithPeoplePhoneNumberReducer',
  reducers: {
    setValueNull: (state, action) => {
      state.error = false;
      state.loading = false;
      state.status = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(UserDataPostApi.pending, (state, action) => {
      console.log(action, 'error1');
      state.loading = true;
    });
    builder.addCase(UserDataPostApi.fulfilled, (state, action) => {
      console.log(action.payload, 'error2');
      if (action.payload.error) {
        state.error = true;
        state.status = action.payload.data;
      }
      state.status = action.payload;
      state.loading = false;
    });
    builder.addCase(UserDataPostApi.rejected, (state, action) => {
      console.log(action, 'error3');
      state.loading = false;
      state.error = action.error;
    });
  },
});
export const {setValueNull} = RegisterWithPeoplePhoneNumberReducer.actions;
export default RegisterWithPeoplePhoneNumberReducer.reducer;
