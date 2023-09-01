import React from 'react';
import {render} from '@testing-library/react-native';
import TextComponent from '../src/components/TextComponent';

describe('TextComponent', () => {
  it('renders children text correctly', () => {
    const {getByText} = render(<TextComponent>Hello, World!</TextComponent>);
    const textElement = getByText('Hello, World!');

    expect(textElement).toBeDefined();
  });
});
