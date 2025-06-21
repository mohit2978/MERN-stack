import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log(state.items);
            console.log("Items array:", [...state.items]);

        },
        removeItem: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(state.items);
            return { items: [] };
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;