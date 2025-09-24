import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  test('renders welcome message and instructions', () => {
    render(<WelcomePage />);
    expect(screen.getByText(/Welcome to the Medical Record Editor/i)).toBeInTheDocument();
    expect(screen.getByText(/Please select a menu item/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Welcome to the Medical Record Editor/i)).toHaveLength(1);
  });
});