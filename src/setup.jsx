import { players, setPlayers } from "./global variables"
export default function Setup(){
    function begin(){
        setPlayers(document.getElementById("players").value);
        if(players=="")
            alert("You must put in a number of players.");
        else if(players<1)
            alert("The game must have at least 1 player.");
        else
            window.location.href="/"
    }
    return <form><input type="number" placeholder="Number of Players" min="1" id="players"/><button type="button" onClick={begin}>Begin</button></form>
}