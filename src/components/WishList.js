import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { fetchProducts } from '../actions/fetchData';

//localStorage
  
const getCurrentWishes = () => {
    return JSON.parse(localStorage.getItem('wishes'));
  };

//end of localStorage

const WishList = () => {
    const sailorMoonItems = useSelector(state => state.data.item)
    console.log("Sailor Moon ITEMS for Wish List", sailorMoonItems)

    //Testing with guest List
    const [ wishList, setWishList ] = useState( getCurrentWishes() || []);
    const [ newWish, setNewWish ] = useState([]);

    console.log("Wish List:", wishList, "New Wish", newWish)

    const GuestWishes = () => {
        return (
          
            <div className="guestWishes">
                { wishList.length > 0 &&
                <div>
                <h3>{wishList.length} Wishes</h3>
    
                <button style={{paddingLeft: "10px", paddingRight: "10px", marginBottom: "10px"}} onClick={() => setWishList([])}>Clear List</button>
                </div>
                }
                {
                    wishList && 
                    wishList.map((wish, idx) => 
                    <div key={idx}>
                        {wish}
                    </div>
                    )
                }
                
            </div>
            
            
        )
    }
    //Testing

    // const dispatch = useDispatch()

    // useEffect( () => {
    //     dispatch(fetchProducts())
    // }, []);  

    useEffect(() => {
        localStorage.setItem('wishes', JSON.stringify(wishList));
    }, [wishList])

    return (
        <>
            <h2>My Wishlist</h2>
            < GuestWishes/>
            <h3 style={{textAlign: "center", margin: "5px"}}><a href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Find Sailor Moon Merchandise on Amazon</a></h3>
            <div style={{border: "1px solid white"}} className="pickListWrapper">
             { sailorMoonItems.results && 
                sailorMoonItems.results.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid white"}}
                    className="pickList">
                    <p>{star.title} </p>
                    <img src={star.image_url}/>
                    <span className="score">Score: {star.score}</span>
                    {/* for adding wish */}
                    <form className="addForm"
                        onSubmit={ (event) => {
                            event.preventDefault();
                            setWishList([...wishList, newWish])
                        }}
                    >
                        <button
                            onClick={(event) => setNewWish(star.title)}
                        >Add to Wishlist</button>
                    </form>
                    {/* //end of adding wish */}
                    </div>
                )
             
            }
            </div>
        </>
    )
};

export default WishList;