import React, { useState } from "react";

import '../styles/FormArea.css'

const FormArea = ({ addToAminoAcidChain, addLetterToBuildingCodon }) => {


  return (
    <div id="form-area">
      <div className="instructions">
        <h1>mRNA Translation Visualizer</h1>
        <p>Click the buttons below to add messenger RNA to the growing mRNA strand. Each three-letter combination makes up a codon. Once you have created a codon, the proper amino acid will be added to the polypeptide (protein chain). Polypeptides always start with the codon for Methionine. If you add a codon for "stop" you will not be able to add any more codons to your chain.</p>
      </div>
      


      <button id="button-U" onClick={(e) => addLetterToBuildingCodon(e)} value={'U'}>U</button>
      <button id="button-C" onClick={(e) => addLetterToBuildingCodon(e)} value={'C'}>C</button>
      <button id="button-A" onClick={(e) => addLetterToBuildingCodon(e)} value={'A'}>A</button>
      <button id="button-G" onClick={(e) => addLetterToBuildingCodon(e)} value={'G'}>G</button>
    </div>
  )
}

export default FormArea;