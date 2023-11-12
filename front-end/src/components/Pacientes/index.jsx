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
    // ===== Variables  ===== //

    // Dados
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [id, setId] = useState(0);

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
        axios.get('http://localhost:3000/patient')
            .then((res) => {
                console.log(res)
                // Atualize o estado com os dados da API
                setPacienteData(res.data);
                console.log(pacienteData)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Functions
    function add() {
        const pacient = {
            firstName: firstName,
            lastName: lastName,
            dataNascimento: dataNascimento,
            email: email,
            telefone: telefone,
            logradouro: end,
            numero: endNum,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            estado: estado
        };

        // Verifique se todos os campos estão preenchidos
        if (!firstName|| !lastName|| !dataNascimento || !email || !telefone || !end || !endNum || !bairro || !cep || !cidade || !estado) {
            setModalText('Falta dados');
            setModalVisible(true);
            return;
        }

        // Adicionando um paciente no banco de dados
        axios.post('http://localhost:3000/createPatient', pacient, headers)
            .then((res) => {
                console.log('Cadastrado');
                console.log(res);
                // Atualize a lista de pacientes após o cadastro
                setPacienteData([...pacienteData, pacient]);

                setModalVisible(true);
                setModalText('Paciente cadastrado com sucesso!')
            })
            .catch((err) => {
                console.log(err);
            });


            setFirstName('');
            setlastName('');
            setDataNascimento('');
            setEmail('');
            setTelefone('');
            setEnd('');
            setEndNum(0);
            setBairro('');
            setCep('');
            setCidade('');
            setEstado('')
            setId(0);

    }

    async function update() {
        const headers = {
            'headers': {
                // Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }

        const dados = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dataNascimento: dataNascimento,
            email: email,
            telefone: telefone,
            logradouro: end,
            numero: endNum,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            estado: estado
        };


        await axios.put('http://localhost:3000/patient', dados, headers)
            .then((response) => {
                console.log(response.data.mensagem);

                setModalVisible(true);
                setModalText('Paciente atualizado com sucesso!')
            }).catch((err) => {
                if (err.response) {
                    console.log(err.response.data.mensagem);
                }
            });
    }

    async function remove() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                id: id,
                firstName: firstName,
                lastName: lastName,
                dataNascimento: dataNascimento,
                email: email,
                telefone: telefone,
                logradouro: end,
                numero: endNum,
                bairro: bairro,
                cep: cep,
                cidade: cidade,
                estado: estado
            },
        };

        try {
            const response = await axios.delete('http://localhost:3000/patient', config);
            console.log(response.data.mensagem);

            setModalVisible(true);
            setModalText('Paciente excluído com sucesso!')
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.mensagem);
            }
        }
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
                    {pacienteData.map((patient, index) => {
                        return (
                            <DataD key={index} onClick={() => {
                                setFirstName(patient.firstName);
                                setlastName(patient.lastName);
                                setDataNascimento(patient.dataNascimento);
                                setEmail(patient.email);
                                setTelefone(patient.telefone);
                                setEnd(patient.logradouro);
                                setEndNum(patient.numero);
                                setBairro(patient.bairro);
                                setCep(patient.cep);
                                setCidade(patient.cidade);
                                setEstado(patient.estado)
                                setId(patient.id);
                            }}>
                                <Data>
                                    <Infos>Nome: </Infos>
                                    <p>{patient.firstName}</p>
                                </Data>
                                <Data>
                                    <Infos>Sobrenome: </Infos>
                                    <p>{patient.lastName}</p>
                                </Data>
                                <Data>
                                    <Infos>Telefone: </Infos>
                                    <p>{patient.telefone}</p>
                                </Data>
                                <Data>
                                    <Infos>E-mail: </Infos>
                                    <p>{patient.email}</p>
                                </Data>
                                <Data>
                                    <Infos>Cidade:</Infos>
                                    <p>{patient.cidade}</p>
                                </Data>
                            </DataD>
                        )
                    })}
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