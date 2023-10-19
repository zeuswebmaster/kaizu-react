import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<App />);
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
