import biomData from "./BiomData";
import biom from "../data/biom.json";

describe("generateBiomData", () => {
  it("should generate biom data with correct relativeAbundance, abundanceScore and uniqueMatchesFrequency", () => {
    expect(biomData.relativeAbundance.length).toBe(
      Math.ceil(biom.data.length / 3)
    );
    expect(biomData.abundanceScore.length).toBe(
      Math.ceil(biom.data.length / 3)
    );
    expect(biomData.uniqueMatchesFrequency.length).toBe(
      Math.ceil(biom.data.length / 3)
    );

    let relIndex = 0;
    let scoreIndex = 0;
    let freqIndex = 0;

    biom.data.forEach((elem, index) => {
      if (index % 3 === 0) {
        expect(biomData.relativeAbundance[relIndex]).toBe(elem[2]);
        relIndex++;
      } else if (index % 3 === 1) {
        expect(biomData.abundanceScore[scoreIndex]).toBe(elem[2]);
        scoreIndex++;
      } else if (index % 3 === 2) {
        expect(biomData.uniqueMatchesFrequency[freqIndex]).toBe(elem[2]);
        freqIndex++;
      }
    });
  });
});
