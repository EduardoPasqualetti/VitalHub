import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment, } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ListComponent } from "../../components/List/List"
import { Card } from "../../components/Card/Card"
import { ModalCancel } from "../../components/ModalCancel/ModalCancel"
import { ModalAppointment } from "../../components/ModalAppointment/ModalAppointment"


const Consultas = [
    { id: 1, nome: "Edu",idade: 17,Horario: '14:00', situacao: "pendente" },
    { id: 2, nome: "Carlos",idade: 40,Horario: '20:00', situacao: "cancelado" },
    { id: 3, nome: "Gabriel", idade: 20,Horario: '09:00', situacao: "realizado" }, 
]

export const Home = ({navigation}) => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel,setShowModalCancel] = useState(false)
    const [showModalAppointment,setShowModalAppointment] = useState(false)

    const[selectedAppointment, setSelectedAppointment]= useState(null)

    return (
        <Container>
            <Header nome={'Dr. Carlos'} ProfileImage={require('../../assets/medico.png')}/>

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
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <Card name={item.nome} situacao={item.situacao} age={item.idade} hour={item.Horario}
                        onPressAppointment={() => {
                            setSelectedAppointment(item)
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

            <ModalAppoingittment
            visible={showModalAppointment}
            setShowModalAppointment={setShowModalAppointment}
            navigation={navigation}
            appointmentData={selectedAppointment}
            />



        </Container>
    )
}