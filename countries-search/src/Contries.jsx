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
            }} src={img} alt={alt} />
            <h3>{name}</h3>
        </div>
    )
}


function Contries() {
    const [contriesList,setContriesList] = useState([])
    const [contries,setContries] = useState([])
    const [search,setSearch] = useState('')
    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(()=>{
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>{setContriesList(data);})
        .catch(error=>console.error("error",error))
    },[])

    useEffect(()=>{
        setContries(contriesList.filter(val=>val.name.common.toLowerCase().includes(search.toLowerCase())))
    },[search])

    const handleSearch =(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div >
            <div  style={{
                    "display":"flex",
                    "justifyContent":"center",
                    "alignItems":"center",
                    "width":"100%",
                    "height":"60px",
                    "borderBottom":"1px solid black",
                    "paddingLeft":"5px"
                }}>
                <input 
                    type='text' 
                    value={search}
                    name='search'
                    placeholder='Search Country Name'
                    onChange={handleSearch}
                    style={{
                    "width":'300px',
                    "height":"25px",
                }}/>
            </div>
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