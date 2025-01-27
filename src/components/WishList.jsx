import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

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
                <h4 style={{textAlign: 'center'}}>My Wishlist</h4>
                <span style={{fontWeight: "bolder", fontSize: "1.2em"}}>
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

    useEffect(() => {
        localStorage.setItem('wishes', JSON.stringify(wishList));
    }, [wishList])

    const Modal = () => {
       return (
       <div className="wishListModal">
           <p style={{backgroundColor: "black", width: "auto", paddingLeft: ".5em", paddingRight:".5em", cursor: "pointer", textAlign: "center"}}
           onClick={ () => setOpenModal(false)}>x</p>
           <GuestWishes style={{padding: "2em"}} />
       </div>
       )
    }

    return (
        <>
            < GuestWishes/>
            <h5 style={{textAlign: "center", margin: "5px", marginBottom: "2em"}}><a href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Find Sailor Moon Merchandise on Amazon</a></h5>

            <h2>Wishlist Items</h2>
            <div style={{border: "5px solid white", padding: "1em"}} className="pickListWrapper">
             { sailorMoonItems.data && 
                sailorMoonItems.data.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid white", boxShadow: "-5px -5px 10px",
                        display: "flex", flexDirection: "column", alignItems: "center"}}
                    className="pickList">

                    <Link to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>
                    <p style={{textAlign: "center"}}>{star.title}</p><p style={{textAlign: "center"}}><img  src={star.images.jpg.image_url}/></p></Link>

                    <span className="score">Score: {star.score}</span>
                    <form className="addForm"
                        onSubmit={ (event) => {
                            event.preventDefault();
                        
                            const found = wishList.find(existing => {
                                if (existing == star.title){
                                    return true
                                }
                                })

                         

                            if (!found) {
                            setWishList([...wishList, newWish])
                            setOpenModal(true)
                            } else {
                                alert('You have already added this.')
                              return;
                            }
                            
                        }}>
                        <button
                            onClick={(event) => {
                                    setNewWish(star.title)
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