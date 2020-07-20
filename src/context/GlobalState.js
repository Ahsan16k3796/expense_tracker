import React, {createContext,useReducer} from 'react';
import AppReducer from './Appreducer';

//create initila state 

const initialState={
    transactions:[
        {id: 1, description:"Income 1", transactionAmount:10000},
        {id: 2, description:"Expense 1", transactionAmount:-1000},
        {id: 3, description:"Income 2", transactionAmount:1000},
        {id: 4, description:"Expense 2", transactionAmount:-500}        
    ]
}

// create the global contxt 

export const GlobalContxt =createContext(initialState);

//Create a provider for the Global Contexting 
export const GlobalProvider= ({children}) =>{
    
    const [state]=useReducer(AppReducer,initialState);


    return(
        <GlobalContxt.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContxt.Provider>

    )
}