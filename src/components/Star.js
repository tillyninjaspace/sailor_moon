import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Loading from './Loading'

//Reviews End Point example to fetch
// https://api.jikan.moe/v3/anime/532/reviews
//Full synopsis can be found https://api.jikan.moe/v3/anime/532

const Star = ({sailorMoonList}) => {
    const [ star, setStar ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const BASE_STAR_URL = 'https://api.jikan.moe/v3/anime/'

    const {starId} = useParams()

    async function getStarCard() {
        const STAR_URL = BASE_STAR_URL + starId
        try {
            setLoading(true)
            const response = await fetch(STAR_URL)
            const result = await response.json()
            return result
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        getStarCard()
       
        .then(card => {
            setStar(card)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return (
        <div className="singleCard" style={{marginTop: "2em"}}>
            { star && 
            <>
            <h2>Star Card</h2>
            <h3 style={{paddingBottom: "10px"}}>{star.title}</h3>
            <img src={star.image_url}/>
            { star.episodes != 1 ? 
                    <p>Number of Episodes: {star.episodes}</p>
                     : ''
                    }
            <p>Rating: {star.rating}</p>
            <p className="score" style={{paddingLeft: "3px", paddingRight: "3px"}}> {star.score > 0 ? `Review Score: ${star.score}` : `Score: No Score Available/Not Aired Yet` }</p>
            <p>Synopsis: {star.synopsis}</p>
            <p>Type: {star.type}</p>
            <p>Air Date: {star.aired.string} </p>

            
            <p style={{textAlign: "center"}} className="nav"><a style={{textDecoration: "none"}} href=
            "https://www.amazon.com/s?k=sailor+moon+movie+and+shows&amp;ref=nb_sb_noss&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=4032d4e98546b34ef7ff608b3f8e8405&camp=1789&creative=9325"
            target="_blank">Find Sailor Moon items like {star.title} on Amazon</a></p>

            <p style={{textAlign: "center"}} className="nav"><a style={{textDecoration: "none"}} href="/sailor-moon-reviews">See All Sailor Moon Manga (TV) and Film Scores</a></p>
            </>
            }

            { loading? <Loading /> : ''}
        </div>
    )
};

export default Star;