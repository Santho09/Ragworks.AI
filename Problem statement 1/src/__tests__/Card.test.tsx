import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../components/Card/Card';

describe('Card Component', () => {
  it('renders with children', () => {
    render(
      <Card data-testid="card">
        <p>Card content</p>
      </Card>
    );
    
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with title and subtitle', () => {
    render(
      <Card title="Card Title" subtitle="Card Subtitle">
        <p>Card content</p>
      </Card>
    );
    
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Card footer={<button>Footer Button</button>}>
        <p>Card content</p>
      </Card>
    );
    
    expect(screen.getByText('Footer Button')).toBeInTheDocument();
  });

  it('calls onClick when clickable card is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Card clickable onClick={handleClick} data-testid="card">
        <p>Card content</p>
      </Card>
    );
    
    await user.click(screen.getByTestId('card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard navigation for clickable cards', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Card clickable onClick={handleClick} data-testid="card">
        <p>Card content</p>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    card.focus();
    
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('has correct accessibility attributes for clickable cards', () => {
    render(
      <Card clickable onClick={() => {}} data-testid="card">
        <p>Card content</p>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabindex', '0');
  });
});