//all the logic for data layer goes
export const initialState = {
    basket : [],
    user: null
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state,action) => {
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic  for adding items to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic for removing items from basket

            //cloned the basket
            let newBasket = [...state.basket]
            
            //we check to see if the product exists
            const index  = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );
            //checking if item exists or not in basket
            if (index >= 0){
                //item is in basket, remove it
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not present in basket`)
             }
            //change the basket to the new cloned and spliced basket
            return {
                ...state,
                basket: newBasket 
            }
        default:
            return state;
    }
}

export default reducer;