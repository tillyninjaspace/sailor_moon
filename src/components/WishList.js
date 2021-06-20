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
    const [openModal, setOpenModal] = useState(false)

    const GuestWishes = () => {
        return (
            <div className="guestWishes">                
                { wishList.length > 0 &&
                <div>

                <span style={{fontWeight: "bolder", fontSize: "1.5em"}}>
                    {wishList.length > 1? `I have ${wishList.length} wishes ` : `${wishList.length} wish `}
                </span>
                <button 
                onClick={() => setWishList([])}>Clear List</button>
                </div>
                }
                {
                    wishList && 
                    wishList.map((wish, idx) => 
                    <div key={idx}>
                        {idx + 1 +")"} {wish}
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

    const Modal = () => {
       return (
       <div className="wishListModal">
           <GuestWishes style={{padding: "2em"}} />
       </div>
       )
    }

    return (
        <>
            <h2>My Wishlist</h2>
            < GuestWishes/>
            <h4 style={{textAlign: "center", margin: "5px"}}><a href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Find Sailor Moon Merchandise on Amazon</a></h4>
            <div style={{border: "5px solid white", padding: "1em"}} className="pickListWrapper">
             { sailorMoonItems.results && 
                sailorMoonItems.results.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid white", boxShadow: "-5px -5px 10px",
                        display: "flex", flexDirection: "column", alignItems: "center"}}
                    className="pickList">

                    <NavLink to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>
                    <p style={{textAlign: "center"}}>{star.title}</p><p style={{textAlign: "center"}}><img  src={star.image_url}/></p></NavLink>

                    <span className="score">Score: {star.score}</span>
                    <form className="addForm"
                        onSubmit={ (event) => {
                            event.preventDefault();
                            setWishList([...wishList, newWish])
                            setOpenModal(true)
                        }}>
                        <button
                            onClick={(event) => {
                            const found = wishList.find(existing => {
                                console.log(wishList)
                                if (existing == star.title){
                                    return true
                                }
                                    console.log("hello, looking", existing,
                                    "star.title:", star.title)
                                })
                                console.log("Did I find it? ", found)
                                setNewWish(star.title)
                          
                                
                            // )
                            
                            }}>Add to Wishlist</button>
                    </form>
                    </div>
                      
                )
             
            }
            </div>
            { openModal && wishList.length? <Modal /> : ''}
        </>
    )
};

export default WishList;