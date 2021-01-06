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