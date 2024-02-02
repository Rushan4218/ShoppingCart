import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "userInput",
    initialState: {
        value: ""
    },
    reducers: {
        updateValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { updateValue } = inputSlice.actions;
export default inputSlice.reducer;