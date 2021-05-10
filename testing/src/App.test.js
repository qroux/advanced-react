import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct text', () => {
  render(<App />);
  const title = screen.getByText('Hello World');
  expect(title.innerHTML).toContain('Hello World');
});
