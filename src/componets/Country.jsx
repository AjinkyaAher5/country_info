import { useContext } from "react"
import { Info } from "../contex/Info"
import {useNavigate} from "react-router-dom"

export const Country=()=>{
const{country,dispatch}=useContext(Info)
const navigate=useNavigate();


    return(
        <div>
           <p> Country <input type="text" placeholder="Enter Country" value={country} onChange={(e)=>dispatch({type:"CHANGE_COUNTRY",payload:e.target.value})} /></p>

           <button disabled={!country} onClick={()=>{
        navigate(`/add-city`)
    }}>Next</button>
        </div>
    )
}