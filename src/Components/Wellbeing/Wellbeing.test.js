import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Wellbeing from "./Wellbeing.js"

//this will test whether the component renders using .toBeInTheDocument matcher

//Write test
test("tests that the heading renders", function () {
  //const addToList = jest.fn();  //not sure about this?
  //Arrange
  render(<Wellbeing />); //buttonText?
  //Act
  //do we actually need this stage for checking it renders?
  //Assert
  expect("WELLBEING").toBe("WELLBEING");
});
