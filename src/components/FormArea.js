import React, { useState } from "react";

import '../styles/FormArea.css'

const FormArea = ({ addToAminoAcidChain, addLetterToBuildingCodon }) => {

  return (
    <div id="form-area">
      <button onClick={(e) => addLetterToBuildingCodon(e)} value={'U'}>U</button>
      <button onClick={(e) => addLetterToBuildingCodon(e)} value={'C'}>C</button>
      <button onClick={(e) => addLetterToBuildingCodon(e)} value={'A'}>A</button>
      <button onClick={(e) => addLetterToBuildingCodon(e)} value={'G'}>G</button>
    </div>
  )
}

export default FormArea;