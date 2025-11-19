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