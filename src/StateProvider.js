import React,{ createContext, useContext, useReducer} from 'react'

// create data layer//
export const StateContext= createContext();


// wrap the app and provide the data layer
export const StateProvider = ({ reducer , initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// send information from data layer
export const useStateValue =() => useContext(StateContext)