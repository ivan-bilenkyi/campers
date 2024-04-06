import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const camperSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(getAll.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                action.payload.forEach(newItem => {
                    if (!state.items.find(item => item._id === newItem._id)) {
                        state.items.push(newItem);
                    }
                });
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            })
    },
});

export const camperReducer = camperSlice.reducer;