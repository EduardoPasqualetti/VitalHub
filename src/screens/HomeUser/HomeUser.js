import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ListComponent } from "../../components/List/List"
import { Card } from "../../components/Card/Card"
import { ModalCancel } from "../../components/ModalCancel/ModalCancel"
import { ModalAppointment } from "../../components/ModalAppointment/ModalAppointment"
import { ImageBtnSchedule } from "../../components/Images/Style"
import { BtnSchedule } from "../../components/Button/Button"
import { FontAwesome } from '@expo/vector-icons';
import { ModalSchedule } from "../../components/ModalSchedule/ModalSchedule"


export const HomeUser = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")

    const Consultas = [
        { id: 1, nomeMedico: "Dr. Joao", age: 36, hour: '11:00', situacao: "pendente" },
        { id: 2, nomeMedico: "Dr. Marcos", age: 40, hour: '21:30', situacao: "cancelado" },
        { id: 3, nomeMedico: "Dr. Juscelino", age: 20, hour: '07:00', situacao: "realizado" },
    ]

    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    const [showModalSchedule, setShowModalSchedule] = useState(false)



    return (
        <>
            <Header nome={'Richard Kosta'} ProfileImage={require('../../assets/garro.jpeg')} />
            <Container>
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
                    data={Consultas}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusList == item.situacao && (
                            <Card name={item.nomeMedico} situacao={item.situacao} age={item.age} hour={item.hour}
                                onPressAppointment={() => setShowModalAppointment(true)}
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

                <BtnSchedule onPress={() => setShowModalSchedule(true)}>
                    <FontAwesome name="stethoscope" size={40} color="white" />
                </BtnSchedule>

                <ModalSchedule
                visible={showModalSchedule}
                navigation={navigation}
                setShowModalSchedule={setShowModalSchedule}
                />



            </Container>
        </>
    )
}