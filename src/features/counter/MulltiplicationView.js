import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset} from './MultiplicationSlice'

const MulltiplicationView = () => {
    const multiplication = useSelector(state=>state.multiplication.multiplicationCount);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Multiplication</h1>
            <h3>Counter: {multiplication}</h3>
            <button onClick={()=>{dispatch(increment())}}>multiplication by five</button>
            <button onClick={()=>{dispatch(decrement())}}>decrement by one</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
        </div>
    );
};

export default MulltiplicationView;