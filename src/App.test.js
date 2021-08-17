import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header"
import { render, screen } from "@testing-library/react"

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test('renders Header component ', () => {
  render(<Header />)
})

test('emojis are rendered on initial page-load', () => { 
  render(<App />)
  const emojiRows = screen.getByTestId("test-on-load")
  expect(emojiRows.querySelectorAll("div>div").length === 20)
})