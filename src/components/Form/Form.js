import React, { useState, useContext } from 'react';
import Container from '../Container/Container'
import FloatInput from '../FloatInput/FloatInput';
import Button from '../Button/Button';
import { IMCContext } from '../../contexts/IMCContext';

// import { Container } from './styles';

export default function Form() {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const context = useContext(IMCContext)

    const handlerPeso = e => {
        setPeso(e)
    }

    const handlerAltura = e => {
        setAltura(e)
    }

    const handlerButton = () => {
        context.calcImc(peso, altura)
    }

    return (
        <Container>
            <FloatInput id="peso" label="Peso (Kg)" onChange={handlerPeso} />
            <br></br>
            <FloatInput id="altura" label="Altura (cm)" onChange={handlerAltura} />
            <Button onClick={handlerButton} />
        </Container>
    );
}
