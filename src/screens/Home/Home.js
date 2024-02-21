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
    { id: 1, nome: "Edu",age: 17,hour: '14:00', situacao: "pendente" },
    { id: 2, nome: "Carlos",age: 40,hour: '20:00', situacao: "cancelado" },
    { id: 3, nome: "Gabriel", age: 20,hour: '09:00', situacao: "realizado" },

]

export const Home = () => {

    const [statusList, setStatusList] = useState("pendente")

    const [showModalCancel,setShowModalCancel] = useState(false)
    const [showModalAppointment,setShowModalAppointment] = useState(false)

    return (
        <Container>
            <Header />

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
                        <Card name={item.nome} situacao={item.situacao} age={item.age} hour={item.hour}
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
            />



        </Container>
    )
}