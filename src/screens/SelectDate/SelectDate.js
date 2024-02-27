
import { useState } from "react";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate";
import {  ContainerSelectDate } from "../../components/Container/Style"
import { Title } from "../SelectClinic/Style"
import { LabelSchedule } from "../../components/Title/Style";

export const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    return(
        <ContainerSelectDate>
            <Title>Selecionar Data</Title>
            <FullCalender 
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate}
            />
            <LabelSchedule>Selecione um horário disponível</LabelSchedule>
        </ContainerSelectDate>
    )
}