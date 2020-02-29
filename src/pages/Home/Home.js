import React from 'react';
import Header from '../../components/Header/Header'
import { Wrapper } from './styles';
import Result from '../../components/Result/Result';

import IMCProvider from '../../contexts/IMCContext'
import Form from '../../components/Form/Form';


export default function Home() {
    return (
        <IMCProvider>
            <Header title='IMC' />
            <Wrapper>
                <Form></Form>
                <br></br>
                <Result></Result>
            </Wrapper>
        </IMCProvider>
    );
}
