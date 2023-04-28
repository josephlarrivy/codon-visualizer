import React, { useEffect } from "react";
import useConvertCodonToName from '../hooks/useConvertCodonToName'

const MainContainer = () => {
  
  const [getAminoAcid] = useConvertCodonToName();

  useEffect(() => {
    const aminoAcid = getAminoAcid("UAG");
    console.log(aminoAcid);
  }, [getAminoAcid]);

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default MainContainer;
