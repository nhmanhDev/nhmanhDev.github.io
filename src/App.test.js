import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand header', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/AI42E/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
