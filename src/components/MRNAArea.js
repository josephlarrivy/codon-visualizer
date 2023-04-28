import React, {useEffect, useState} from "react";
import useConvertCodonToName from '../hooks/useConvertCodonToName'
import Codon from '../components/Codon'

import '../styles/MRNAArea.css'

const MRNAArea = ({ aminoAcidChain }) => {

  const [getAminoAcid] = useConvertCodonToName();

  useEffect(() => {
    console.log(aminoAcidChain)
    for (let item of aminoAcidChain) {
      // console.log(getAminoAcid(item))
    }
  }, [aminoAcidChain])

  return (
    <div id="mrna-area">
      <div id="mrna-rail"></div>
        <div className="codon-outer-container">
          {aminoAcidChain && aminoAcidChain.map(codon => {
            return (
              <div id="codon">
                <Codon codon={codon}/>
                <div className="sphere"></div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default MRNAArea;