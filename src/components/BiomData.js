import biom from "../data/biom.json";

const LEVEL = 7;

const generateBiomData = () => {
  const biomData = {
    name: [],
    taxId: [],
    abundanceScore: [],
    relativeAbundance: [],
    uniqueMatchesFrequency: [],
  };

  biom.rows.forEach((elem) => {
    biomData.name.push(elem.metadata.lineage[LEVEL]?.name || "");
    biomData.taxId.push(elem.metadata.lineage[LEVEL]?.tax_id || "");
  });

  biom.data.forEach((elem, index) => {
    console.log(elem);
    if (index % 3 === 0) biomData.relativeAbundance.push(elem[2]);
    else if (index % 3 === 1) biomData.abundanceScore.push(elem[2]);
    else if (index % 3 === 2) biomData.uniqueMatchesFrequency.push(elem[2]);
  });

  return biomData;
};

const biomData = generateBiomData();

export default biomData;
