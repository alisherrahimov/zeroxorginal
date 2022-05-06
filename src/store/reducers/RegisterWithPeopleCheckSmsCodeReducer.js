import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createStatus, successStatus, URL} from '../../screens/constants';
export const SmsCheckCodeApi = createAsyncThunk(
  'user/sms/check/code',
  async (phone, code) => {
    try {
      const response = await fetch(URL + '/user/register', {
        body: JSON.stringify({
          phone: '+998' + phone,
          code: code,
          type: 2,
          step: 2,
        }),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      });
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
