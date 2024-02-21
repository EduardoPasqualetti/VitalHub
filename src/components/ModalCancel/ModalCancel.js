import { Modal } from "react-native"
import { ButtonTitle, TextRec, Title } from "../Title/Style"
import { Btn } from "../Button/Button"
import { LinkCancel } from "../Link/Style"
import { ContentModal, ViewModal } from "./Style"

const ModalCancel = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Cancelar consulta</Title>
                    <TextRec>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextRec>

                    <Btn>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </Btn>

                    <LinkCancel onPress={() => setShowModalCancel(false)}>Cancelar</LinkCancel>
                </ContentModal>
            </ViewModal>
        </Modal>
    )
}

export default ModalCancel