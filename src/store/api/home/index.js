import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {successStatus, URL} from '../../../screens/constants';
import {getItem} from '../token/getToken';
const HomeApi = createAsyncThunk(
  'get/home/user',
  async (state, {rejectWithValue}) => {
    const token = await getItem('token');
    try {
      const [user_data, home_data] = await axios.all([
        axios.get(URL + '/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(URL + '/home/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);
      if (
        user_data.status === successStatus &&
        home_data.status === successStatus
      ) {
        return {
          user: user_data.data,
          home: home_data.data,
        };
      }
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export {HomeApi};
