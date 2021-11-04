import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterActions.increment())
    // dispatch({type: 'inc'})
  }

  const incByFiveHandler = () => {
    dispatch(counterActions.increaseBy(5))
  }

  const decHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>inc</button>
        <button onClick={incByFiveHandler}>inc by 5</button>
        <button onClick={decHandler}>dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Counter extends Component {
//
//   incHandler = () => {
//     this.props.increment()
//   }
//   decHandler = () => {
//     this.props.decrement()
//   }
//
//   toggleCounterHandler = () => {
//
//   }
//
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incHandler}>inc</button>
//           <button onClick={this.decHandler}>dec</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'inc'}),
//     decrement: () => dispatch({type: 'dec'})
//   }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default Counter