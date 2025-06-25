/* eslint-env vitest */
import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import Header from '../Header/Header.jsx';
import {describe,it,expect} from "vitest";
import "@testing-library/jest-dom/vitest"
import appStore from "../utils/appStore.js";
import {Provider} from "react-redux";
import {BrowserRouter, MemoryRouter} from "react-router";

describe('renders header', () => {
    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByText("Home")).toBeInTheDocument();
    })

    it("Should render Header Component with a Cart items 0 ", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>Add commentMore actions
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart - (0 items)");

        expect(cartItems).toBeInTheDocument();
    });


    it("Should change Login Button to Logout on click", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
    </BrowserRouter>
    );

        const loginButton = screen.getByRole("button", { name: "Login" });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        fireEvent.click(loginButton);

        expect(logoutButton).toBeInTheDocument();
    });

});