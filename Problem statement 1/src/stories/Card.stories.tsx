import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p>This is the card content. You can add any content here.</p>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: (
      <p>This card has a title in the header.</p>
    ),
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: (
      <p>This card has both a title and subtitle.</p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: (
      <p>This card has a footer with action buttons.</p>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    subtitle: 'Hover over this card to see the effect',
    hoverable: true,
    children: (
      <p>This card will lift up when you hover over it.</p>
    ),
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'This card can be clicked',
    clickable: true,
    children: (
      <p>This card acts like a button and can be clicked or activated with keyboard.</p>
    ),
    onClick: fn(),
  },
};

export const FullExample: Story = {
  args: {
    title: 'Product Card',
    subtitle: 'Premium subscription',
    hoverable: true,
    children: (
      <div>
        <p>Get access to all premium features including:</p>
        <ul style={{ margin: '16px 0', paddingLeft: '20px' }}>
          <li>Unlimited projects</li>
          <li>Priority support</li>
          <li>Advanced analytics</li>
        </ul>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6' }}>$29/month</p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" style={{ flex: 1 }}>Learn More</Button>
        <Button style={{ flex: 1 }}>Subscribe</Button>
      </div>
    ),
  },
};