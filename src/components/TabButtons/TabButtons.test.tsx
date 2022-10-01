import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { TabButtons } from './TabButtons';

describe('<TabButtons/>', () => {
  test('rendering component', () => {
    render(<TabButtons />);

    expect(screen.getByRole('tab')).toBeDefined();
  });

  test('tab button click', () => {
    render(<TabButtons />);
    const mockFunction = jest.fn();

    const allButton = screen.getByText('All');
    const favesButton = screen.getByText('My faves');

    allButton.setAttribute('onClick', 'mockFunction');
    allButton.onclick = mockFunction;
    favesButton.setAttribute('onClick', 'mockFunction');
    favesButton.onclick = mockFunction;

    fireEvent.click(allButton);
    fireEvent.click(favesButton);

    expect(mockFunction.mock.calls).toHaveLength(2);
  });
});
