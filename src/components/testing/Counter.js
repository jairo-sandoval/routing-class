import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector((store) => store.count)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({type: '@increment/count'})
    }
    
    console.log(counter)
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;