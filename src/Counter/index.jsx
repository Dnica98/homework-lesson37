import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByValue, decrement } from './counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
   
    return(
        <div>
            Counter: {count}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByValue())}>Decrement</button>
        </div>
    )
}

export default Counter;