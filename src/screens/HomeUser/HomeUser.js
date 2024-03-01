import { useState } from "react"
import { BtnAppointment } from "../../components/BtnAppointment/BtnAppointment"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container, FilterAppointment } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { ListComponent } from "../../components/List/List"
import { Card } from "../../components/Card/Card"
import { ModalCancel } from "../../components/ModalCancel/ModalCancel"
import { ModalAppointment } from "../../components/ModalAppointment/ModalAppointment"
import { BtnSchedule } from "../../components/Button/Button"
import { FontAwesome } from '@expo/vector-icons';
import { ModalSchedule } from "../../components/ModalSchedule/ModalSchedule"
import { Text } from "react-native"


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
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </>
    )
}