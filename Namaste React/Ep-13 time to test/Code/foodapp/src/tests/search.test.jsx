import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mockData/mockList.json";
import  MOCK_SEARCH_RESULT from "./mockData/GreenBowl.json";
import { BrowserRouter } from "react-router";
import Body from "../Body/Body.jsx";
import { vi } from "vitest";
import {act} from "react";

// Reset before each test
beforeEach(() => {
    vi.restoreAllMocks();
});

global.fetch = vi.fn((url) => {
    if (url.includes("/api/res/search")) {
        // Mock search result (e.g., Green Bowl)
        return Promise.resolve({
            json: () => Promise.resolve(MOCK_SEARCH_RESULT),
        });
    } else if (url.includes("/api/res")) {
        // Mock initial list
        return Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA),
        });
    }
});

it("Should Search Res List for Green bowl text input ", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(11);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Green Bowl" } });

    // ✅ Wrap click in act
    await act(async () => {
        fireEvent.click(searchBtn);
    });

    // ✅ Use findAllByTestId to wait for UI to update
    const cardsAfterSearch = await screen.findAllByTestId("resCard");
    console.log(cardsAfterSearch.length);
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(11);

    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Resturant",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(9);
});