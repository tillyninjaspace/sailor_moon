import React from 'react';
import {useParams} from 'react-router-dom';


//Reviews End Point example to fetch
// https://api.jikan.moe/v3/anime/532/reviews
//Full synopsis can be found https://api.jikan.moe/v3/anime/532

const Star = ({sailorMoonList}) => {

    const {starId} = useParams()
    const star = sailorMoonList.find(item => Number(starId) === item.mal_id)
    console.log("what is the current star", star)

    return (
        <div className="singleCard">
            { star && 
            <>
            <h2>Star Card</h2>
            <h3 style={{paddingBottom: "10px"}}>{star.title}</h3>
            <img src={star.image_url}/>
            <p>Number of Episodes: {star.episodes}</p>
            <p>Rated: {star.rated}</p>
            <p className="score" style={{paddingLeft: "3px", paddingRight: "3px"}}> Review Score: {star.score}</p>
            <p>Synopsis: {star.synopsis}</p>
            <p>Type: {star.type}</p>

            <p style={{textAlign: "center"}} className="nav"><a style={{textDecoration: "none"}} href={star.url} target="_blank">See Full Synopsis</a></p>

            
            <p style={{textAlign: "center"}} className="nav"><a style={{textDecoration: "none"}} href=
            "https://www.amazon.com/s?k=sailor+moon+movie+and+shows&amp;ref=nb_sb_noss&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=4032d4e98546b34ef7ff608b3f8e8405&camp=1789&creative=9325"
            target="_blank">Compare Sailor Moon DVDs and Blu-rays like {star.title} on Amazon</a></p>
            </>
            }
        </div>
    )
};

export default Star;

