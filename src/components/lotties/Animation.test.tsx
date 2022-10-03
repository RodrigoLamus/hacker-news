import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Animation } from './Animation';

describe('<Animation/>', () => {
  test('rendering component', () => {
    render(<Animation type="search" height={300} width={300} title={'test'} />);

    expect(screen.getByText('test')).toBeDefined();
  });
});
