import React, { useRef, useState } from 'react';

function Userform() {
    const [data, setData] = useState({
        firstname: "",
        lastname: ""
    });
    const [fullname, setFullName] = useState('');
    const input1 = useRef(null);
    const input2 = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (data.firstname.trim() === "") {
            input1.current.focus();
            return; // Prevent further execution
        } else if (data.lastname.trim() === "") {
            input2.current.focus();
            return; // Prevent further execution
        }

        setFullName(`${data.firstname} ${data.lastname}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>
                <div>
                    First Name: <input type="text" name='firstname' value={data.firstname} onChange={handleChange} ref={input1} required />
                </div>
                <div>
                    Last Name: <input type="text" name="lastname" value={data.lastname} onChange={handleChange} ref={input2} required />
                </div>
                <button type='submit'>Submit</button>
                {fullname && <p>Full Name: {fullname}</p>}
            </form>
        </div>
    );
}

export default Userform;
