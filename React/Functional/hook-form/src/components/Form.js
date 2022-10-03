import React, { useState } from 'react';
const Form = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => 
                setFirstName(e.target.value) } />
            </div>
            <div>
            <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => 
                setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => 
                setEmail(e.target.value) } />
            </div>
            <div>
            <label>Password: </label> 
                <input type="password" value={password} onChange={ (e) => 
                setPassword(e.target.value) } />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={ (e) => 
                setConfirmPassword(e.target.value) } />
            </div>
            <div >
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                <label>First Name: </label>{ firstName }
                </p>
                <p>
                <label>Last Name: </label>{ lastName }
                </p>
                <p>
                <label>Email: </label>{ email }
                </p>
                <p>
                <label>Password: </label>{ password }
                </p>
                <p>
                <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </form>

        
    );
    
};

export default Form;