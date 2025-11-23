export default function Shared({shared, setShared}){
    const CSS={
        display:"none"
    }
    function shareChart(){
        const sharee=prompt("Enter the email address you want to share with.");
        const shareCopy=[...shared];
        shareCopy.push(sharee);
        setShared(shareCopy);
    }
    const emails=shared.map(function(email){
        return <div><span>{email}</span><button>Remove</button></div>;
    });
    return <div style={CSS}>{emails}<button onClick={shareChart}>Add</button></div>;
}