import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Basic test suite for the App component
 *
 * Currently contains a simple smoke test to verify the App component renders
 * without crashing. This is a minimal test that should be expanded with:
 * - Route testing
 * - Component rendering verification
 * - Interaction tests
 */

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
