import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment, } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"


const Consultas = [
    { id: 1, nome: "Edu", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "cancelado" },
    { id: 3, nome: "Gabriel", situacao: "realizado" },
    { id: 4, nome: "rubens", situacao: "pendente" }
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

        </Container>
    )
}