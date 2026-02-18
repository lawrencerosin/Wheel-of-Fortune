import BuyVowel from "../buy vowel"
import Complete from "./complete"
import Spin from "./spin"

export default function Buttons({orientation, orientationSetter, picker, pickerSetter, spun, spunSetter, moneySetter, players, playersSetter, player, playerSetter, mode, modeSetter}){
    const CSS={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
    return (<nav style={CSS}>
        <Spin orientation={orientation} setOrientation={orientationSetter} picker={picker} setPicker={pickerSetter} moneySetter={moneySetter} spun={spun} setSpun={spunSetter} players={players} playersSetter={playersSetter} player={player} playerSetter={playerSetter}/>
        <BuyVowel spun={spun} spunSetter={spunSetter} mode={mode} modeSetter={modeSetter} players={players} playersSetter={playersSetter} position={player}/>
        <Complete spun={spun}/>
       </nav>)
}