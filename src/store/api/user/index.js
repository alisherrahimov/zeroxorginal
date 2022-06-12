import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {successStatus, URL} from '../../../screens/constants';
const UserSearch = createAsyncThunk(
  'get/user/search',
  async (state, {rejectWithValue}) => {
    const {id, birthday, type, stir} = state;
    if (type == 1) {
      try {
        const {data, status} = await axios.post(URL + '/user/search', {
          id: id,
          birthday,
          type,
        });
        if (status == successStatus) {
          return {
            user: data,
          };
        }
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    } else {
      try {
        const {data, status} = await axios.post(URL + '/user/search', {
          id: id,
          stir,
          type,
        });
        if (status == successStatus) {
          return {
            user: data,
          };
        }
      } catch (error) {
        rejectWithValue(error.response.data);
      }
    }
  },
);

export {UserSearch};
