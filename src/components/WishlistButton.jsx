import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlist/wishlistActions";

const WishlistButton = ({ el }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const isInWishlist = wishlistItems.find((el) => el.id === el.id);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(el));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(el.id));
  };

  return (
    <div>
      {isInWishlist ? (
        <button onClick={handleRemoveFromWishlist}>Remove from Wishlist</button>
      ) : (
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      )}
    </div>
  );
};

export default WishlistButton;
