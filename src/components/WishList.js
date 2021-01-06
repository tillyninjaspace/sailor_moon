import React from 'react';
import {useSelector} from 'react-redux'

const WishList = () => {
    const sailorMoonItems = useSelector(state => state.data.item)
    console.log("Sailor Moon ITEMS for Wish List", sailorMoonItems)
    return (
        <>
            <h2>My Wishlist (still under development...)</h2>
            <h3 style={{textAlign: "center", marginBottom: "5px"}}><a href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Find Sailor Moon Merchandise on Amazon</a></h3>
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