import styled from 'styled-components'

export const FloatContainer = styled.div`
  border-bottom-style: double;
  border-bottom-color: ${({ focused }) => focused ? '#007ac1' : '#ccc'};
  border-bottom-width: 2px;
  padding: 0 8px;
  position: relative;
  width: 70%;
  
  input  {
    border: none;
    font-size: 16px;
    margin: 16px 0 10px;
    outline: 0;
    width: 100%
  }
`

export const Label = styled.label`
  font-size: 16px;
  position: absolute;
  transform-origin: top left;
  transform: translate(0, 16px) scale(1);
  transition: all .1s ease-in-out;

  ${props => props.focused && `
      transform: translate(0, 4px) scale(.75);
      color: #007ac1
  `}

  ${props => props.hasValue && `
        transform: translate(0, 4px) scale(.75);
        color: #007ac1
    `}
`

