import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import Cardcomponent from "./Cardcomponent.js";
import {test, expect, jest} from "@jest/globals";

//this will test whether the component renders using .toBeInTheDocument matcher



//Write test 
test("tests that AddItem button renders", function () {
    //const addToList = jest.fn();  //not sure about this?
    //Arrange
    render(<Cardcomponent />) //buttonText?
    //Act 
        //do we actually need this stage for checking it renders?
    //Assert 
    expect(screen.getByRole('button')).toBeInTheDocument();
})

// addToList={addToList}  