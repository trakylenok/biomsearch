import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table component", () => {
  const testData = {
    name: ["Bacteria", "Virus"],
    taxId: ["123456", "789012"],
    abundanceScore: [5.6, 7.8],
    relativeAbundance: [0.005, 1.23],
    uniqueMatchesFrequency: ["10%", "20%"],
  };

  it("renders table headers correctly", () => {
    render(<Table data={testData} />);

    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(5);
    expect(headers[0]).toHaveTextContent("Name");
    expect(headers[1]).toHaveTextContent("Tax ID");
    expect(headers[2]).toHaveTextContent("Abundance score");
    expect(headers[3]).toHaveTextContent("Relative abundance");
    expect(headers[4]).toHaveTextContent("Unique matches frequency");
  });

  it("renders table rows correctly based on provided data", () => {
    render(<Table data={testData} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);

    expect(screen.getByText("Bacteria")).toBeInTheDocument();
    expect(screen.getByText("123456")).toBeInTheDocument();
    expect(screen.getByText("5.60")).toBeInTheDocument();
    expect(screen.getByText("< 0.01%")).toBeInTheDocument();
    expect(screen.getByText("10%")).toBeInTheDocument();

    expect(screen.getByText("Virus")).toBeInTheDocument();
    expect(screen.getByText("789012")).toBeInTheDocument();
    expect(screen.getByText("7.80")).toBeInTheDocument();
    expect(screen.getByText("1.23%")).toBeInTheDocument();
    expect(screen.getByText("20%")).toBeInTheDocument();
  });
});
