# Ragworks.AI

# Ragworks UI Component Library

A reusable, accessible, and responsive React component library built with TypeScript and Tailwind CSS.

## Features

- **Reusable Components:** Button, Input, Card, Modal, and more.
- **TypeScript:** Full type safety and IntelliSense support.
- **Accessibility:** ARIA attributes, keyboard navigation, and focus management.
- **Responsive Design:** Mobile-first layouts with Tailwind CSS.
- **Tested:** Comprehensive unit tests with React Testing Library.
- **Storybook:** Interactive documentation and examples.

---

## Getting Started

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/ragworks.git
cd ragworks/Problem statement 1
npm install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

### Storybook

View interactive component documentation:

```bash
npm run storybook
```

### Running Tests

```bash
npm test
```

---

## Usage Example

Import and use components in your app:

```tsx
import { Button, Input, Card, Modal } from './src/components';

function App() {
  return (
    <Card title="Welcome">
      <Input placeholder="Type here..." />
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    </Card>
  );
}
```

---

## Accessibility

- All components use appropriate ARIA attributes.
- Keyboard navigation and focus management are implemented.
- Tested with screen readers.

---

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## License

MIT

---

## Project Structure

```
ragworks/
└── project/
    ├── src/
    │   ├── components/
    │   │   ├── Button/
    │   │   │   ├── Button.tsx
    │   │   │   ├── Button.styled.ts
    │   │   │   └── index.ts
    │   │   ├── Card/
    │   │   │   ├── Card.tsx
    │   │   │   ├── Card.styled.ts
    │   │   │   └── index.ts
    │   │   ├── Input/
    │   │   │   ├── Input.tsx
    │   │   │   ├── Input.styled.ts
    │   │   │   └── index.ts
    │   │   ├── Modal/
    │   │   │   ├── Modal.tsx
    │   │   │   ├── Modal.styled.ts
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   ├── stories/
    │   │   ├── Button.stories.tsx
    │   │   ├── Card.stories.tsx
    │   │   ├── Input.stories.tsx
    │   │   └── Modal.stories.tsx
    │   ├── __tests__/
    │   │   ├── Button.test.tsx
    │   │   ├── Card.test.tsx
    │   │   ├── Input.test.tsx
    │   │   └── Modal.test.tsx
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    │   └── index.html
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
```
---

## Contact

For questions or feedback, contact Santhosh-9176248181



