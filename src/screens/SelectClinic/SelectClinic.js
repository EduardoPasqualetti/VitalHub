import { ScrollView } from "react-native"
import { Container, ViewScroll } from "../../components/Container/Style"
import { Cancel, Title } from "./Style"
import { Btn } from "../../components/Button/Button"
import { ButtonTitle } from "../../components/Title/Style"
import { LinkCancel } from "../../components/Link/Style"


export const SelectClinic = () => {
    return(
        <Container>
            <Title>Selecionar clinica</Title>

            <ScrollView>
                <CardClinic
                />
            </ScrollView>
            <Btn>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </Btn>
            <Cancel>Cancelar</Cancel>
        </Container>


    )
}