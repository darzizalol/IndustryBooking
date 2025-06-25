import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CalenderPage from "../../Pages/CalendarPage";
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe("CalenderPage", () => {
    it("should toggle between customer and business view", () => {
        render(
            <MemoryRouter>
                <CalenderPage />
            </MemoryRouter>
        );

        const button = screen.getByText('Customer View');

        fireEvent.click(button);
        expect(button).toHaveTextContent('Business View');

        fireEvent.click(button);
        expect(button).toHaveTextContent('Customer View');
    });

    it("should render a Calendar component correctly", () => {
        render(
            <MemoryRouter>
                <CalenderPage />
            </MemoryRouter>
        );

        const inner = screen.getByTestId('inner-component');
        expect(inner).toBeInTheDocument();
    })

})