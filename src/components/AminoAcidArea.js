import React from "react";

import '../styles/AminoAcidArea.css'

const AminoAcidArea = () => {

  const codonMappings = {
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'CUU': 'Leucine',
    'CUC': 'Leucine',
    'CUA': 'Leucine',
    'CUG': 'Leucine',
    'AUU': 'Isoleucine',
    'AUC': 'Isoleucine',
    'AUA': 'Isoleucine',
    'AUG': 'Methionine',
    'GUU': 'Valine',
    'GUC': 'Valine',
    'GUA': 'Valine',
    'GUG': 'Valine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'CCU': 'Proline',
    'CCC': 'Proline',
    'CCA': 'Proline',
    'CCG': 'Proline',
    'ACU': 'Threonine',
    'ACC': 'Threonine',
    'ACA': 'Threonine',
    'ACG': 'Threonine',
    'GCU': 'Alanine',
    'GCC': 'Alanine',
    'GCA': 'Alanine',
    'GCG': 'Alanine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UAA': 'Stop',
    'UAG': 'Stop',
    'CAU': 'Histidine',
    'CAC': 'Histidine',
    'CAA': 'Glutamine',
    'CAG': 'Glutamine',
    'AAU': 'Asparagine',
    'AAC': 'Asparagine',
    'AAA': 'Lysine',
    'AAG': 'Lysine',
    'GAU': 'Aspartic acid',
    'GAC': 'Aspartic acid',
    'GAA': 'Glutamic acid',
    'GAG': 'Glutamic acid',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGA': 'Stop',
    'UGG': 'Tryptophan',
    'CGU': 'Arginine',
    'CGC': 'Arginine',
    'CGA': 'Arginine',
    'CGG': 'Arginine',
    'AGU': 'Serine',
    'AGC': 'Serine',
    'AGA': 'Arginine',
    'AGG': 'Arginine',
    'GGU': 'Glycine',
    'GGC': 'Glycine',
    'GGA': 'Glycine',
    'GGG': 'Glycine',
  };

  return (
    <div id="amino-acid-area">
      {Object.entries(codonMappings).map(([codon, aminoAcid]) => (
        <p key={codon}>{codon} {aminoAcid},</p>
      ))}
    </div>
  );
}

export default AminoAcidArea;