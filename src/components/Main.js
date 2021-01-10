// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from '../actions/fetchData';

// //trying to connect

// import { connect } from 'react-redux'
// //end of connect


// const Main = () => {
//     const dataList = useSelector(state => state.data.item);
//     const dispatch = useDispatch()

//     useEffect( () => {
//         dispatch(fetchProducts())
//     }, []);

//     console.log("data List", dataList)
//         return (
//             <div>
//                 <h2>I'm Main.</h2>
//                 {
//                     dataList.results.map((star) => 
//                     <div key={star.mal_id} style={{border: "1px solid black"}}>
//                     <p>{star.title} Rated: {star.score}</p>
//                     </div>
//                     )
//                 }
//             </div>
//         )
// }


// // const mapStateToProps = state => ({
// //     item: state.data.item,
// //   });
  
// export default 
// // connect(
// //     mapStateToProps
// //   )(Main)
// Main;

//Take 2 Below

// import { connect } from "react-redux";

// const Main = 
// () => {
// // ... UI component implementation

// const mapStateToProps = state => {
//   const { title, rated } = state.data.item || {};
//   const todos =
//     allIds && allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };

// };

// export default connect(mapStateToProps)(Main)


//Take 3
import React from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux'

const Main = () => {

    const sailorMoonItems = useSelector(state => state.data.item)

    return (
      <>
        <p style={{padding: "1em", textAlign: "center"}}>Welcome to Pretty Sailor Scouts! This website is built by a Sailor Moon fan using React. Enjoy, and a picture card section is coming!</p>
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
              )
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
              )
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
              )
            } 
            </section>
        </div>
      </>  
    )
}

export default Main;