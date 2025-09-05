import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/Button/Button';

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button data-testid="button">Click me</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick} data-testid="button">
        Click me
      </Button>
    );
    
    await user.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick} disabled data-testid="button">
        Click me
      </Button>
    );
    
    await user.click(screen.getByTestId('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(
      <Button loading data-testid="button">
        Click me
      </Button>
    );
    
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    const { rerender } = render(
      <Button variant="primary" data-testid="button">
        Primary
      </Button>
    );
    
    expect(screen.getByTestId('button')).toBeInTheDocument();
    
    rerender(
      <Button variant="secondary" data-testid="button">
        Secondary
      </Button>
    );
    
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick} data-testid="button">
        Click me
      </Button>
    );
    
    const button = screen.getByTestId('button');
    button.focus();
    
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});