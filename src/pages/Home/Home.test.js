import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('RendeHomePage', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home page/i);
  expect(linkElement).toBeInTheDocument();
});
