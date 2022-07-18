//Context, Reducer, Provider, hook
import {createContext, ReactNode, useContext, useReducer} from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

export type Action = {
    type: string;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

const initialData: State = {
    currentStep: 0,
    name: "",
    level: 0,
    email: "",
    github: ""
}

type FormProviderProps = {
    children: ReactNode;
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);  //ele começa como undefined (por isso precisa desse |)

//Reducer
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "setCurretStep":
            return {...state, currentStep: action.payload};
        case "setName":
            return {...state, name: action.payload};
        case "setLevel":
            return {...state, level: action.payload};
        case "setEmail":
            return {...state, email: action.payload};
        case "setGithub":
            return {...state, github: action.payload};
        default:
            return {state};
    }
}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Context hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error ("useform precisa ser usado dentro do FormProvider")
    } else {
        return context;
    }
}