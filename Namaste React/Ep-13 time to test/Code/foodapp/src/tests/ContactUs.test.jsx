import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs/ContactUs.jsx";

describe("Contact Us Page Test Case", () => {


    it("Should load ContactUs us component", () => {
        render(<ContactUs />);

        const headings = screen.getAllByRole("heading");
        // Assertion
        expect(headings[0]).toBeInTheDocument();
    });

    it("Should load button inside ContactUs component", () => {
        render(<ContactUs />);

        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    });

    it("Should load input name inside ContactUs component", () => {
        render(<ContactUs />);

        const inputName = screen.getByPlaceholderText("Your Name");

        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it("Should load 2 input boxes on the ContactUs component", () => {
        render(<ContactUs />);

        // Querying
        const inputBoxes = screen.getAllByRole("textbox");

        //console.log(inputBoxes.length);

        // Assertion

        expect(inputBoxes.length).toBe(3);
    });
});