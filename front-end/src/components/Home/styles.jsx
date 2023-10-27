// Imports
import styled from 'styled-components'

// Styled Components
export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(293deg, #0B4A50 0%, #44A1A0 96.78%);
    display: flex;
    justify-content: center;
    align-items: center;
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

export const Title = styled.h1`
color: #000;
font-family: Quicksand;
font-size: 2.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const DivS = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;
`
    

export const ButtonS = styled.button`
    width: 15rem;
    height: 5.3125rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #0B4A50;
    color: #FFF;
    font-family: Quicksand;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: .3s;

    &:hover{
        background-color: #072e31;
        cursor: pointer;
    }
`

export const Logo = styled.img`
    width: 250px;
    height: auto;
`