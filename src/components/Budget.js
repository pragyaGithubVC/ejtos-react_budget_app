import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span><input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}>
                        </input>
        </div>
    );
};
export default Budget;