// Imports
import styled from "styled-components";

// Styled Components
export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #0000005e;
    position: fixed;
    top: 0;
    left: 0;
`

export const Content = styled.div`
    width: 40rem;
    padding: 1rem;
    height: 34.375rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: rgb(211,208,216);
background: linear-gradient(54deg, rgba(211,208,216,1) 0%, rgba(248,249,251,1) 60%);
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const Text = styled.p`
    font-weight: bold;
    font-size: 2rem;
`

export const ButtonS = styled.button`
    padding: 1.25rem;
    width: 70%;
    background-color: #0B4A50;
    border-radius: 1rem;
    border: none;
    transition: .3s;

    color: #fff;
    font-weight: bold;

    &:hover{
        background-color: #44A1A0;
        cursor: pointer;
    }
`