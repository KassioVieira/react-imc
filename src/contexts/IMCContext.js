import React, { useState, createContext } from 'react'

export const IMCContext = createContext()

const IMCProvider = ({ children }) => {
    const [imc, setImc] = useState({ imc: null, mensage: '' })
    const [loading, setLoading] = useState(false)

    const calcImc = (peso, altura) => {
        setLoading(true)
        const alturaMetro = altura / 100;
        const newImc = (peso / (alturaMetro * alturaMetro))
        setImc({ imc: newImc.toFixed(2), mensage: messages(newImc.toFixed(2)) })
    }

    function messages(imc) {
        if (imc <= 16 || imc > 16 && imc < 16.9) {
            return "Muito abaixo do peso"
        } else if (imc >= 17 && imc <= 18.49) {
            return "Abaixo do peso"
        } else if (imc >= 18.50 && imc <= 24.99) {
            return "Peso normal"
        } else if (imc >= 25 && imc <= 29.99) {
            return "Acima do peso"
        } else if (imc >= 30 && imc <= 34.99) {
            return "Obesidade Grau I"
        } else if (imc >= 35 && imc <= 40) {
            return "Obesidade Grau II"
        } else if (imc > 40) {
            return "Obesidade Grau III"
        }
    }

    return (
        <IMCContext.Provider value={{ imc, calcImc, loading }}>
            {children}
        </IMCContext.Provider>
    )
}

export default IMCProvider