import React from 'react'
import {render, screen} from '@testing-library/react'
import App from "./App"

describe("<App/>", () => {
  it("renders correctly", () => {
    render(<App/>)
    expect(1).toBe(1);
    screen.debug();
  })
})