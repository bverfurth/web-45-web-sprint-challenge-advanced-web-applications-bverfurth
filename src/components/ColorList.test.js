import React from "react";
import ColorList from "./ColorList";
import { render, screen } from "@testing-library/react";
import Color from "./Color";
import userEvent from "@testing-library/user-event";

const testColor = {
  color: "aqua",
  code: { hex: "#00ffff" },
  id: 1,
};

test("Renders an empty list of colors without errors", () => {
  render(<ColorList color={noColor} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList color={testColor} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const toggleEdit = jest.fn();
  render(<ColorList color={testColor} />);
  let editing = screen.queryAllByTestId("color");
  userEvent.click(editing);
  expect(toggleEdit).toBeCalled();
});
