import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Stopwatch from './Stopwatch';

afterEach(cleanup);

test('Stopwatch starts running and enables stop', () => {
  const { container, getByText, getByTestId } = render(<Stopwatch />);
  const button = getByTestId('start-one');
  const time = getByTestId('lapse-one');
  fireEvent.click(button);
  expect(button.textContent).toBe('Stop');
});

test('Stopwatch starts running and enables stop', () => {
  const { container, getByText, getByTestId } = render(<Stopwatch />);
  const button = getByTestId('start-one');
  const time = getByTestId('lapse-one');
  fireEvent.click(button);
  fireEvent.click(button);
  expect(button.textContent).toBe('Start');
});
