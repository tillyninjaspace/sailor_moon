import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../actions/fetchData';


const Main = () => {
    const dataList = useSelector(state => state.data.item);
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchProducts())
    }, []);

    console.log("data List", dataList)
        return (
            <div>
                {/* <h2>I'm Main.</h2> */}
            </div>
        )
}

  
export default Main;