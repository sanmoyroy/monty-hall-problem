import { render, screen } from '@testing-library/react';
import SimulationForm from './SimulationForm';

test('renders number of simulations input field', () => {
  render(<SimulationForm />);
});