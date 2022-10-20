import { createContext, useReducer } from 'react'
import { graphReducer } from './graphReducer';

export interface GraphState {
    isLoaded: boolean;
    data: any;
}

export const GraphInitialState: GraphState = {
    isLoaded: false,
    data: null
}

export interface ContextProps {
    graphState: GraphState,
    dataLoaded: () => void
}

export const GraphContext = createContext( {} as ContextProps )

export const GraphProvider = ({children}:any) => {

    const [graphState, dispatch] = useReducer( graphReducer, GraphInitialState)

    const dataLoaded = () => {
        dispatch({ type: 'dataLoaded'})
    }
    
    return (
        <GraphContext.Provider value={{ graphState: GraphInitialState, dataLoaded}}>
            { children }
        </GraphContext.Provider>
    )
}
