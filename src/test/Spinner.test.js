/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/Spinner';

test('debe renderizarse el componente spinner', () => {
  render(<Spinner />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});
