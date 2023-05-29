import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test('should render Register component correctly', () => {
    render(<App />);
    const element = screen.getByRole("heading", {
      level: 2
    });
    expect(element).toBeInTheDocument();
}); 

test('should show message when register button is clicked.', () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
});