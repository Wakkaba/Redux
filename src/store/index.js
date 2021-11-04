import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter";
import authSlice from "./auth";

// export const INCREMENT = 'inc'

// const counterReducer = (state = initState, action) => {
//   if (action.type === 'inc') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }
// if (action.type === 'incByFive') {
//   return {
//     count: state.count + action.payload,
//     showCounter: state.showCounter
//
//   }
// }
// if (action.type === 'dec') {
//   return {
//     count: state.count - 1,
//     showCounter: state.showCounter
//   }
// }
//
// if (action.type === 'toggle') {
//   return {
//     showCounter: !state.showCounter,
//     count: state.count
// }
// }
//   return state
// }

// const store = createStore(counterReducer)


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer }
  // reducer: counterSlice.reducer
})

export default store;