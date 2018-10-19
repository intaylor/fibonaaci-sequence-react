import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fs from './Fs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('get fibonaaci sequence with numbers', () => {
  expect(Fs(0)).toEqual(undefined);
  expect(Fs(1)).toEqual('0');
  expect(Fs(2)).toEqual('0, 1');
  expect(Fs(10)).toEqual('0, 1, 1, 2, 3, 5, 8, 13, 21, 34');
});

it('get fibonaaci sequence with non numbers', () => {
  expect(Fs('wer')).toEqual(undefined);
});
