import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAll = createAsyncThunk(
    'campers/fetchAll',
    async (config, thunkAPI) => {
        try {
            const { data } = await axios.get('https://65f9f6633909a9a65b19b836.mockapi.io/campers', { params: config });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
