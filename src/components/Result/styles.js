import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.span`
    font-size: 25pt;
    color: #007ac1;
    text-align: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Col = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
`

export const Label = styled.span`
    color: #007ac1;
    font-size: 18pt;
    font-family: sans-serif;
    text-align: ${({ position }) => position};
`

export const Value = styled(Label)`
    font-size: 20pt;
`