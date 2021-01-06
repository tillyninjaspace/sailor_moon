import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../actions/fetchData';


const Main = () => {
    const dataList = useSelector(state => state.data.item);
    const dispatch = useDispatch()

    useEffect( () => {
        // fetchProducts()
        dispatch(fetchProducts())
    }, []);

    console.log("data List", dataList)
        return (
            <div>
                {/* <h2>I'm Main.</h2> */}
            </div>
        )
}

// const mapStateToProps = state => ({
//     item: state.products.item,
//     loading: state.products.loading,
//     error: state.products.error
//   });

  
export default Main;
// connect(mapStateToProps)
// (Main);