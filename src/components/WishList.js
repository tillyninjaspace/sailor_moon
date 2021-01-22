import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
// import { fetchProducts } from '../actions/fetchData';

const getCurrentWishes = () => {
    return JSON.parse(localStorage.getItem('wishes'));
  };

const WishList = () => {
    const sailorMoonItems = useSelector(state => state.data.item)

    const [ wishList, setWishList ] = useState( getCurrentWishes() || []);
    const [ newWish, setNewWish ] = useState([]);

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
            <div style={{border: "5px solid white", padding: "1em"}} className="pickListWrapper">
             { sailorMoonItems.results && 
                sailorMoonItems.results.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid white", display: "flex", flexDirection: "column", alignItems: "center"}}
                    className="pickList">

                    <NavLink to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>
                    <p style={{textAlign: "center"}}>{star.title}</p><p style={{textAlign: "center"}}><img  src={star.image_url}/></p></NavLink>

                    <span className="score">Score: {star.score}</span>
                    <form className="addForm"
                        onSubmit={ (event) => {
                            event.preventDefault();
                            setWishList([...wishList, newWish])
                        }}>
                        <button
                            onClick={(event) => setNewWish(star.title)}>Add to Wishlist</button>
                    </form>
                    </div>
                )
             
            }
            </div>
        </>
    )
};

export default WishList;