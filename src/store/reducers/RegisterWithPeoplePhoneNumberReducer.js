import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createStatus, URL} from '../../screens/constants';
export const UserDataPostApi = createAsyncThunk(
  'user/register',
  async number => {
    try {
      const response = await fetch(URL + '/user/register', {
        body: JSON.stringify({phone: '+998' + number, type: 2, step: 1}),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      });
      if (response.status === createStatus) {
        const data = await response.json();
        return data;
      } else {
        const error = await response.json();
        return {error: error};
      }
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  error: false,
  loading: false,
  status: null,
};

const RegisterWithPeoplePhoneNumberReducer = createSlice({
  initialState,
  name: 'RegisterWithPeoplePhoneNumberReducer',
  extraReducers: builder => {
    builder.addCase(UserDataPostApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UserDataPostApi.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = true;
      }
      state.status = action.payload;
      state.loading = false;
    });
    builder.addCase(UserDataPostApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default RegisterWithPeoplePhoneNumberReducer.reducer;
