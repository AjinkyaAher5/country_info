import { useEffect, useState } from "react"

export const User=()=>{

const [user,setUser]=useState([])

useEffect(()=>{
    fetch(`http://localhost:8080/users`)
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((err)=>console.log(err))
},[])




return(
    <div>
        


        <table style={{border:"1px solid black"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>COUNTRY</th>
                    <th style={{border:"1px solid black"}}>CITY</th>
                    <th style={{border:"1px solid black"}}>POPULATION</th>
                    <th style={{border:"1px solid black"}}>EDIT</th>
                    <th style={{border:"1px solid black"}}>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user)=>
                
                <tr>
                    <td style={{border:"2px solid black"}}>{user.country}</td>
                    <td style={{border:"2px solid black"}}>{user.city}</td>
                    <td style={{border:"2px solid black"}}>{user.population}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                
                   
                </tr>
                
                )}
            </tbody>
        </table>
        <button>Filter By Country</button>
    </div>
)
}