import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hola que tal', () => {
  render(<App />);
  const headerElement = screen.getByText(/¡Obtén acceso ilimitado a tus canales favoritos a través de nuestra app ahora!/i);
  expect(headerElement).toBeInTheDocument();
});
