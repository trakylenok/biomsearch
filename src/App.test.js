import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { mockBiomData } from "./mockBiomData";

describe("App component", () => {
  it("renders search input", () => {
    jest.mock("./resolvers/BiomData", () => ({
      ...jest.requireActual("./resolvers/BiomData"),
      biomData: mockBiomData,
    }));

    render(<App />);
    const searchInput = screen.getByPlaceholderText("Search by name...");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates search term when typing into input", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Search by name...");

    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });

  it("filters table data based on search term", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Search by name...");

    fireEvent.change(searchInput, { target: { value: "Bacteria" } });
  });

  it("renders table", () => {
    render(<App />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("filters data based on search term", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText("Search by name...");

    fireEvent.change(searchInput, {
      target: { value: "Lactobacillus crispatus SJ-3C-US" },
    });

    const filteredRows = screen
      .getAllByText("Lactobacillus crispatus SJ-3C-US")
      .map((row) => row.closest("tr"));
    expect(filteredRows.length).toBe(1);
  });

  it("displays correct data", () => {
    render(<App />);

    const nameCells = screen.getAllByText("Lactobacillus crispatus SJ-3C-US");
    expect(nameCells.length).toBe(1);

    const taxIdCells = screen.getAllByRole("cell", {
      name: /575598|2042046|1033837/,
    });

    expect(taxIdCells.length).toBe(3);

    const abundanceScoreCells = screen.getAllByRole("cell", {
      name: /139028\.29|3868\.86|3\.29/,
    });

    expect(abundanceScoreCells.length).toBe(3);
  });
});
