import React, { useEffect, useState } from "react";
import FormArea from "./components/FormArea";
import MRNAArea from "./components/MRNAArea";
import AminoAcidArea from './components/AminoAcidArea'

import useConvertCodonToName from './hooks/useConvertCodonToName'

import './styles/App.css'


function App() {

  const [getAminoAcid] = useConvertCodonToName();
  const [aminoAcidChain,  setAminoAcidChain] = useState(['AUG'])

  let buildingAmionAcid = ''
  const addLetterToBuildingCodon = (e) => {
    const lastCodon = aminoAcidChain[aminoAcidChain.length-1]
    if (lastCodon !== 'UAA' && lastCodon !== 'UAG' && lastCodon !== 'UGA') {
      buildingAmionAcid += e.target.value
      if (buildingAmionAcid.length === 3) {
        addToAminoAcidChain(buildingAmionAcid)
        buildingAmionAcid = ''
      }
    }
  }

  const addToAminoAcidChain = (newAminoAcid) => {
    setAminoAcidChain([...aminoAcidChain, newAminoAcid])
  }
  
  return (
    <div id="main-container">
      <div id="form-area-container">
        <FormArea
          addLetterToBuildingCodon={addLetterToBuildingCodon}
          addToAminoAcidChain={addToAminoAcidChain}
        />
      </div>
      <div id="mrna-area-container">
        <MRNAArea
          aminoAcidChain={aminoAcidChain}
        />
      </div>
      <div id="amino-acid-area-container">
        <AminoAcidArea />
      </div>  
    </div>
  );
}

export default App;
