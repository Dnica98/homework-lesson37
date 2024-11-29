import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByValue, decrement, decrementByValue } from './counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
   
    return(
        <div>
            Counter: {count}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByValue(5))}>IncrementByValue</button>
            <button onClick={() => dispatch(decrementByValue(5))}>DecrementByValue</button>
        </div>
    )
}

export default Counter;