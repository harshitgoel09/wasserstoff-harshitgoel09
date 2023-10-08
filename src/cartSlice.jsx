import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartStore',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, actions) => {
            state.items.push(actions.payload)
        },
        removeItem: (state, actions) =>{
            const itemToRemove = actions.payload;
            
            const indexToRemove = state.items.findIndex((val)=>{
                return val.item_id === itemToRemove
            });

            // If an item with the specified ID is found, remove it
            if (indexToRemove !== -1) {
              state.items.splice(indexToRemove, 1);
            }
        }
    }
});

export const{addItem,removeItem } = cartSlice.actions;
export default cartSlice.reducer;