//setup data layer
//we need this to track the basket
import { createContext,useContext,useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//build a provider
// here children is the App component we are passing
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we will use it in the components
export const useStateValue = () => useContext(StateContext);