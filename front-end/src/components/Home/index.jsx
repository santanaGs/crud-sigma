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
    Logo, 
    Title 
} from "./styles";

// Image
import logo from '../../assets/sigma_logo.png'

// Functional Component
export const Home = () => {

    // Navigate
    const navigate = useNavigate();

    // Rendering
    return (
        <Background>
            <Content>
                <Logo src={logo} alt="" />
                <Title>O que você vai cadastrar?</Title>
                <DivS>
                    <ButtonS onClick={() => { navigate('/doctor') }}>Médico</ButtonS>
                    <ButtonS onClick={() => {navigate('/paciente')}}>Paciente</ButtonS>
                </DivS>
            </Content>
        </Background>
    )
}