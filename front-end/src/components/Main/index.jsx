// Imports
import React, { useState } from "react";

// Styled Components
import { BodyS, ButtonS, ButtonsS, Container, Data, DataD, DivTwo, Forms, Infos, InputAge, InputS, Register, Table, Title } from "./style";


// Functional Component
export const Main = () => {
    // Variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [className, setClassName] = useState('');
    const [registration, setRegistration] = useState('');

    // Functions
    function add() {
        console.log('Adicionei')
    }

    function update() {
        console.log('Atualizei')
    }

    function remove() {
        console.log('Deletei')
    }

    function sendData(){
        setAge()
    }

    // Data
    const data = [
        {
            name: 'Gabriel',
            lastName: 'Santana',
            age: 20,
            email: 'gabriel.santana@uscsonline.com.br',
            class: '3bn',
            registration: 13245
        },
        {
            name: 'Matheus',
            lastName: 'Santana',
            age: 20,
            email: 'gabriel.santana@uscsonline.com.br',
            class: '3bn',
            registration: 13245
        },
        {
            name: 'Lucas',
            lastName: 'Santana',
            age: 20,
            email: 'gabriel.santana@uscsonline.com.br',
            class: '3bn',
            registration: 13245
        },
    ]

    // Rendering
    return (
        <BodyS>
            <Title>Registro de Alunos</Title>
            <Container>
                <Forms>
                    <DivTwo>
                        <InputS placeholder="Nome" type="text" onChange={(e) => { setFirstName(e.target.value) }}  value={firstName}/>
                        <InputS placeholder="Sobrenome" type="text" onChange={(e) => { setlastName(e.target.value) }}  value={lastName}/>
                        <InputAge placeholder="Idade" type="number" onChange={(e) => { setAge(e.target.value) }} value={age}/>
                    </DivTwo>
                    <InputS placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email}/>
                    <DivTwo>
                        <InputS placeholder="Turma" type="text" onChange={(e) => { setClassName(e.target.value) }} value={className}/>
                        <InputS placeholder="Matricula" type="text" onChange={(e) => { setRegistration(e.target.value) }} value={registration}/>
                    </DivTwo>
                </Forms>
                <Register>Registros :</Register>
                <Table>
                    {data.map((student, index) => {
                        return (
                            <DataD onClick={() => {
                                setFirstName(student.name);
                                setlastName(student.lastName);
                                setAge(student.age);
                                setEmail(student.email);
                                setClassName(student.class);
                                setRegistration(student.registration);

                                console.log(firstName)
                            }}>
                                <Data>
                                    <Infos>Nome:</Infos>
                                    <p>{student.name}</p>
                                </Data>
                                <Data>
                                    <Infos>Sobrenome:</Infos>
                                    <p>{student.lastName}</p>
                                </Data>
                                <Data>
                                    <Infos>Idade:</Infos>
                                    <p>{student.age}</p>
                                </Data>
                                <Data>
                                    <Infos>Email:</Infos>
                                    <p>{student.email}</p>
                                </Data>
                                <Data>
                                    <Infos>Turma:</Infos>
                                    <p>{student.class}</p>
                                </Data>
                                <Data>
                                    <Infos>Matricula:</Infos>
                                    <p>{student.registration}</p>
                                </Data>
                            </DataD>
                        )
                    })}
                </Table>
                <ButtonsS>
                    <ButtonS onClick={add}>Adicionar</ButtonS>
                    <ButtonS onClick={update}>Editar</ButtonS>
                    <ButtonS onClick={remove}>Excluir</ButtonS>
                </ButtonsS>
            </Container>
        </BodyS>
    )
}