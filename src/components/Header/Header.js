import React from 'react';

import { Wrapper } from './styles';

export default function Header({ title }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
}
