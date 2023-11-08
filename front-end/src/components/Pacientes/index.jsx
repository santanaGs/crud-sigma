// Imports
import React, { useState } from "react";

// Styled Components
import { BodyS, ButtonS, ButtonsS, Container, Data, DataD, DivSButtonS, DivTwo, Forms, Infos, InputAge, InputS, Register, Table, Title } from "./style";

// Axios
import axios from 'axios'

// updateEffect
import { useUpdateEffect } from "../../useUpdate";
import { ModalS } from "../Modal";

// Navigate
import { useNavigate } from 'react-router-dom';

// Functional Component
export const Pacientes = () => {
    // Variables //
    const [id, setId] = useState(0);

    // Dados
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    // Contato
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    // Endereço
    const [end, setEnd] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endNum, setEndNum] = useState(null);
    const [cep, setCep] = useState('');

    // Retorno da APIS
    const [pacienteData, setPacienteData] = useState([]);

    // Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    useUpdateEffect(() => {
        // Faça a solicitação Axios para buscar os dados dos alunos
        // axios.get('http://localhost:3000/doctors')
        //     .then((res) => {
        //         console.log(res)
        //         // Atualize o estado com os dados da API
        //         setDoctorData(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

    // Functions
    function add() {
        // const doctor = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     especialidade: especialidade,
        //     crm: crm,
        // };

        // // Verifique se todos os campos estão preenchidos
        // if (firstName === '' || lastName === '' || email === '' || especialidade === '' || crm === '') {
        //     console.log('Falta dados');
        //     return;
        // }

        // // Adicionando um aluno no banco de dados
        // axios.post('http://localhost:3000/createDoctor', doctor, headers)
        //     .then((res) => {
        //         console.log('Cadastrado');
        //         console.log(res);
        //         // Atualize a lista de alunos após o cadastro
        //         setDoctorData([...doctorData, doctor]);

        //         setModalVisible(true);
        //         setModalText('Médico cadastrado com sucesso!')
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });


        // setFirstName('');
        // setlastName('');
        // setCrm('');
        // setEmail('');
        // setEspecialidade('');


    }

    async function update() {
        // const headers = {
        //     'headers': {
        //         // Indicar que será enviado os dados em formato de objeto
        //         'Content-Type': 'application/json'
        //     }
        // }

        // const dados = {
        //     id: id,
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     especialidade: especialidade,
        //     crm: crm,
        // };


        // await axios.put('http://localhost:3000/doctors', dados, headers)
        //     .then((response) => {
        //         console.log(response.data.mensagem);

        //         setModalVisible(true);
        //         setModalText('Médico atualizado com sucesso!')
        //     }).catch((err) => {
        //         if (err.response) {
        //             console.log(err.response.data.mensagem);
        //         }
        //     });
    }

    async function remove() {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         id: id,
        //         firstName: firstName,
        //         lastName: lastName,
        //         email: email,
        //         especialidade: especialidade,
        //         crm: crm,
        //     },
        // };

        // try {
        //     const response = await axios.delete('http://localhost:3000/doctors', config);
        //     console.log(response.data.mensagem);

        //     setModalVisible(true);
        //     setModalText('Médico excluído com sucesso!')
        // } catch (err) {
        //     if (err.response) {
        //         console.log(err.response.data.mensagem);
        //     }
        // }
    }

    // Navigate
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
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
            <Title>Cadastro de Paciente</Title>
            <Container>
                <Forms>
                    <DivTwo>
                        <InputS required placeholder="Nome" type="text" onChange={(e) => { setFirstName(e.target.value); console.log(firstName) }} value={firstName} />
                        <InputS required placeholder="Sobrenome" type="text" onChange={(e) => { setlastName(e.target.value) }} value={lastName} />
                        <InputAge required placeholder="Data de Nascimento" type="date" onChange={(e) => { setDataNascimento(e.target.value) }} value={dataNascimento} />
                    </DivTwo>
                    <DivTwo>
                        <InputS required placeholder="Email" type="email" onChange={(e) => { setEmail(e.target.value); console.log(firstName) }} value={email} />
                        <InputAge required placeholder="Telefone" type="tel" onChange={(e) => { setTelefone(e.target.value) }} value={telefone} />
                    </DivTwo>
                    <DivTwo>
                        <InputS required placeholder="Logradouro" type="email" onChange={(e) => { setEnd(e.target.value) }} value={end} />
                        <InputAge required placeholder="Nº" type="number" onChange={(e) => { setEndNum(e.target.value) }} value={endNum} />
                        <InputAge required placeholder="Bairro" type="text" onChange={(e) => { setBairro(e.target.value) }} value={bairro} />
                    </DivTwo>
                    <DivTwo>
                        <InputS required placeholder="CEP" type="text" onChange={(e) => { setCep(e.target.value) }} value={cep} />
                        <InputS required placeholder="Cidade" type="email" onChange={(e) => { setCidade(e.target.value) }} value={cidade} />
                        <InputS required placeholder="Estado" type="tel" onChange={(e) => { setEstado(e.target.value) }} value={estado} />
                    </DivTwo>
                </Forms>
                <Register>Paciente :</Register>
                <Table>
                    {/* {doctorData.map((doctor, index) => {
                        return (
                            <DataD onClick={() => {
                                setFirstName(doctor.firstName);
                                setlastName(doctor.lastName);
                                setEmail(doctor.email);
                                setCrm(doctor.crm);
                                setEspecialidade(doctor.especialidade)
                                setId(doctor.id);
                                key = { index }
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
                    })} */}
                </Table>
                <DivSButtonS>
                    <ButtonsS>
                        <ButtonS onClick={add}>Adicionar</ButtonS>
                        <ButtonS onClick={update}>Editar</ButtonS>
                        <ButtonS onClick={remove}>Excluir</ButtonS>
                    </ButtonsS>
                    <ButtonS onClick={goBack}>Voltar</ButtonS>
                </DivSButtonS>
                {modalVisible && <ModalS text={modalText} click={() => {
                    setModalVisible(false)
                    location.reload();
                }} />}
            </Container>
        </BodyS>
    )
}