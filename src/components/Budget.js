import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch } = useContext(AppContext);
    const setBudget = (bud) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: bud
        });
    }
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const[totalBud, setBud] = useState(totalExpenses);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {props.currensy}<input type="number" value={totalBud} min={totalExpenses}
            step="10" onChange={(e)=>{
                if(e.target.value<totalExpenses){
                    alert("You cannot reduce the budget value lower than spending");
                }
                setBud(e.target.value);
                setBudget(e.target.value);
                }}></input></span>
        </div>
    );
};
export default Budget;