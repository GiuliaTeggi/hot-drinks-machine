import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Options from '../components/Options';
import Steps from '../components/Steps';

afterEach(cleanup);

describe('Testing Options component', () => {
  const { container } = render(<Options options={['Lemon Tea', 'Coffee', 'Chocolate']} select={() => { }} />);
  const buttons = container.querySelectorAll('button');

  test('Options component renders three buttons', () => {
    expect(buttons.length).toBe(3);
  });

  test('First button text is Lemon Tea', () => {
    const firstButton = buttons[0];
    expect(firstButton.textContent).toBe('Lemon Tea');
  });

  test('Second button text is Coffee', () => {
    const secondButton = buttons[1];
    expect(secondButton.textContent).toBe('Coffee');
  });

  test('Third button text is Chocolate', () => {
    const thirdButton = buttons[2];
    expect(thirdButton.textContent).toBe('Chocolate');
  });
});

describe('Testing Steps component', () => {
  test('Displays list of steps when passed props', () => {
    const { container } = render(
      <Steps steps={['Boil some water',
        'Steep the water in the tea',
        'Pour tea in the cup',
        'Add lemon']}
      />,
    );
    expect(container.innerHTML).toBe('<li>Boil some water</li><li>Steep the water in the tea</li><li>Pour tea in the cup</li><li>Add lemon</li>');
  });
});
