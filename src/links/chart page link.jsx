import { Link } from "react-router"
export default function ChartPageLink(){
    function signOut(){
        sessionStorage.removeItem("username");
        window.location.href="/signIn";
    }
    if(sessionStorage.getItem("email")===null)
      return <Link to="/signIn">Sign In</Link>;
    else
      return <button onClick={signOut}>Sign Out</button>
}