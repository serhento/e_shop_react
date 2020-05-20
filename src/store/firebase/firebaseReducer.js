export const firebaseReducer = (state, action) =>{
    switch (action.type) {
        case "FETCH_ITEMS":
            return ({...state, items: action.payload});
        case "FETCH_PRODUCTS":
            return ({...state, products: action.payload});
        default:
            return state;
    }
};