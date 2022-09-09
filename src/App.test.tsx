import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App component', () => {
  it('Renders "Hello World"', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });

  it('Renders "Not Found" if the path is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/NotFound']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
