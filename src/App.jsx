import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/banner";
import satData from "./components/satData";
import React, { useState } from "react";


function App() {
  const [sat, setSat] = useState(satData);
  
  const displaySats = [...new Set(satData.map(data => data.orbitType))];
  
  const filterByType = (currentType) => {
      const filteredSats = satData.filter(newSatDisplay => newSatDisplay.orbitType === currentType);
      setSat(filteredSats);
    };
    


 const resetSats = () => {
  setSat(satData); 
};

  return (
    <div>
      <Banner />
      <Buttons
         filterByType={filterByType}
         reset={resetSats}
         displaySats= {displaySats}
       />
      <Table sat={sat} />
    </div>
  );
};

export default App;