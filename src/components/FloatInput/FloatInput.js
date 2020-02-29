import React, { useState } from 'react';

import { FloatContainer, Label } from './styles';

export default function FloatInput({ label, onChange, id }) {
    const [value, setValue] = useState()
    const [focused, setFocus] = useState(false)

    const handlerInput = e => {
        let valor = e.target.value.replace(/\D/g, '')
        setValue(valor)
        onChange(valor)
    }

    const handlerFocus = () => {
        setFocus(!focused)
    }

    return (
        <FloatContainer focused={focused}>
            <Label for={id} active={true} focused={focused} hasValue={value}>{label}</Label>
            <input id={id} type="number" onChange={handlerInput} value={value} onFocus={handlerFocus} onBlur={handlerFocus} />
        </FloatContainer>
    );
}
