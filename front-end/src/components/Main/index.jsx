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
    const [crm, setCrm] = useState('');
    const [id, setId] = useState(0);
    const [especialidade, setEspecialidade] = useState('');
    const [doctorData, setDoctorData] = useState([]);

    useUpdateEffect(() => {
        // Faça a solicitação Axios para buscar os dados dos alunos
        axios.get('http://localhost:3000/doctors')
            .then((res) => {
                console.log(res)
                // Atualize o estado com os dados da API
                setDoctorData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Functions
    function add() {
        const doctor = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            especialidade: especialidade,
            crm: crm,
        };

        // Verifique se todos os campos estão preenchidos
        if (firstName === '' || lastName === '' || email === '' || especialidade === '' || crm === '') {
            console.log('Falta dados');
            return;
        }

        // Adicionando um aluno no banco de dados
        axios.post('http://localhost:3000/createDoctor', doctor, headers)
            .then((res) => {
                console.log('Cadastrado');
                console.log(res);
                // Atualize a lista de alunos após o cadastro
                setDoctorData([...doctorData, doctor]);

            })
            .catch((err) => {
                console.log(err);
            });


        setFirstName('');
        setlastName('');
        setCrm('');
        setEmail('');
        setEspecialidade('');


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
            crm: crm,
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
            <Title>Cadastro de Médico</Title>
            <Container>
                <Forms>
                    <DivTwo>
                        <InputS required placeholder="Nome" type="text" onChange={(e) => { setFirstName(e.target.value); console.log(firstName) }} value={firstName} />
                        <InputS required placeholder="Sobrenome" type="text" onChange={(e) => { setlastName(e.target.value) }} value={lastName} />
                        <InputAge required placeholder="CRM" type="text" onChange={(e) => { setCrm(e.target.value) }} value={crm} />
                    </DivTwo>
                    <InputS required placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <DivTwo>
                        <InputS required placeholder="Especialidade" type="text" onChange={(e) => { setEspecialidade(e.target.value) }} value={especialidade} />
                    </DivTwo>
                </Forms>
                <Register>Médicos :</Register>
                <Table>
                    {doctorData.map((doctor, index) => {
                        return (
                            <DataD onClick={() => {
                                setFirstName(doctor.firstName);
                                setlastName(doctor.lastName);
                                setEmail(doctor.email);
                                setCrm(doctor.crm);
                                setEspecialidade(doctor.especialidade)
                                setId(doctor.id);
                            }}>
                                <Data>
                                    <Infos>Nome: </Infos>
                                    <p>{doctor.firstName}</p>
                                </Data>
                                <Data>
                                    <Infos>Sobrenome: </Infos>
                                    <p>{doctor.lastName}</p>
                                </Data>
                                <Data>
                                    <Infos>CRM: </Infos>
                                    <p>{doctor.crm}</p>
                                </Data>
                                <Data>
                                    <Infos>E-mail: </Infos>
                                    <p>{doctor.email}</p>
                                </Data>
                                <Data>
                                    <Infos>Especialidade:</Infos>
                                    <p>{doctor.especialidade}</p>
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