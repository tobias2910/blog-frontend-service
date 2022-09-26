import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, beforeEach, expect, it } from '@jest/globals';
import Button from '@components/ui/Button';

describe('Button', () => {
  let clickCounter = 0;

  beforeEach(() => {
    const handleClick = () => {
      clickCounter += 1;
    };
    render(
      <Button handleOnClick={handleClick} ariaLabel="testButton">
        <div>Children</div>
      </Button>
    );
  });

  it('can be clicked', () => {
    const button = screen.getByLabelText('testButton');

    fireEvent.click(button);

    expect(clickCounter).toBe(1);
  });

  it('renders the children', () => {
    const childElement = screen.getByText('Children');

    expect(childElement).toBeDefined();
  });
});
