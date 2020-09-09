import React from 'react';
import { Button, PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button';

function App() {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <PrimaryButton warning>Primary Button</PrimaryButton>
      <PrimaryButton small>Primary Button</PrimaryButton>
      <PrimaryButton large>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>

    </div>
  );
}

export default App;
