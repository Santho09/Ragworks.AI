import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../components/Input/Input';

describe('Input Component', () => {
  it('renders with label', () => {
    render(<Input label="Test Label" data-testid="input" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Input onChange={handleChange} data-testid="input" />);
    
    await user.type(screen.getByTestId('input'), 'test');
    expect(handleChange).toHaveBeenCalledTimes(4); // Once for each character
  });

  it('shows helper text', () => {
    render(
      <Input 
        helperText="This is helper text" 
        data-testid="input"
      />
    );
    
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('shows error state', () => {
    render(
      <Input 
        error 
        helperText="This is an error" 
        data-testid="input"
      />
    );
    
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows success state', () => {
    render(
      <Input 
        success 
        helperText="This is success" 
        data-testid="input"
      />
    );
    
    expect(screen.getByText('This is success')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Input label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="input" />);
    expect(screen.getByTestId('input')).toBeDisabled();
  });
});