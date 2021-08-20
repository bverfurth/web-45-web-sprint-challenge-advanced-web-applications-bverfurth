import React from "react";
import BubblePage from "./BubblePage";
import fetchColorService from "../services/fetchColorService";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("../services/fetchColorService.js");

const testColor = {
  color: "aqua",
  code: { hex: "#00ffff" },
  id: 1,
};

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  fetchColorService.mockResolvedValueOnce(testColor);

  render(<BubblePage />);
  const colors = screen.getAllByTestId("color");

  await waitFor(() => {
    expect(colors).toHaveLength(1);
  });
});

//Keep in mind that our service is called on mount for this component.
