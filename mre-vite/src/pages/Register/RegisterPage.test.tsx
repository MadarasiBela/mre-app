import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from './RegisterPage';
import { vi } from 'vitest';
//import LoginPage from '../Login/LoginPage';

vi.mock('./registerUser', () => ({
  registerUser: vi.fn(() => Promise.resolve({ success: true })),
}));

const myrandomize  = (base: string): string => {
  return base + Math.floor(Math.random() * 10000);
};

describe('RegisterPage', () => {
  test('shows error if fields are empty', async () => {
    const onNavigate = vi.fn();
    render(<RegisterPage onNavigate={onNavigate} />);
    fireEvent.click(screen.getByText('OK'));
    expect(onNavigate).not.toHaveBeenCalled();
  });

  test('navigates to Login on successful registration', async () => {
    const onNavigate = vi.fn();
    // const apiUrl = '/api';
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    } as any);

    const testRandomName1 = myrandomize ('TestUser');
    const testRandomFullName1 = myrandomize ('Test Name');

    render(<RegisterPage onNavigate={onNavigate} />);
    fireEvent.change(screen.getByPlaceholderText(/User name/i), { target: { value: testRandomName1 } });
    fireEvent.change(screen.getByPlaceholderText(/Full name/i), { target: { value: testRandomFullName1 } });
    fireEvent.click(screen.getByText('OK'));
    await waitFor(() => {
      expect(onNavigate).toHaveBeenCalledWith('Login');
    });
  });

  test('shows error on failed registration', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
      json: async () => ({ success: false, message: 'Registration failed!' }),
    } as any);

    // const myrandomize2  = (base: string): string => {
    //   return base + Math.floor(Math.random() * 10000);
    // };
    
    const onNavigate = vi.fn();
    render(<RegisterPage onNavigate={onNavigate} />);
    const testRandomName = myrandomize ('TestUser');
    const testRandomFullName = myrandomize ('Test Name');
    fireEvent.change(screen.getByPlaceholderText(/User name/i), { target: { value: testRandomName } });
    fireEvent.change(screen.getByPlaceholderText(/Full name/i), { target: { value: testRandomFullName } });
    fireEvent.click(screen.getByText('OK'));
    expect(await screen.findByText(/Network or server error/i)).toBeInTheDocument();
    expect(onNavigate).not.toHaveBeenCalled();
  });
});