import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./index";

describe("Todo Tests", () => {

    let button, input;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
        
    });

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test('Input ve button dökümanda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('Inputa girilen data liste eklenmeli', () => {
        // fill input
        const name = "Test";
        fireEvent.type(input, name);

        // click button
        fireEvent.click(button);

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    });

});
