import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function Userform() {
    const [data, setData]=useState({
        firstname:"",
        lastname:""
    })
    const [fullname,setFullName] = useState('');
    const input1 = useRef(null)
    const input2 = useRef(null)

    const handelChange=(e)=>{
        setData(pre=>{
            return ({...pre,[e.target.name]:e.target.value})
        })
    }

    const handeleSubmit = (event)=>{
        event.preventDefault();

        if(data.firstname.length === 0){
            input1.current.focus()
        }
        else if(data.lastname.length === 0){
            input2.current.focus()
        }
        else{
            setFullName(data.firstname + " "+data.lastname);
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handeleSubmit}>
                <h1>Full Name Display</h1>
                <div>
                    First Name: <input type="text" name='firstname' value={data.firstname} onChange={handelChange} ref={input1} required />
                </div>
                <div>
                    Last Name: <input type="text" name="lastname" value={data.lastname} onChange={handelChange} ref={input2} required/>
                </div>
                <button >Submit</button>
                <p>Full Name: {fullname} </p>
            </form>
        </div>
    )
}

export default Userform