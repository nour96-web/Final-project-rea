
import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const wishlistItems = useSelector(state => state.wishlist.wishlistItems);

    if (wishlistItems.length === 0) {
        return <h2>Your wishlist is empty!</h2>;
    }

    return (
        <div>
            <h2>My Wishlist</h2>
            <ul>
                {wishlistItems.map((el) => (
                    <li key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
