import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        list: [],
    },
    reducers: {
        handleAdd: (state, action) => {
            state.list = state.list.concat(action.payload);
        },
        handleDelete: (state, action) => {
            state.list = state.list.filter((task) => task !== action.payload);
        },
    },
});

export const { handleAdd, handleDelete } = taskSlice.actions;

export default taskSlice.reducer;
