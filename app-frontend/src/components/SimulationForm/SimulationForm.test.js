import { render, screen } from '@testing-library/react';
import SimulationForm from './SimulationForm';

test('renders number of simulations input field', () => {
  const data = {'results': [], totalWins: 0};
  const setData = () => {};
  render(<SimulationForm setData={setData}/>);
  const numberOfSimulationTextBox = screen.getAllByPlaceholderText('Number of simulations');
  expect(numberOfSimulationTextBox).toBeTruthy();
});