import {createSlice} from '@reduxjs/toolkit';
import {CreatePasswordSendApi} from '../api/auth';

const initialState = {
  error: false,
  loading: false,
  status: null,
};

const CreatePasswordReducer = createSlice({
  initialState,
  name: 'CreatePasswordReducer',
  extraReducers: builder => {
    builder.addCase(CreatePasswordSendApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreatePasswordSendApi.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = true;
        state.status = action.payload.data;
      }
      state.status = action.payload;
      state.loading = false;
    });
    builder.addCase(CreatePasswordSendApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default CreatePasswordReducer.reducer;
