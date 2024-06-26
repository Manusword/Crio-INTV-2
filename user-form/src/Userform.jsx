import React, { useState } from 'react';

function Userform() {
    const [data, setData] = useState({
        firstname: "",
        lastname: ""
    });
    const [fullname, setFullName] = useState('');
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFullName(`${data.firstname} ${data.lastname}`);
    }

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name: <input type="text" name='firstname' value={data.firstname} onChange={handleChange}  required />
                </div>
                <div>
                    Last Name: <input type="text" name="lastname" value={data.lastname} onChange={handleChange}  required />
                </div>
                <button  type='submit'>Submit</button>
            </form>
            {fullname && <div>Full Name: {fullname}</div>}
        </div>
    );
}

export default Userform;
