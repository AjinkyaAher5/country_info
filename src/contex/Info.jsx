import React, { createContext,useReducer } from "react";


export const Info=createContext();

const initState={
    country:"",
    city:"",
    population:""

};


function reducer(state,action){
    switch(action.type){
        case "CHANGE_COUNTRY":
            return{...state,country:action.payload}

         case "CHANGE_CITY":
            return{...state,city:action.payload}

            case "CHANGE_POPULATION":
                return{...state,population:action.payload}

        default:
            throw new Error()

    }

}


export function InfoProvider({children}){
    const [state,dispatch]=useReducer(reducer,initState)


    const handelSubmit=()=>{
        fetch(`http://localhost:8080/users`,{
            method:"POST",
            body:JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then(()=>{})
        .catch((error)=>console.log(error));
    };
    const {country,city,population}=state;
    return(
        <Info.Provider value={{
            country,city,population,dispatch,handelSubmit
        }}>
            {children}
        </Info.Provider>
    )

}