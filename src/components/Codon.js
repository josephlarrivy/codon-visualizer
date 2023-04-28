import React, { useEffect } from "react";
import useConvertCodonToName from '../hooks/useConvertCodonToName'

import '../styles/Codon.css'

const Codon = ({codon}) => {

  const [getAminoAcid] = useConvertCodonToName();

  useEffect(() => {
    console.log(codon)
    console.log(getAminoAcid(codon))
  }, [])

  return (
    <>
      {codon && codon.split("").map(letter => {
        return (
          <div className={`spike-${letter}`}>
            <p className={`letter-${letter}`}>{letter}</p>
            <div className={`spike-${letter}-space`}/>
          </div>
        )
      })}
    </>
  )
}

export default Codon;