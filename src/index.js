import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import Footer from './components/Footer'
import Stars from './components/Stars'
import Contact from './components/Contact'
import Star from './components/Star'

const App = () => {
    const [ sailorMoonList, setSailorMoonList ] = useState([])

    async function getSailorMoon() {
        // const URL = `https://api.jikan.moe/v3/search/anime?q=sailormoon`
        const URL =`https://api.jikan.moe/v3/search/anime?q=sailormoon&limit=17`
        try {
            const results = await fetch(URL)
            console.log("Sailor Moon results", results)
            const resultsJson = await results.json()
            console.log("What is Sailor Moon json", resultsJson)
            console.log("What are the list of INSIDE STARS results", resultsJson.results)
            return resultsJson.results
        } catch (error) {
            console.error(error)
        }
    };
    
    useEffect( () => {
        getSailorMoon()
        .then(listings => {
            setSailorMoonList(listings)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    

    return (
        <div className="headerDiv">
            <p style={{textAlign: "center", maxHeight: "200px"}}><img src="/sailormoonfanslogo.png" /></p>
            <h1>Pretty Sailor Scouts</h1>
            <div className="navWrapper">
            <NavLink to="/sailor-moon-reviews" className="nav">Sailor Moon TV and Movie Scores</NavLink>
            <a className="nav" href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Sailor Moon Merchandise</a>
            <NavLink to="/contact" className="nav">Contact</NavLink>
            </div>
            <Route exact path="/sailor-moon-reviews"><Stars sailorMoonList={sailorMoonList}/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route path="/sailor-moon-reviews/:starId"><Star sailorMoonList={sailorMoonList}/></Route>
            <Footer />
        </div>
    )
};

ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
);