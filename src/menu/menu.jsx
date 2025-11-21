export function showOrHideMenu(current){
    const menu=current.target.nextElementSibling;
    if(menu.style.display=="block")
         menu.style.display="none";
    else
      
        menu.style.display="block";
}
export function hideMenu(event){
    event.target.parentElement.style.display="none";
}
export default function Menu({name, options}){
    const MENU_CSS={display:"none"};
    
    const choices=options.map(function(choice){
         return <div onClick={choice.action} className="menu-option" key={choice.name}>{choice.name}</div>;
    });
    return <><h3 className="menu-option" onClick={showOrHideMenu}>{name}</h3><span style={MENU_CSS} onClick={hideMenu}>{choices}</span></>;
}