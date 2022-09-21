import { createSlice } from '@reduxjs/toolkit'

const MultiplicationSlice = createSlice({
    name:"multiplication",
    initialState:{
        multiplicationCount: 1,
    },
    reducers:{
        increment:(state)=>{
            state.multiplicationCount = state.multiplicationCount * 5;
        },
        decrement:(state)=>{
            state.multiplicationCount = state.multiplicationCount - 1;
        },
        reset:(state)=>{
            state.multiplicationCount = 1;
        }
    }
});
export const {increment, decrement, reset} = MultiplicationSlice.actions;

export default MultiplicationSlice.reducer;