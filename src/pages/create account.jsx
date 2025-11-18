import { Link } from "react-router";
import { useRef } from "react";
export default function CreateAccount(){
     const firstName=useRef("");
    const lastName=useRef("");
    const email=useRef("");
    const password=useRef("");
    const confirmPassword=useRef("");
    const BUTTON_CSS={
        backgroundColor:"yellow"
    }
    async function addAccount(event){
        event.preventDefault();
        const result=await fetch(`/createAccount?firstName=${firstName.current.value}&lastName=${lastName.current.value}&email=${email.current.value}&firstPassword=${password.current.value}&secondPassword=${confirmPassword.current.value}`, 
            {
                method:"POST"
            }
        );
       if(result=="Success")
         alert("You have successfully created your account.");
    
    }
   
    return (
     <form>
        <h3>Create Account</h3>
        <input placeholder="First Name" required ref={firstName}></input><br/>
        <input placeholder="Last Name" required ref={lastName}></input><br/>
        <input type="email" placeholder="E-mail Address" required ref={email}></input><br/>
        <input type="password" placeholder="Password" required ref={password}></input><br/>
        <input type="password" placeholder="Confirm Password" required ref={confirmPassword}></input><br/>
        <button style={BUTTON_CSS} onClick={addAccount}>Create Account</button>
        <Link to="/signIn">Sign In If You Already Have an Account</Link>
    </form>);
}