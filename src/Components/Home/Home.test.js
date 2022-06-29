import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Logo from "../Logo/Logo.js";
import Card from "../Card/Card.js";
import Footer from "../Footer/Footer.js";

describe("Homepage renders", () => {
  test("Header logo renders", () => {
    render(<Logo />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("Wellbeing card renders", () => {
    render(<Card title="Wellbeing" />);
    expect(
      screen.getByRole("heading", { name: "Wellbeing" })
    ).toBeInTheDocument();
  });
  test("Technical card renders", () => {
    render(<Card title="Technical" />);
    expect(
      screen.getByRole("heading", { name: "Technical" })
    ).toBeInTheDocument();
  });
  test("Footer renders", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
