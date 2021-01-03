import React from 'react';
import {NavLink} from 'react-router-dom';

const Stars = ({sailorMoonList}) => {
    
    return (
        <>
        <h2 style={{backgroundColor: "black", marginBottom: "10px"}}>Sailor Moon Shows, Films & Review Scores</h2>
        <div className="starList">
            {
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
                    <NavLink to={"/sailor-moon-reviews/" + star.mal_id} className="nav" style={{textAlign: "center"}} >See Star Card</NavLink>
                </div>
                )
            }
        </div>
        </>
    )
};

export default Stars;