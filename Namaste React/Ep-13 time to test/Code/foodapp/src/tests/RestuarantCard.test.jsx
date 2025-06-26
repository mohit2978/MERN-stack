import { render, screen } from "@testing-library/react";
import {describe,it,expect} from "vitest";
import "@testing-library/jest-dom/vitest"
import RestuarantCard from "../Body/RestuarantCard.jsx";
import MOCK_DATA from "./mockData/ResCardDataMock.json";
import {BrowserRouter} from "react-router";

it("should render RestaurantCard component with props Data", () => {
    render(
        <BrowserRouter>
        <RestuarantCard data={MOCK_DATA} />
            </BrowserRouter>);

    const name = screen.getByText("Spice Garden");

    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {

});