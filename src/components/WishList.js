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

            <div style={{textAlign: "center"}}>
                <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B08CBQJ2K9&asins=B08CBQJ2K9&linkId=ae54a4330f344f236fd05b95ea0810da&show_border=true&link_opens_in_new_window=true"></iframe>
                <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B08L9RQ7FW&asins=B08L9RQ7FW&linkId=2dfdf6c48d610de18681125cb49e9309&show_border=true&link_opens_in_new_window=true"></iframe>
                <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B093VJ3JXQ&asins=B093VJ3JXQ&linkId=396b15df06ec9ff5fa012e9d2d538847&show_border=true&link_opens_in_new_window=true"></iframe>
                <iframe style={{"width":"120px", "height":"240px", "marginWidth":"0"}} src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=sailormoon00e-20&language=en_US&marketplace=amazon&region=US&placement=B09G69F68M&asins=B09G69F68M&linkId=27d14c1e9a4ac82307c15b0f08fbeff6&show_border=true&link_opens_in_new_window=true"></iframe>
            </div>

            <h5 style={{textAlign: "center", margin: "5px", marginBottom: "2em"}}><a href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Find Sailor Moon Merchandise on Amazon</a></h5>

            <h2>Wishlist Items</h2>
            <div style={{border: "5px solid white", padding: "1em"}} className="pickListWrapper">
             { sailorMoonItems.results && 
                sailorMoonItems.results.map((star) => 
                    <div key={star.mal_id} style={{border: "1px solid white", boxShadow: "-5px -5px 10px",
                        display: "flex", flexDirection: "column", alignItems: "center"}}
                    className="pickList">

                    <Link to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>
                    <p style={{textAlign: "center"}}>{star.title}</p><p style={{textAlign: "center"}}><img  src={star.image_url}/></p></Link>

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