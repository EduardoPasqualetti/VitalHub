import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment, } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ListComponent } from "../../components/List/List"
import { Card } from "../../components/Card/Card"


const Consultas = [
    { id: 1, nome: "Edu", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "cancelado" },
    { id: 3, nome: "Gabriel", situacao: "realizado" },

]

export const Home = () => {

    const [statusList, setStatusList] = useState("pendente")

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
                        <Card  age={'17'} typeAp={'Rotina'}
                            hour={'14:00'} source={require('../../assets/gab.jpg')} situacao={item.situacao} />
                    )}
            />



        </Container>
    )
}