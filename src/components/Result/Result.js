import React, { useContext, useEffect } from 'react';

import { Row, Col, Label, Value, Title, Wrapper } from './styles';
import { IMCContext } from '../../contexts/IMCContext'
import Container from '../Container/Container';

export default function Result() {
    const context = useContext(IMCContext)

    if (!context.loading) return null
    else {
        return (
            <Container>
                <Wrapper>
                    <Title>Resultado</Title>
                    <Row>
                        <Col>
                            <Label>IMC</Label>
                            <Value>{context.imc.imc}</Value>
                        </Col>
                        <Col>
                            <Value position="right">{context.imc.mensage}</Value>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
        );
    }
}
