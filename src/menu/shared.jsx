function find(emails, email){
    for(let position=0; position<emails.length; position++)
        if(emails[position]==email)
            return position;
    return -1;
}
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
        function removeShare(){
          
           const copiedShared=[...shared];
            const emailLoc=find(copiedShared, email);
           copiedShared.splice(emailLoc, 1);
           setShared(copiedShared);
        }
        return <div><span>{email}</span><button onClick={removeShare}>Remove</button></div>;
    });
    return <div style={CSS}>{emails}<button onClick={shareChart}>Add</button></div>;
}