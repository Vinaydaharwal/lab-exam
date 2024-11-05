import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData();
    };

    const handlelog  =  () => { 

        navigate("/login")

    }

    const handleSignup = async () => {
        const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result.message);

    };

    return (
            <div>
            <h2>Signup</h2>
            <input type='text'/>
            <input  type='email'/>
            <input  type='password'/>
            <button onClick={handleSignup}>Signup</button>

            <div>
                <button onClick={handlelog}> Aleardy have account </button>
            </div>
            </div>
    );
    }
export default Signup;