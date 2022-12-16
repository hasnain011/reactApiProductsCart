const { createSlice } = require("@reduxjs/toolkit");


// actions & actionsTypes
const cartslice = createSlice({
    name: 'cart',
    initialState: [],

    // Reducers
    reducers:{
        add(state, action){
            state.push(action.payload)

        },
        remove(state, action){
            // pass the id of an product item which we want to remove
           return state.filter(item=> item.id !== action.payload )
     
        }

    }
});

export const {add, remove} = cartslice.actions;
export default cartslice.reducer;