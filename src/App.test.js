import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

test('renders Header component ', () => {
  render(<Header />)
})

beforeEach(() => {
  render(<App />)
})

test('emojis are rendered on initial page-load', () => { 
  const emojiRows = screen.getByTestId("test-on-load")
  expect(emojiRows.querySelectorAll("div>div").length === 20)
})

test('filters emoji by input', () => {
  const inputNode = document.getElementsByTagName("input")[0]
  userEvent.type(inputNode, "kissing heart")
  expect(screen.getByAltText("Kissing Heart"))
})
