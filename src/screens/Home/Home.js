import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment, } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ListComponent } from "../../components/List/List"
import { Card } from "../../components/Card/Card"
import { ModalCancel } from "../../components/ModalCancel/ModalCancel"
import { ModalAppointment } from "../../components/ModalAppointment/ModalAppointment"
import { BtnCard, BtnSchedule } from "../../components/Button/Button"
import { FontAwesome } from '@expo/vector-icons';
import { ModalSchedule } from "../../components/ModalSchedule/ModalSchedule"
import { Text, TouchableOpacity } from "react-native"
import { ModalSeeDoctor } from "../../components/ModalSeeDoctor/ModalSeeDoctor"

const Lista = [
    {
        id: "1",
        nome: "Gabriel Victor",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        status: "pendente",
        typeUser: "paciente"
    },
    {
        id: "4",
        nome: "Walter",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Exame",
        status: "pendente",
        typeUser: "paciente"
    },
    {
        id: "2",
        nome: "Richard Kosta",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        status: "realizado",
        typeUser: "paciente"
    },
    {
        id: "3",
        nome: "Gabriel Victor",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        status: "cancelado",
        typeUser: "paciente"
    },
    {
        id: "5",
        nome: "Dr. Murilo",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        status: "pendente",
        typeUser: "medico",

    },
    {
        id: "6",
        nome: "Dra. Vanessa",
        idade: "36",
        horarioConsulta: "15:20",
        tipoConsulta: "Urgencia",
        status: "realizado",
        typeUser: "medico",

    },
    {
        id: "7",
        nome: "Dra. Rafaela",
        idade: "28",
        horarioConsulta: "16:00",
        tipoConsulta: "Urgencia",
        status: "cancelado",
        typeUser: "medico",

    }
]

export const Home = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalSchedule, setShowModalSchedule] = useState(false)
    const [showModalSeeDoctor, setShowModalSeeDoctor] = useState(false)

    const [userLogin, setUserLogin] = useState("medico")

    return (
        userLogin == "medico" ?
            <Container>
                <Header nome={'Dr. Carlos'} ProfileImage={require('../../assets/medico.png')} />

                <CalendarHome />


                <FilterAppointment>

                    <BtnAppointment
                        textButton={'Pendente'}
                        clickButton={statusList === 'pendente'}
                        onPress={() => setStatusList('pendente')}
                    />

                    <BtnAppointment
                        textButton={'Realizadas'}
                        clickButton={statusList === 'realizado'}
                        onPress={() => setStatusList('realizado')}
                    />

                    <BtnAppointment
                        textButton={'Canceladas'}
                        clickButton={statusList === 'cancelado'}
                        onPress={() => setStatusList('cancelado')} />


                </FilterAppointment>


                {/* Lista (FlatList)*/}
                <ListComponent
                    data={Lista}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == 'paciente' && (
                            <Card name={item.nome}
                                status={item.status}
                                age={item.idade}
                                hour={item.horarioConsulta}
                                typeAppointment={item.tipoConsulta}
                                onPressAppointment={() => {
                                    setShowModalAppointment(true)
                                }}
                                onPressCancel={() => setShowModalCancel(true)}
                            />
                        )}
                />

                <ModalCancel
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <ModalAppointment
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    navigation={navigation}

                />


            </Container>
            :
            <Container>
                <Header nome={'Richard Kosta'} ProfileImage={require('../../assets/garro.jpeg')} />
                <CalendarHome />

                <FilterAppointment>
                    <BtnAppointment
                        textButton={'Pendente'}
                        clickButton={statusList === 'pendente'}
                        onPress={() => setStatusList('pendente')}
                    />

                    <BtnAppointment
                        textButton={'Realizadas'}
                        clickButton={statusList === 'realizado'}
                        onPress={() => setStatusList('realizado')}
                    />

                    <BtnAppointment
                        textButton={'Canceladas'}
                        clickButton={statusList === 'cancelado'}
                        onPress={() => setStatusList('cancelado')}
                    />
                </FilterAppointment>

                <ListComponent
                    data={Lista}
                    keyExtractor={(item) => item.id}




                    
                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == "medico" && (
                            <TouchableOpacity onPress={() => {setShowModalSeeDoctor(true)}}>
                                <Card name={item.nome} status={item.status} age={item.idade} hour={item.horarioConsulta}
                                    onPressAppointment={() => setShowModalAppointment(true)}
                                    onPressCancel={() => setShowModalCancel(true)}
                                />
                            </TouchableOpacity>
                        )}
                />


                <ModalCancel
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <ModalAppointment
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    navigation={navigation}
                />

                <BtnSchedule onPress={() => setShowModalSchedule(true)}>
                    <FontAwesome name="stethoscope" size={40} color="white" />
                </BtnSchedule>

                <ModalSchedule
                    visible={showModalSchedule}
                    navigation={navigation}
                    setShowModalSchedule={setShowModalSchedule}
                />

                <ModalSeeDoctor
                    visible={showModalSeeDoctor}
                    setShowModalSeeDoctor={setShowModalSeeDoctor}
                    navigation={navigation}

                />
 


            </Container>

    )
}