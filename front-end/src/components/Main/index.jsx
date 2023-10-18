// Imports
import React, { useState } from "react";

// Styled Components
import { BodyS, ButtonS, ButtonsS, Container, Data, DataD, DivTwo, Forms, Infos, InputAge, InputS, Register, Table, Title } from "./style";

// Axios
import axios from 'axios'

// updateEffect
import { useUpdateEffect } from "../../useUpdate";

// Functional Component
export const Main = () => {
    // Variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [id, setId] = useState(0);
    const [className, setClassName] = useState('');
    const [registration, setRegistration] = useState('');
    const [studentsData, setStudentsData] = useState([]);

    useUpdateEffect(() => {
        // Faça a solicitação Axios para buscar os dados dos alunos
        axios.get('http://localhost:3000/students')
            .then((res) => {
                // Atualize o estado com os dados da API
                setStudentsData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Functions
    function add() {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            class: className,
            registration: registration
        };

        // Verifique se todos os campos estão preenchidos
        if (firstName === '' || lastName === '' || email === '' || age === 0 || className === '' || registration === '') {
            console.log('Falta dados');
            return;
        }

        // Adicionando um aluno no banco de dados
        axios.post('http://localhost:3000/createUser', user, headers)
            .then((res) => {
                console.log('Cadastrado');
                // Atualize a lista de alunos após o cadastro
                setStudentsData([...studentsData, user]);

            })
            .catch((err) => {
                console.log(err);
            });
            setFirstName('');
            setlastName('');
            setAge(0);
            setEmail('');
            setClassName('');
            setRegistration('');

    }

    async function update() {
        const headers = {
            'headers': {
                // Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }

        const data = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age,
            class: className,
            registration: registration
        };


        await axios.put('http://localhost:3000/students', data, headers)
            .then((response) => {
                console.log(response.data.mensagem);
            }).catch((err) => { 
                if (err.response) {
                    console.log(err.response.data.mensagem);
                } else {
                    console.log("AAAAA");
                }
            });
    }

    function remove() {
        console.log('Deletei')
    }

    function sendData() {
        setAge()
    }

    // Header Api
    const headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    }


    // Rendering
    return (
        <BodyS>
            <Title>Registro de Alunos</Title>
            <Container>
                <Forms>
                    <DivTwo>
                        <InputS required placeholder="Nome" type="text" onChange={(e) => { setFirstName(e.target.value); console.log(firstName) }} value={firstName} />
                        <InputS required placeholder="Sobrenome" type="text" onChange={(e) => { setlastName(e.target.value) }} value={lastName} />
                        <InputAge required placeholder="Idade" type="number" onChange={(e) => { setAge(e.target.value) }} value={age} />
                    </DivTwo>
                    <InputS  required placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <DivTwo>
                        <InputS required placeholder="Turma" type="text" onChange={(e) => { setClassName(e.target.value) }} value={className} />
                        <InputS required placeholder="Matricula" type="text" onChange={(e) => { setRegistration(e.target.value) }} value={registration} />
                    </DivTwo>
                </Forms>
                <Register>Registros :</Register>
                <Table>
                    {studentsData.map((student, index) => {
                        return (
                            <DataD onClick={() => {
                                setFirstName(student.firstName);
                                setlastName(student.lastName);
                                setAge(student.age);
                                setEmail(student.email);
                                setClassName(student.class);
                                setRegistration(student.registration);
                                setId(student.id);

                                console.log(student.id)
                            }}>
                                <Data>
                                    <Infos>Nome:</Infos>
                                    <p>{student.firstName}</p>
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