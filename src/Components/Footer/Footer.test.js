import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import {test, expect, jest} from "@jest/globals";
import Footer from "./Footer.js";

//this will test whether the component renders using .toBeInTheDocument matcher



//Write test 
test("tests that the footer renders", function () {
    //const addToList = jest.fn();  //not sure about this?
    //Arrange
    render(<Footer/>) //buttonText?
    //Act 
        //do we actually need this stage for checking it renders?
    //Assert 
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
});
