import {useState } from 'react';
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName ] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            }),
        })
            .then((r)=> r.json())
            .then((data)=> console.log(data))
        
    }


    function handleSignup(e){
        e.preventDefault();
        fetch('/signup', {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
            }, 
            body: JSON.stringify({
                email, 
                password, 
                passsword_confirmation: passwordConfirmation,
                firstName, 
                lastName,
            }),
        })
            .then((r)=> r.json())
            .then((data)=> console.log(data))
    }




    return(
        <>
         <div className="login">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    /><br/>
                    <label htmlFor="password">Password: </label>
                    <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="signup">
        <form>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Last Name:</label>
                    <input
                    type="text"
                    name="lastname"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
                </form>
            </div>
           </> 
    )
}


export default LoginPage;