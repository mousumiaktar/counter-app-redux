import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const MulltiplicationView = () => {
    const multiplication = useSelector(state=>state.multiplication.multiplicationCount);
    return (
        <div>
            <h1>Multiplication</h1>
            <h3>Counter: {multiplication}</h3>
        </div>
    );
};

export default MulltiplicationView;