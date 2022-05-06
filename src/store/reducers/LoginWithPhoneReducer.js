import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {successStatus, URL} from '../../screens/constants';
export const LoginWithPhoneSendPasswordApi = createAsyncThunk(
  'user/phone/password',
  async state => {
    const {phone, password} = state;
    console.log(state, 'state');
    try {
      const response = await fetch(
        'http://45.80.70.116:5000/api/v1/user/login',
        {
          body: JSON.stringify({
            phone: '+998' + phone,
            password: password,
          }),
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
        },
      );
      console.log(response, 'Response');
      if (response.status === successStatus) {
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
