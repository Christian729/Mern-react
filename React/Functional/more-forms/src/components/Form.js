import React, { useState } from 'react';

const Form = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    

    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => 
                setFirstName(e.target.value) } />
                
                
                <div>
                    { firstName.length < 2 &&  firstName.length > 0 ? (
                    <p> First Name must be at least 2 characters!</p>
                    ) : null  }
                </div>
                
            </div>
            
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => 
                setLastName(e.target.value) } />
                <div>
                    { lastName.length < 2 &&  lastName.length > 0 ? (
                    <p> Last Name must be at least 2 characters!</p>
                    ) : null  }
                </div>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => 
                setEmail(e.target.value) } />
                <div>
                    { email.length < 5 && email.length > 0 ? (
                    <p> Email must be at least 5 characters!</p>
                    ) : null  }
                </div>
            </div>
            <div>
            <label>Password: </label> 
                <input type="password" value={password} onChange={ (e) => 
                setPassword(e.target.value) } />

            </div>
            {password.length < 8 && password.length > 0 ? 
            <p>Password must be at least 8 characters!</p> 
            : null}
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={ (e) => 
                setConfirmPassword(e.target.value) } />
            </div>
            {confirmPassword !== password && confirmPassword.length > 0 ? <p>Passwords must match!</p> : null 
            }
        </form>
    )
                }
export default Form;