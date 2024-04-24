import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tax ID</th>
            <th>Abundance score</th>
            <th>Relative abundance</th>
            <th>Unique matches frequency</th>
          </tr>
        </thead>
        <tbody>
          {data.name.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{data.taxId[index]}</td>
              <td>{data.abundanceScore[index].toFixed(2)}</td>
              <td>
                {data.relativeAbundance[index] < 0.01
                  ? "< 0.01%"
                  : `${data.relativeAbundance[index].toFixed(2)}%`}
              </td>
              <td>{data.uniqueMatchesFrequency[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
