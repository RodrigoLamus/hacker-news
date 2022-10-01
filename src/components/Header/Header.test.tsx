import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header/>', () => {
  test('rendering component', () => {
    render(<Header title="HACKER NEWS" />);

    expect(screen.getByText('HACKER NEWS')).toBeDefined();
  });
});
