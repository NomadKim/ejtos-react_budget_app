import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    const [currency, setCurrency] = useState('$');

    const changeCurrency = (curren)=>{
        console.log(curren);
        switch(curren){
            case "dollar": setCurrency("$");
            break;
            case "pound" : setCurrency("£");
            break;
            case "euro" : setCurrency("€");
            break;
            case "ruppee" : setCurrency("₹");
            break;
            default: setCurrency("$");
        }

    } 
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}   
                    <div className="col-sm"><Budget currensy ={currency}/> </div>    

                        {/* Add Remaining component here under */}  
                    <div className='col-sm'>
                        <Remaining currensy ={currency}/>
                    </div>      

                        {/* Add ExpenseTotal component here under */}    
                    <div className='col-sm'>
                        <ExpenseTotal currensy ={currency}/>
                    </div>  
                    <div className='col-sm'>
                        <Currency changeCurrency = {changeCurrency} />
                    </div>  
                </div>
                    
                       
                        {/* Add ExpenseList component here under */} 
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'> 
                        <div className='col-sm'>
                            <ExpenseList currensy ={currency}/>
                        </div>  
                    </div>     

                        {/* Add ExpenseItem component here under */}  
                    <h3 className='mt-3'>Change allocation</h3>
                        <div className='row mt-3'>      

                        {/* Add AllocationForm component here under */}   
                    <div className='col-sm'>
                        <AllocationForm currensy ={currency}/>
                    </div>     

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
