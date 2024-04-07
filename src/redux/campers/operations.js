import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, limit, valueFilter }, thunkAPI) => {
    let url = '';
    if (valueFilter !== "") {
      console.log(valueFilter);
      url = `https://65f9f6633909a9a65b19b836.mockapi.io/campers?location=${valueFilter}`
    } else {
      url = 'https://65f9f6633909a9a65b19b836.mockapi.io/campers'
    }

    try {
      const { data } = await axios.get(url, { params: { page, limit } });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
