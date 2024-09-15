import { ADD_CARD, ADD_TO_WISHLIST, DELETE_CARD, EDIT_CARD, REMOVE_FROM_WISHLIST } from "./actionTypes"



export const deleteCard =(CardID) => {
    return {
        type : DELETE_CARD,
        payload : CardID,
    };

};



export const addCard =(newCard) => {
    return {
        type : ADD_CARD,
        payload : newCard,
    };

};



export const editCard =(editedCard) => {
    return {
        type : EDIT_CARD,
        payload : editedCard,
    };

};


export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    };
};

export const removeFromWishlist = (productId) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: productId
    };
};