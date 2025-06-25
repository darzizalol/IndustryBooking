import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import FormTemplate from '../FormTemplate';

// setBookingTemplate: React.Dispatch<React.SetStateAction<JSX.Element>>,
//     setListOfBookings: React.Dispatch<React.SetStateAction<BookingTemplate[]>>,
//     selectedDate: string,

describe("FormTemplate Component", () => {
    it("should create a form with text fields initialized properly", () => {
        render(<FormTemplate setBookingTemplate={() => null} setListOfBookings={() => null} selectedDate='2025-06-25' />);

        expect(screen.getByLabelText('First name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email address')).toBeInTheDocument();

        expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Hair Salon/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Tuition/i })).toBeInTheDocument();

    })
})