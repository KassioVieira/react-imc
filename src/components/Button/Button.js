import React from 'react';

import { Wrapper } from './styles';

export default function Button({onClick}) {
  return (
    <Wrapper onClick={onClick}>
        Calcular
    </Wrapper>
  );
}
