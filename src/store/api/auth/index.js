import {createAsyncThunk} from '@reduxjs/toolkit';
import {createStatus, successStatus, URL} from '../../../screens/constants';
import axios from 'axios';

const CreatePasswordSendApi = createAsyncThunk(
  'user/phone/createPassword',
  async (state, {fulfillWithValue, rejectWithValue}) => {
    const {phone, password, code} = state;
    try {
      const {data, status} = await axios.post(
        'http://45.80.70.116:5000/api/v1/user/register',
        {
          phone: '+998' + phone,
          password: password.password,
          code: code,
          step: 3,
          type: 2,
        },
      );
      if (status === successStatus) {
        return data;
      } else {
        return {error: data};
      }
    } catch (error) {
      return error.response;
    }
  },
);
const LoginWithPhoneSendPasswordApi = createAsyncThunk(
  'user/phone/password',
  async state => {
    const {phone, password} = state;
    try {
      const {data, status} = await axios.post(
        'http://45.80.70.116:5000/api/v1/user/login',
        {
          phone: '+998' + phone,
          password: password,
        },
      );
      console.log(data, 'Response');
      if (status === successStatus) {
        return data;
      } else {
        return {error: data};
      }
    } catch (error) {
      return error.response;
    }
  },
);
const SmsCheckCodeApi = createAsyncThunk('user/sms/check/code', async state => {
  const {phone, code} = state;
  try {
    const {data, status} = await axios.post(URL + '/user/register', {
      phone: '+998' + phone,
      code: code,
      type: 2,
      step: 2,
    });
    if (status === successStatus) {
      return data;
    } else {
      return {error: data};
    }
  } catch (error) {
    return error.response;
  }
});
const UserDataPostApi = createAsyncThunk('user/register', async number => {
  try {
    const response = await axios.post(URL + '/user/register', {
      phone: '+998' + number,
      type: 2,
      step: 1,
    });
    if (response.status === createStatus) {
      return response.data;
    } else {
      return {error: response.data};
    }
  } catch (error) {
    return {error: error.response};
  }
});

export {
  CreatePasswordSendApi,
  LoginWithPhoneSendPasswordApi,
  SmsCheckCodeApi,
  UserDataPostApi,
};
