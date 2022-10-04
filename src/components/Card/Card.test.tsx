import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { CardInterface } from '../../global/interfaces';

describe('<Card/>', () => {
  const mockData: CardInterface = {
    id: 1,
    author: 'tester',
    createdAt: new Date(),
    url: 'test/url',
    title: 'test',
  };

  test('rendering component', () => {
    render(<Card card={mockData} fav={true} />);

    expect(screen.getByText('test')).not.toBeNull();
  });

  test('rendering children', () => {
    render(<Card card={mockData} fav={true} />);

    const firstChild = screen.getByRole('list');
    expect(firstChild).not.toBeNull();

    const secondChild = screen.getByTitle('heartIcon');
    expect(secondChild).not.toBeNull();
  });
});
