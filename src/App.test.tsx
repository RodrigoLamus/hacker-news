import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('rendering component', () => {
  render(<App />);

  expect(screen.getByText('Hacker News! Template')).not.toBeNull();
});
