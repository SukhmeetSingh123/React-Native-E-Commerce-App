import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        data:[],
        isLoading:false,
    },

    reducers:{
         addCartItem (state,action) {
            let tempData =state.data;
            let isItemExist=false;
            tempData.map(item=>{
                if(item.id==action.payload.id){
                    isItemExist=true;
                    item.qty=item.qty+1;
                }
            })
            
            if(!isItemExist){
                tempData.push(action.payload);
            }
            state.data=tempData
        },

         reduceCartItem (state,action) {
            let tempData =state.data;
            tempData.map(item=>{
                if(item.id==action.payload.id){
                        item.qty=item.qty-1;
                }
            })
            state.data=tempData
        },

         removeCartItem (state,action) {
            let tempData =state.data;
           tempData.splice(action.payload,1);
            state.data=tempData;
        },
    }
});

export const {addCartItem,reduceCartItem,removeCartItem}=CartSlice.actions;
export default CartSlice.reducer;