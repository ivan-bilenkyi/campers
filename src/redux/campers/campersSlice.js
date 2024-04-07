import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './operations';

const camperSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        filter: '',
        isLoading: false,
        error: null,
    },

    reducers: {
        updateFilter: (state, action) => {
            state.items = [];
            state.filter = action.payload;
        }
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
export const { updateFilter } = camperSlice.actions;