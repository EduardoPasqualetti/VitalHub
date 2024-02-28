
import { useState } from "react";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate";
import { ContainerSelectDate } from "../../components/Container/Style"
import { Title } from "../SelectClinic/Style"
import { ButtonTitle, LabelSchedule } from "../../components/Title/Style";
import { InputAppointment } from "../../components/ModalSchedule/Style";
import { BtnFull } from "../../components/Button/Button";
import { LinkCancel } from "../../components/Link/Style";
import InputSelect from "../../components/InputSelect/InputSelect";
import { Text } from "react-native";
import { ModalResumeAppointment } from "../../components/ModalResumeAppointment/ModalResumeAppointment";

export const SelectDate = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const Horarios = ["10:30","12:00","12:30","13:00","17:15","17:45","19:00"]  

    const [showModalResume, setShowModalResume] = useState(false)

    return (
        
            <ContainerSelectDate>
                <Title>Selecionar Data</Title>
                <FullCalender
                    selectedDate={selectedDate}
                    handleSelectedDateFn={setSelectedDate}
                />
                <LabelSchedule>Selecione um horário disponível</LabelSchedule>

                <InputSelect
                textButton='Selecionar horário'
                handleSelectedFn={setSelectedTime}
                data={Horarios}
                />
            
            <BtnFull onPress={() => {setShowModalResume(true)}} >
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </BtnFull>

                <ModalResumeAppointment
                visible={showModalResume}
                navigation={navigation}
                setShowModalResume={setShowModalResume}
                dataConsulta={selectedDate}
                />

            <LinkCancel onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</LinkCancel>
        </ContainerSelectDate>
    )
}