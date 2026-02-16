import MoneyOwned from "./money owned"
export default function MoneysOwned({players}){
    const moneys=players.map(function(player, position){
        const name="player"+position;
        return <MoneyOwned key={name} player={position+1} money={player}/>
    });
    return <nav>{moneys}</nav>
}