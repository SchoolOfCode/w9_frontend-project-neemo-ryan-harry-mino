import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import {test, expect, jest} from "@jest/globals";
import Home from "./Home.js";

//this will test whether the component renders using .toBeInTheDocument matcher



//Write test 
test("tests that h1 text render", function () {
    //const addToList = jest.fn();  //not sure about this?
    //Arrange
    render(<h1></h1>) //buttonText?
    //Act 
        //do we actually need this stage for checking it renders?
    //Assert 
    expect(screen.getByRole('heading')).toBeInTheDocument('FOO-D FOR THOUGHT')
});
