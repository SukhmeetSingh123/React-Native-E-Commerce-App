import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
    name:'wishlist',
    initialState:{
        data:[],
        isLoading:false,
    },

    reducers:{
         addWishListItem (state,action) {
            let tempData =state.data;
            tempData.push(action.payload);
            state.data=tempData
        }
    }
});

export const {addWishListItem}=WishListSlice.actions;
export default WishListSlice.reducer;