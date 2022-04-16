import { useContext } from "react"
import { Info } from "../contex/Info"
import {useNavigate} from "react-router-dom"


export const City=()=>{
    const{country,city,population,dispatch,handelSubmit}=useContext(Info)
    const navigate=useNavigate();
    if(!country){
        return <navigate to="add-country"/>;
    }
    
        return(
            <div>
               <p> city <input type="text" placeholder="Enter city" value={city} onChange={(e)=>dispatch({type:"CHANGE_CITY",payload:e.target.value})} /></p>
               <p> population <input type="text" placeholder="Enter population" value={population} onChange={(e)=>dispatch({type:"CHANGE_POPULATION",payload:e.target.value})} /></p>
    
               <button disabled={!city && !population} onClick={handelSubmit}>Submit</button>
    
            </div>
        )
    }