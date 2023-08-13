import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const dispatch = useContext(AppContext);
    const changeCurrency =(val) =>{
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: val
        })
    };
    return (
        <div className='alert alert-secondary' style={{background: '#8dec8d', color:'white'}}> Currency {
      <select name="Location" id="Location" style={{background: '#8dec8d'}} onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};
export default Currency;