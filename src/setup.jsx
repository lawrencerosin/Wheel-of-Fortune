 
export default function Setup(){
    function begin(){
       
        if(players=="")
            alert("You must put in a number of players.");
        else if(players<1)
            alert("The game must have at least 1 player.");
        else{
            sessionStorage.setItem("players", document.getElementById("players").value);
            window.location.href="/"
        }
    }
    return <form><input type="number" placeholder="Number of Players" min="1" id="players"/><button type="button" onClick={begin}>Begin</button></form>
}