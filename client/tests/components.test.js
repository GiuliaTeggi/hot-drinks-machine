import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import fetchMock from 'fetch-mock';
import Options from '../components/Options';
import Steps from '../components/Options';

afterEach(cleanup);

describe('Testing Options component', () => {
  const { container, getByTestId, debug } = render(<Options options={['Lemon Tea', 'Coffee', 'Chocolate']} select={() => { }} />);
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

  // test('Lemon Tea button onclick event fetches recipe steps', () => {
  //   const { container, debug } = render(<Steps steps={['Boil some water',
  //     'Steep the water in the tea',
  //     'Pour tea in the cup',
  //     'Add lemon']}
  //   />);
  //   debug(Steps);

  //   const mockResponse = [
  //     <React.Fragment>
  //       <li key="1">
  //         Boil some water
  //       </li>
  //       <li key="2">
  //         Steep the water in the tea
  //       </li>
  //       <li key="3">
  //         Pour tea in the cup'
  //       </li>
  //       <li key="4">
  //         Add lemon
  //       </li>
  //     </React.Fragment>,
  //   ];

  //   fetchMock.mock('/steps/Lemon%20Tea', mockResponse);
  //   fireEvent.click(buttons[0]);
  //   return waitForElement(() => debug(Steps));
  //   // getByTestId('output')).then(output =>
  //   //   expect(output.innerHTML).toEqual(mockResponse)
  //   // }
  // });
});
