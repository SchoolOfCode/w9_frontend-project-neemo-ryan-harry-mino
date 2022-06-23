import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import Card from "./Card.js";
import {test, expect, jest} from "@jest/globals";

//this will test whether the component renders using .toBeInTheDocument matcher



//Write test 
test("tests that Card button renders", function () {
    //const addToList = jest.fn();  
    //Arrange
    render(<Card />) //buttonText?
    //Act 
        //do we actually need this stage for checking it renders?
    //Assert 
    expect(screen.getByRole('button')).toBeInTheDocument();
})

// addToList={addToList}  