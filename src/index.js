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

import Main from "./components/Main";
import WishList from './components/WishList'

// //for REDUX EXAMPLE 1: 
//     import {createStore} from 'redux';

//     ACTION
//     const increment = () => {
//         return {
//             type: 'INCREMENT'
//         }
//     };

//     const decrement =() => {
//         return {
//             type: 'DECREMENT'
//         }
//     };

//     //REDUCER
//     const counter = (state = 0, action) => {
//         switch(action.type) {
//             case 'INCREMENT':
//                 return state + 1;
        
//             case 'DECREMENT':
//                 return state - 1
//         }
//     }; 

//     let store = createStore(counter);

//     store.subscribe(()=>  console.log(store.getState()));

//     //DISPATCH
//     store.dispatch(increment());
//     store.dispatch(decrement());
//     store.dispatch(decrement());
//      //end of REDUX


    //REDUX EXAMPLE 2
    import {createStore,
        //for thunk applyMiddleware
            applyMiddleware
            } from 'redux';
    import thunk from 'redux-thunk'; 
    import { composeWithDevTools } from 'redux-devtools-extension';     
    import allReducers from './reducers';
    import { Provider } from 'react-redux';
    //for fetchData
    import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from './actions/fetchData';
//end for fetchData
    const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

    const store = createStore(
        allReducers,
        composedEnhancer
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

 
    //end of REDUX EXAMPLE 2

const App = () => {
    const [ sailorMoonList, setSailorMoonList ] = useState([])

    //redux

    const dataList = useSelector(state => state.data.item);
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchProducts())
    }, []);   

    //end of redux

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
            {/* <p>{dataList}</p> */}
            <div className="navWrapper">
            <NavLink to="/sailor-moon-reviews" className="nav">Sailor Moon TV and Movie Scores</NavLink>
            {/* <a className="nav" href="https://www.amazon.com/s?k=sailor+moon+merchandise&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325" target="_blank">Sailor Moon Merchandise</a> */}
            <NavLink to="/wishlist" className="nav">My Wishlist</NavLink>
            <NavLink to="/contact" className="nav">Contact</NavLink>
            </div>

            {/* <Main /> */}
            <Route exact path="/sailor-moon-reviews"><Stars sailorMoonList={sailorMoonList}/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route exact path="/wishlist"><WishList/></Route>
            <Route path="/sailor-moon-reviews/:starId"><Star sailorMoonList={sailorMoonList}/></Route>
          
            
            <Footer />
        </div>
       
    )
};

ReactDOM.render(
    <Provider store={store}>
    <Router>

    <App />

    </Router>
    </Provider>,
    document.getElementById('root')
);

//Provider to is above for REDUX in the render