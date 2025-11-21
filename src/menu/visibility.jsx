import MenuOption from "./menu option";

const VISIBILITIES=["Private", "Shared", "Public"];
export const VISIBILITY_OPTIONS=new Array(VISIBILITIES.length);
function changeVisibility(event){
      event.target.style.backgroundColor="lightblue";
      //for(let current)

}
for(let position=0; position<VISIBILITIES.length; position++){
    VISIBILITY_OPTIONS[position]=new MenuOption(VISIBILITIES[position], null);
}

   