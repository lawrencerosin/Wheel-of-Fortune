export default function CurrentMoney({money}){
    const CSS={
        color:"white",
        border:"1px solid blue",
        textAlign:"center"
    }
    return <h1 style={CSS}>Money: {money}.00</h1>;

}