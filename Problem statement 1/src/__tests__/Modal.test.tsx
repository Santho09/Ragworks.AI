import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../components/Modal/Modal';

describe('Modal Component', () => {
  it('renders when open', () => {
    render(
      <Modal isOpen onClose={() => {}} data-testid="modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} data-testid="modal">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    
    render(
      <Modal isOpen onClose={handleClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    
    await user.click(screen.getByLabelText('Close modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    
    render(
      <Modal isOpen onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    );
    
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    
    render(
      <Modal isOpen onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    );
    
    await user.click(screen.getByTestId('modal-overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when closeOnOverlayClick is false', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    
    render(
      <Modal isOpen onClose={handleClose} closeOnOverlayClick={false}>
        <p>Modal content</p>
      </Modal>
    );
    
    await user.click(screen.getByTestId('modal-overlay'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with title', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test Title">
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});