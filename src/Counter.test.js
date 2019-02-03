import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup)

test('Counter increments the count', () => {
  const { container, getByText, getByTestId } = render(<Counter />);
  const button = getByText('Up')
  const count = getByTestId('count');
  fireEvent.click(button);
  expect(count.textContent).toBe('1');
});

test('Counter decrements the count', () => {
  const { container, getByText, getByTestId } = render(<Counter />);
  const button = getByText('Down')
  const count = getByTestId('count');
  fireEvent.click(button);
  fireEvent.click(button);
  expect(count.textContent).toBe('-2');
});
