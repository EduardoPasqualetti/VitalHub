import { Modal, Text } from "react-native"
import { BlueTitle, ContentModal, Option, OptionsContainer, RowContainerButton, TypeButton, SmallButton, TypeAppointment, ViewModal, TextOption } from "./Style"
import { ButtonTitle, LabelSchedule, Title, TitleProfile } from "../Title/Style"
import { useState } from "react"
import { Btn } from "../Button/Button"
import { LinkCancel } from "../Link/Style"


export const ModalSchedule = ({ navigation, visible, setShowModalSchedule , ...rest }) => {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const opcoes = ['Pediatria', 'Clinico geral', 'Cardiologista'];

  const onPressOption = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const onPressHandle = () => {
    navigation.navigate("SelectClinic");
    setShowModalSchedule(false)
  }


  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ViewModal>
        <ContentModal>
          <TitleProfile>Agendar consulta</TitleProfile>

          <TypeAppointment>
            <LabelSchedule>Informe o tipo de consulta</LabelSchedule>


            {/* Select dos tipos de consulta */}
            <TypeButton onPress={() => setShowOptions(true)}>
              <BlueTitle>{selectedOption || 'Tipo de consulta'}</BlueTitle>
            </TypeButton>

            {showOptions && (
              <OptionsContainer >
                {opcoes.map((option, index) => (
                  <Option key={index} onPress={() => onPressOption(option)} >
                    <TextOption> {index + 1}- {option}</TextOption>
                  </Option>
                ))}
              </OptionsContainer>
            )}


            {/* Selecionar qual o nivel da consulta */}
            <LabelSchedule>Qual o nível da consulta</LabelSchedule>
            <RowContainerButton>
              <SmallButton><BlueTitle>Rotina</BlueTitle></SmallButton>
              <SmallButton><BlueTitle>Exames</BlueTitle></SmallButton>
              <SmallButton><BlueTitle>Urgencia</BlueTitle></SmallButton>
            </RowContainerButton>

            {/* Informar a localizacao */}
            <LabelSchedule>Informe a localizacao desejada</LabelSchedule>
            <TypeButton>
              <BlueTitle>Informe a localização</BlueTitle>
            </TypeButton>

          </TypeAppointment>
          <Btn onPress={() => {onPressHandle()}}>
            <ButtonTitle >CONTINUAR</ButtonTitle>
          </Btn>

          <LinkCancel onPress={() => setShowModalSchedule(false)}>Cancelar</LinkCancel>

        </ContentModal>
      </ViewModal>
    </Modal>
  )
}
