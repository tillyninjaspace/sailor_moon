import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'

//redux
import {useSelector} from 'react-redux';
//redux

const Stars = () => {

    //redux
    const sailorMoonReduxData = useSelector(state => state.data.item)
    const sailorMoonList = sailorMoonReduxData.results
    //end of redux
    
    return (
        <>
        <h2 style={{ marginBottom: "10px"}}>Sailor Moon TV (Manga) and Film Scores</h2>
        <div className="starList">
            {   sailorMoonList && 
                sailorMoonList.map((star) => <div className="starCard" key={star.mal_id}>
                    <div style={{textAlign: "center"}}>
                    <NavLink to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>{star.title}
                    <img src={star.image_url}/></NavLink>
                    </div>
                    <p className="starInfo"><span>Type: {star.type}</span><span className="score">Score: {star.score}</span></p>

                    { star.episodes != 1 ? 
                    <p>Number of Episodes: {star.episodes}</p>
                     : ''
                    }
                    <p>Rated: {star.rated}</p>
                    <NavLink to={"/sailor-moon-reviews/" + star.mal_id} className="nav"><span style={{marginLeft: "1.1em"}}>See Star Card Details</span></NavLink>
                </div>
                )
            }
        </div>
        </>
    )
};

export default Stars;