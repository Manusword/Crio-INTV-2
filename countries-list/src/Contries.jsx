import React, { useEffect, useState } from 'react'

const Card=({name,img,alt})=>{
    return(
        <div style={{
            "width":'200px',
            "height":"180px",
            "display":"flex",
            "justifyItems":"center",
            "alignItems":"center",
            "flexDirection":"column",
            "padding":"5px",
            "margin":"5px",
            "border":"1px solid gray",
            "borderRadius":"5px",
            "float":"left"
        }}>
            <img style={{
                "width":'150px',
                "height":"150px",
                "backgroundColor":"blue",
            }} src={img} alt={alt} />
            <h3>{name}</h3>
        </div>
    )
}


function Contries() {
    const [contries,setContries] = useState([])

    useEffect(()=>{
        const API_URL = "https://restcountries.com/v3.1/all";
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>setContries(data))
    },[])

    return (
        <div >
           {
            contries.map((country,index)=>{
                return(
                    <Card key={index} name={country.name.common} img={country.flags.png} alt={country.flags.alt} />
                )
            })
           }
            
           
        </div>
    )
}

export default Contries