import { Link } from "react-router"
export default function ChartPageLink(){
    const CSS={
      backgroundColor:"lightblue"
    }
    function signOut(){
        sessionStorage.removeItem("username");
        window.location.href="/signIn";
    }
    if(sessionStorage.getItem("email")===null)
      return <Link to="/signIn" style={CSS}>Sign In</Link>;
    else
      return <button onClick={signOut} style={CSS}>Sign Out</button>
}