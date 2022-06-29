import React from "react";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Card from "./Card.js";
import { test, expect, jest } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// test("tests that Card button renders", function () {
//   render(<Card />);
//   expect(screen.getByRole("article")).toBeInTheDocument();
//   expect(screen.getByRole("heading")).toBeInTheDocument();
//   expect(screen.getByRole("button")).toBeInTheDocument();
// });

test("tests if onClick has been called", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wellbeing" element={<Wellbeing />} />
        <Route path="/Technical" element={<Technical />} />
      </Routes>
    </Router>
  );
  // selecting the button
  let button = screen.getByRole("button");
  // clicking the button
  userEvent.click(button);
  // has the path changed
  expect(screen.getByText("IMPOSTER SYNDROME")).toBeInTheDocument();
});
