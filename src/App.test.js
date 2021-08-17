import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react"

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test('emojis are rendered on initial page-load', () => { 
  render(<App />)
  const emojiRows = screen.getByTestId("test-on-load")
  console.log(emojiRows.querySelectorAll("div>div").length);
  expect(emojiRows.querySelectorAll("div>div").length === 20)
})