import React, {createContext,useReducer} from 'react';
import AppReducer from './Appreducer';

//create initila state 

const initialState={
    transactions:[  ]
}

// create the global contxt 

export const GlobalContxt =createContext(initialState);

//Create a provider for the Global Contexting 
export const GlobalProvider= ({children}) =>{
    
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //Actions

    function deleteTransaction(id){
        dispatch({type: 'DELETE_TRANSACTION',
        payload : id
    });
    }

    function AddTransaction(transaction){
        dispatch({
        type: 'ADD_TRANSACTION',
        payload : transaction
    });
    }
    
    
    return(
        <GlobalContxt.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                AddTransaction
            }
        }>
            {children}
        </GlobalContxt.Provider>

    )
}