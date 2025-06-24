/* eslint-env vitest */
import React from "react";
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';
import {describe,it,expect} from "vitest";
import "@testing-library/jest-dom/vitest"
import appStore from "../utils/appStore.js";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router";

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

});