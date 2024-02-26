    import { Image, Modal } from "react-native"
    import { ButtonTitle, TitleProfile } from "../Title/Style"
    import { Btn } from "../Button/Button"
    import { LinkCancel } from "../Link/Style"
    import { ButtonModal, Cancel, ContentModal, TextAge, TextEmail, ViewData, ViewModal } from "./Style"

    export const ModalAppointment = ({appointmentData, navigation, visible, setShowModalAppointment, ...rest}) => {

        const onPressHandler = () => {
            navigation.navigate("MedicalRecord");
            setShowModalAppointment(false)
        };

        const {name, age} = appointmentData || {};

        return(
            <Modal {...rest} visible={visible} transparent={true} animationType="fade">
                <ViewModal>
                    <ContentModal>
                        <Image source={require('../../assets/nicole.png')}/>

                        <TitleProfile>{name}</TitleProfile>

                        <ViewData>
                            <TextAge>{age}</TextAge>
                            <TextEmail>{name}@gmail.com</TextEmail>
                        </ViewData>

                        <ButtonModal onPress={() => {onPressHandler()}} >
                            <ButtonTitle>INSERIR PRONTUARIO</ButtonTitle>
                        </ButtonModal>

                        <Cancel onPress={() => setShowModalAppointment(false)}>Cancelar</Cancel>

                    </ContentModal>
                </ViewModal>
            </Modal>
        )
    }

