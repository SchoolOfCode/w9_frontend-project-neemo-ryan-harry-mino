import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, jest } from "@jest/globals";
import Home from "../Home/Home.js";
import Wellbeing from "../Wellbeing/Wellbeing.js";
import Technical from "../Technical/Technical.js";

test("Wellbeing button routes to correct page", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wellbeing" element={<Wellbeing />} />
        <Route path="/Technical" element={<Technical />} />
      </Routes>
    </Router>
  );
  // Checks if homepage is being rendered
  const buttons = screen.getAllByRole("button");
  const wellbeingButton = buttons[0];
  const technicalButton = buttons[1];
  expect(wellbeingButton && technicalButton).toBeInTheDocument();
  // clicking wellbeing button
  userEvent.click(buttons[0]);
  // has the path changed
  expect(
    screen.getByRole("heading", { name: "Overcoming Imposter Syndrome" })
  ).toBeInTheDocument();
});
