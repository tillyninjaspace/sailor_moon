import React from 'react';
import {useSelector} from 'react-redux'

const WishList = () => {
    const sailorMoonItems = useSelector(state => state.data.item)
    console.log("Sailor Moon ITEMS for Wish List", sailorMoonItems)
    return (
        <>
            <h2>My Wishlist</h2>
            {/* <div style={{border: "1px solid black"}}> */}
             { 
                sailorMoonItems.results.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid black"}}>
                    <p>{star.title} Rated: {star.score}</p>
                    </div>
                )
            }
            {/* </div> */}
        </>
    )
};

export default WishList;