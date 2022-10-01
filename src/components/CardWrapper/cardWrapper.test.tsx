import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { CardWrapper } from './CardWrapper';
import { CardInterface } from '../../interfaces';

describe('<CardWrapper/>', () => {
  const mockData: CardInterface[] = [
    {
      id: 1,
      author: 'tester',
      createdAt: new Date(),
      url: 'test/url',
      title: 'test',
    },
  ];

  test('rendering component', () => {
    render(<CardWrapper cardList={mockData} />);

    expect(screen.getByRole('table')).toBeDefined();
  });
});
