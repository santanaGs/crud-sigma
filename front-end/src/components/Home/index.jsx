// Imports
import React from "react";

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Styled Components
import { 
    Background, 
    ButtonS, 
    Content, 
    DivS, 
    Title 
} from "./styles";

// Functional Component
export const Home = () => {

    // Navigate
    const navigate = useNavigate();

    // Rendering
    return (
        <Background>
            <Content>
                <Title>O que você vai cadastrar?</Title>
                <DivS>
                    <ButtonS onClick={() => { navigate('/doctor') }}>Médico</ButtonS>
                    <ButtonS>Paciente</ButtonS>
                </DivS>
            </Content>
        </Background>
    )
}