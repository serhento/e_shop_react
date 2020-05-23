export const firebaseReducer = (state, action) =>{
    switch (action.type) {
        case "SHOW_LOADER":
            return ({...state, loading: true});
        case "FETCH_ITEMS":
            return ({...state, items: action.payload, loading: false});
        case "FETCH_PRODUCTS":
            return ({...state, products: action.payload, loading: false});
        default:
            return state;
    }
};