import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is the modal content. You can put any content here.</p>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="Modal Title">
      <p>This modal has a title in the header.</p>
    </ModalWrapper>
  ),
};

export const Small: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="Small Modal" size="small">
      <p>This is a small modal.</p>
    </ModalWrapper>
  ),
};

export const Large: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="Large Modal" size="large">
      <p>This is a large modal with more space for content.</p>
      <p>You can add multiple paragraphs and other elements here.</p>
    </ModalWrapper>
  ),
};

export const NoCloseButton: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="No Close Button" showCloseButton={false}>
      <p>This modal doesn't have a close button in the header.</p>
      <Button onClick={() => {}}>Custom Close Action</Button>
    </ModalWrapper>
  ),
};

export const NoOverlayClose: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="No Overlay Close" closeOnOverlayClick={false}>
      <p>This modal won't close when clicking the overlay.</p>
    </ModalWrapper>
  ),
};