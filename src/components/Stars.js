import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

import {useSelector} from 'react-redux';

const Stars = () => {

    const sailorMoonReduxData = useSelector(state => state.data.item)
    const sailorMoonList = sailorMoonReduxData.results
    
    return (
        <>
        <h2 style={{ marginBottom: "10px"}}>Sailor Moon TV (Manga) and Film Scores</h2>
        <div className="starList">
            {   sailorMoonList && 
                sailorMoonList.map((star) => <div className="starCard" key={star.mal_id}>
                    <div style={{textAlign: "center"}}>
                    <Link to={"/sailor-moon-reviews/" + star.mal_id} style={{textDecoration: "none"}}>{star.title}
                    <img src={star.image_url}/></Link>
                    </div>
                    <p className="starInfo"><span>Type: {star.type}</span><span className="score">Score: {star.score}</span></p>

                    { star.episodes != 1 ? 
                    <p>Number of Episodes: {star.episodes}</p>
                     : ''
                    }
                    <p>Rated: {star.rated}</p>
                    <Link to={"/sailor-moon-reviews/" + star.mal_id} className="starLink"><span style={{marginLeft: "1.1em"}}>See Star Card Details</span></Link>
                </div>
                )
            }
        </div>
        </>
    )
};

export default Stars;