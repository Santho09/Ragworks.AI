import React, { useState } from 'react';
import { Button, Input, Modal, Card } from './components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputError(false);
  };

  const handleCardClick = () => {
    alert('Card clicked!');
  };

  const validateInput = () => {
    if (!inputValue.trim()) {
      setInputError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInput()) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Component Library Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Production-ready React components with TypeScript, Storybook, and comprehensive testing
          </p>
        </div>

        {/* Button Section */}
        <Card title="Button Component" subtitle="Various button styles and states" className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        {/* Input Section */}
        <Card title="Input Component" subtitle="Form inputs with validation states" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Name"
              placeholder="Enter your name"
              value={inputValue}
              onChange={handleInputChange}
              error={inputError}
              helperText={inputError ? "Name is required" : "Please enter your full name"}
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              success
              helperText="Email format is valid"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Input
              label="Disabled Input"
              value="Cannot edit this"
              disabled
            />
          </div>
          <div className="mt-6">
            <Button onClick={handleSubmit}>
              Submit Form
            </Button>
          </div>
        </Card>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card 
            title="Hoverable Card" 
            subtitle="Hover to see effect"
            hoverable
          >
            <p>This card has a subtle hover effect that lifts it up slightly.</p>
          </Card>

          <Card 
            title="Clickable Card" 
            subtitle="Click or press Enter"
            clickable
            onClick={handleCardClick}
          >
            <p>This card can be clicked and is fully keyboard accessible.</p>
          </Card>

          <Card 
            title="Feature Card" 
            subtitle="With footer actions"
            hoverable
            footer={
              <div className="flex gap-2">
                <Button variant="outline" size="small">Learn More</Button>
                <Button size="small">Get Started</Button>
              </div>
            }
          >
            <p>Cards can include footer content like action buttons.</p>
          </Card>
        </div>

        {/* Modal Demo Button */}
        <div className="text-center">
          <Button onClick={() => setIsModalOpen(true)} size="large">
            Open Modal Demo
          </Button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Welcome!"
          size="medium"
        >
          <div className="space-y-4">
            <p>
              Congratulations! You've successfully interacted with our component library.
            </p>
            <p>
              This modal demonstrates:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Proper focus management</li>
              <li>Keyboard navigation (try Tab and Escape)</li>
              <li>Overlay click to close</li>
              <li>Smooth animations</li>
              <li>Mobile-responsive design</li>
            </ul>
            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Got it!
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;