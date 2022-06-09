import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    product:[],
    totalPrice:0,
  },
  reducers: {
    addToCart:(state,action)=>{
        const productIndex = state.product.findIndex(find=>find.id === action.payload.id)
        if(productIndex >=0){
            state.product[productIndex].cartQuantity +=1
        }else{
            const cart = {...action.payload,cartQuantity:1}
            state.product.push(cart)
        }
    },
    decrese:(state,action)=>{
        const productIndex = state.product.findIndex(find=>find.id === action.payload.id)
        if(state.product[productIndex].cartQuantity > 1){
            state.product[productIndex].cartQuantity -=1
        }else if(state.product[productIndex].cartQuantity === 1){
            const newState = state.product.filter(product=>product.id !== action.payload.id)
            state.product = newState
        }
    },

    getTotals: (state) => {
        let { total } = state.product.reduce(
          (cartTotal, cartItem) => {
            const { cartQuantity, price } = cartItem;
            let convertedPrice = Number(price.replace(/[^0-9.-]+/g, ""));
            const itemTotal = cartQuantity * convertedPrice;
  
            cartTotal.total += itemTotal;
  
            return cartTotal;
          },
          {
            total: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.totalPrice = total;
      },
  },
})

export const { addToCart,decrese,getTotals } = cartSlice.actions

export default cartSlice.reducer