import React, { useState } from "react";

import biomData from "./resolvers/BiomData";
import Table from "./components/table/Table";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = {
    name: biomData.name.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    taxId: biomData.taxId.filter((_, index) =>
      biomData.name[index].toLowerCase().includes(searchTerm.toLowerCase())
    ),
    abundanceScore: biomData.abundanceScore.filter((_, index) =>
      biomData.name[index].toLowerCase().includes(searchTerm.toLowerCase())
    ),
    relativeAbundance: biomData.relativeAbundance.filter((_, index) =>
      biomData.name[index].toLowerCase().includes(searchTerm.toLowerCase())
    ),
    uniqueMatchesFrequency: biomData.uniqueMatchesFrequency.filter((_, index) =>
      biomData.name[index].toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredData.name.length > 0 ? (
        <Table data={filteredData} />
      ) : (
        <p className="no-results">No results :(</p>
      )}
    </div>
  );
};

export default App;
