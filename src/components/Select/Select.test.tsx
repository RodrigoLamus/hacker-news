import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';

const mockOptions = ['Angular', 'React', 'Vue'];

describe('<Select/>', () => {
  test('rendering component', () => {
    render(<Select options={mockOptions} />);

    expect(screen.getByText('Select your news')).toBeDefined();
  });

  test('dropdown button click', () => {
    render(<Select options={mockOptions} />);
    const mockFunction = jest.fn();

    const dropdownButton = screen.getByRole('button');

    dropdownButton.setAttribute('onClick', 'mockFunction');
    dropdownButton.onclick = mockFunction;

    fireEvent.click(dropdownButton);

    expect(mockFunction.mock.calls).toHaveLength(1);
  });
});
