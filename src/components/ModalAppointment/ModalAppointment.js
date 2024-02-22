    import { Modal } from "react-native"
    import { ButtonTitle, TitleProfile } from "../Title/Style"
    import { Btn } from "../Button/Button"
    import { LinkCancel } from "../Link/Style"
    import { ButtonModal, Cancel, ContentModal, ImageModalAp, TextAge, TextEmail, ViewData, ViewModal } from "./Style"

    export const ModalAppointment = ({navigation,nav, visible, setShowModalAppointment, ...rest}) => {

        const onPressHandler = () => {
            navigation.navigate("MedicalRecord");
            setShowModalAppointment(false)
        };


        return(
            <Modal {...rest} visible={visible} transparent={true} animationType="fade">
                <ViewModal>
                    <ContentModal>
                        <ImageModalAp source={require('../../assets/nicole.png')}/>

                        <TitleProfile>Niccole Sarga</TitleProfile>

                        <ViewData>
                            <TextAge>22 anos</TextAge>
                            <TextEmail>niccole.sarga@gmail.com</TextEmail>
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