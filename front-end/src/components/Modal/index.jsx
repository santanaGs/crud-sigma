// Imports
import React from "react"
import { Background, ButtonS, Content, Text } from "./styles"

// Functional Components
export const ModalS = (props) => {

    // Rendering
    return (
        <Background>
            <Content>
                <Text>{props.text}</Text>
                <ButtonS onClick={props.click}>Concluído</ButtonS>
            </Content>
        </Background>
    )
}