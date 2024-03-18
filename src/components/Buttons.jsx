import React from "react";
import satData from "./satData";



const Buttons = ({ filterByType, resetSats, displaySats }) => {
return(
<div>  
{ displaySats.map((sat, id) => {
    return (
      
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
    );
  })}
        <button onClick={resetSats}>
            All Orbits
        </button>
</div>
);
};
export default Buttons;

