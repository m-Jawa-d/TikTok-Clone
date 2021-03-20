export const initialState = {
    basket: [],
    user:null,
}


export const getBasketTotal = (basket) =>
    basket?.reduce((total, i) => i.price + total, 0)


const reducer = (state, action) => {
    console.log(action);
    console.log(action.Email)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            // <state className="basket" ...state,action.item=""></state>
            break;
        case 'REMOVE_FROM_BASKET':
            let id;
            var newBasket = [...state.basket];
            const index = state.basket.findIndex((product) => product.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {

                console.warn(`Sada kuta KUTA tada kuta Tomi`)
            }
            return { ...state, basket: newBasket }
            break;
            case 'CreateAccount':
                return {
                    ...state,
                    user:action.Email,
                };
        default:
            return state;
    }
}

export default reducer;