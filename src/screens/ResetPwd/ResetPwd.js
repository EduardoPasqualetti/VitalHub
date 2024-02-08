import { Btn, BtnReturn, IconClose } from "../../components/Button/Button"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, TextRec, Title } from "../../components/Title/Style"

export const ResetPwd = ({ navigation }) => {
    return (
        <Container>


            <BtnReturn onPress={() => navigation.navigate("Login")}>
                <IconClose source={require("../../assets/close.png")} />
            </BtnReturn>

            <Logo source={require('../../assets/logo.png')}></Logo>

            <Title>Redefinir Senha</Title>

            <TextRec>Insira e confirme a sua nova senha</TextRec>

            <Input placeholder={"Nova senha"} />
            <Input placeholder={"Confirmar nova senha"} />

            <Btn onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Btn>

        </Container>
    )
}