import { createSlice } from '@reduxjs/toolkit'

// Load items from local storage or default to an empty array
const loadItemsFromLocalStorage = () => {
    try {
        const storedItems = localStorage.getItem('cartItems');
        return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
        console.error('Error loading items from local storage:', error);
        return [];
    }
};

const saveItemsToLocalStorage = (items) => {
    try {
        localStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
        console.error('Error saving items to local storage:', error);
    }
};

const cartSlice = createSlice({
    name: 'cartStore',
    initialState: {
        items: loadItemsFromLocalStorage(),
    },
    reducers: {
        addItem: (state, actions) => {
            state.items.push(actions.payload);
            saveItemsToLocalStorage(state.items);
        },
        removeItem: (state, actions) => {
            const itemToRemove = actions.payload;

            const indexToRemove = state.items.findIndex((val) => {
                return val.item_id === itemToRemove
            });

            // If an item with the specified ID is found, remove it
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
                saveItemsToLocalStorage(state.items);
            }
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;