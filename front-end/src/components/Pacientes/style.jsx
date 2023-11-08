// Imports
import styled from 'styled-components'

// Styled Components
export const Title = styled.h1`
    font-family: 'Fredoka', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #efefef;
    margin-bottom: -2rem;
`


export const Container = styled.div`
    width: 1220px;
    margin: 0 auto;
    background-color: #E8E7EF;
    border-radius: 1rem;
    height: 80%;
    font-family: 'Fredoka', sans-serif;
    padding: 2rem;
    box-shadow: 0px 4px 30px #0B4A50;
`

export const BodyS = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    background: linear-gradient(293deg, #0B4A50 0%, #44A1A0 96.78%);
`

export const Forms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputS = styled.input`
    height: 4rem;
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    background-color: #a2cabdc0;
    font-family: 'Fredoka', sans-serif;
    font-weight: 500;

    &::placeholder{
        color: #000;
    }
`

export const InputAge = styled.input`
    height: 4rem;
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    width: 50%;
    font-family: 'Fredoka', sans-serif;
    background-color: #a2cabdc0;
    font-size: 1rem;
    font-weight: 500;

    &::placeholder{
        color: #000;
    }
`

export const DivTwo = styled.div`
    display: flex;
    gap: 1rem;
`

export const Table = styled.div`
    height: 17rem;
    margin-top: 1rem;
    background-color: #a2cabdc0;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonsS = styled.div`
    display: flex;
    gap: 1rem;
`

export const ButtonS = styled.button`
    border: none;
    background-color: #a2cabdc0;
    padding: 1rem;
    border-radius: .5rem;
    color: #226250;
    font-family: 'Fredoka', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    transition: .3s;
    width: 13rem;

    &:hover{
        background-color: #205E51;
        cursor: pointer;
        color: #fff;
    }
`

export const Register = styled.h3`
    margin: 0;
    font-weight: 500;
    margin-top: 2%;
    color: #226250;
    font-weight: bold;
`

export const Data = styled.div`
    display: flex;
    gap: .5rem;
`
export const DataD = styled.button`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border: none;
    background-color: transparent;
    font-family: 'Fredoka', sans-serif;
    font-size: 1rem;
    border-bottom: 1px solid #37003B;

`

export const Infos = styled.p`

`

export const Teste = styled.div`

`

export const DivSButtonS = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    margin-top: 2rem;
`