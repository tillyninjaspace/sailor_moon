import React from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'

const Main = () => {

    const sailorMoonItems = useSelector(state => state.data.item)

    return (
      <>
        <p style={{padding: "1em", textAlign: "center"}}>Find your favorite Sailor Moon manga and films and their review scores.</p>
        <div className="main">
            <section className="movies">
            <h2>Sailor Moon Movies</h2>
            {
              sailorMoonItems.results && sailorMoonItems.results.filter((item) => {    
                return item.type == "Movie"
              }).map((movie) => 
                <div className="scroll" key={movie.mal_id}>
                    <p>{movie.type}</p>
                    <NavLink to={"/sailor-moon-reviews/" + movie.mal_id} style={{textDecoration: "none"}}>
                    <img src={movie.image_url}/>{movie.title}</NavLink>
                </div>
              ) || 
              <Spinner animation="grow" />
            }
            </section>
            <section className="tv">
                <h2>TV "manga"</h2>
            {
              sailorMoonItems.results && sailorMoonItems.results.filter((item) => {    
                return item.type == "TV"
              }).map((tv) => 
                <div className="scroll" key={tv.mal_id}>
                    <p>{tv.type}</p>
                    <NavLink to={"/sailor-moon-reviews/" + tv.mal_id} style={{textDecoration: "none"}}>
                    <img src={tv.image_url}/>{tv.title}</NavLink>
                </div>
              ) || 
              <Spinner animation="grow" />
            } 
            </section>
            <section className="notAired">
                <h2>Special "doujin"</h2>
            {
              sailorMoonItems.results && sailorMoonItems.results.filter((item) => {    
                return item.type == "OVA" || item.type == "Special"
              }).map((special) => 
                <div className="scroll" key={special.mal_id}>
                    <p>{special.type}</p>
                    <NavLink to={"/sailor-moon-reviews/" + special.mal_id} style={{textDecoration: "none"}}>
                    <img src={special.image_url}/>{special.title}</NavLink>
                </div>
              ) || 
              <Spinner animation="grow" />
            } 
            </section>
        </div>
      </>  
    )
}

export default Main;