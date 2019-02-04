import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);
afterEach(() => {
  window.localStorage.removeItem('count')
});

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
  expect(count.textContent).toBe('-1');
});

test('reads and updates localStorage', () => {
  window.localStorage.setItem('count', 10);
  const { container, getByText, getByTestId, rerender } = render(<Counter />);
  const button = getByText('Up');
  const count = getByTestId('count');
  expect(count.textContent).toBe('10');
  fireEvent.click(button);
  expect(count.textContent).toBe('11');
  rerender(<Counter />);
  expect(window.localStorage.getItem('count')).toBe('11');
});
