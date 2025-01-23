import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom'
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import Footer from './components/Footer'
import Stars from './components/Stars'
import Contact from './components/Contact'
import Star from './components/Star'
import Main from './components/Main'
import WishList from './components/WishList'
import Loading from './components/Loading'

import {createStore,

        applyMiddleware
        } from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';     
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from './actions/fetchData';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(
    allReducers,
    composedEnhancer
    )


const App = () => {
    const [ initialLoading, setInitialLoading ] = useState(false)
    const dispatch = useDispatch()

    useEffect( () => {
            setInitialLoading(true)
        try { 
           dispatch(fetchProducts())
        } catch {
            console.error(error)
        } finally {
            setInitialLoading(false)
        }
    }, []);   


//NOTE TO Tilly on Feb 12, 2021 >> not sure about keeping this
    // useEffect(() => {
    //         const timer = setTimeout(() =>  setInitialLoading(false), 1000);
    //         return () => clearTimeout(timer);
    // }, [setInitialLoading])
//end NOTE

//Original Fetch
    const [ sailorMoonList, setSailorMoonList ] = useState([])
    async function getSailorMoon() {
        const URL =`https://api.jikan.moe/v4/anime?q=sailor%20moon&sfw`
        try {
            const results = await fetch(URL)
            const resultsJson = await results.json()
            return resultsJson.data
        } catch (error) {
            console.error(error)
        }
    };
    
    useEffect( () => {
        getSailorMoon()
        .then(listings => {
            setInitialLoading(true)
            setSailorMoonList(listings)
        })
        .catch(error => {
            console.log(error)
        })
        .then( () => {
            setInitialLoading(false)
        })
    }, []);
//end of Original Fetch    

    return (
       
        <div className="headerDiv">
            <p style={{textAlign: "center", maxHeight: "160px"}}><img src="/sailormoonprettyscoutslogo.png" /></p>
            <h1>Pretty Sailor Scouts</h1>
            <div className="navWrapper">
            <NavLink to="/" className="nav">Home</NavLink>
            <NavLink to="/sailor-moon-reviews" className="nav">Sailor Moon Scores</NavLink>
            <NavLink to="/wishlist" className="nav">My Wishlist</NavLink>
            
            </div>
            { initialLoading? <Loading /> : ''}
            <Route exact path="/"><Main /></Route>
            <Route exact path="/sailor-moon-reviews"><Stars/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route exact path="/wishlist"><WishList/></Route>
            <Route path="/sailor-moon-reviews/:starId"><Star sailorMoonList={sailorMoonList}/></Route>
            <Footer />
        </div>
       
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <Router>

    <App />

    </Router>
    </Provider>
);

//Provider above is for REDUX in the render