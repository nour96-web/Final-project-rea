import { combineReducers } from "redux";

import {
  ADD_CARD,
  ADD_TO_WISHLIST,
  DELETE_CARD,
  EDIT_CARD,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";

const initState = {
  products: [
    {
      id: Math.random(),
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg",
      name: "Pizza",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sem neque, id elementum dolor cursus et.",
      price: 22,
    },
    {
      id: Math.random(),
      imgUrl:
        "https://img.freepik.com/photos-premium/gyro-touche-coriandre-delicieux-plat-traditionnel-gyro-photographie-alimentaire_1020697-686573.jpg?w=740",
      name: "Pita",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sem neque, id elementum dolor cursus et.",
      price: 8,
    },
    {
      id: Math.random(),
      imgUrl:
        "https://cdn.pixabay.com/photo/2024/05/06/17/02/burgers-8743798_960_720.jpg",
      name: "Burger",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sem neque, id elementum dolor cursus et.",
      price: 10,
    },
    {
      id: Math.random(),
      imgUrl:
        "https://img.freepik.com/photos-gratuite/penne_1339-937.jpg?t=st=1726007770~exp=1726011370~hmac=c48777b49be41d74b26e5ea783615993f74dfa1aebd716e4d7c24c82c9350a6a&w=740",
      name: "Spaghetti",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sem neque, id elementum dolor cursus et.",
      price: 15,
    },
  ],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELETE_CARD:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== payload),
      };
    case ADD_CARD:
      return { ...state, products: [...state.products, payload] };
    case EDIT_CARD:
      return {
        ...state,
        products: state.products.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((el) => el.id !== payload),
      };

    default:
      return state;
  }
};
export default reducer;
