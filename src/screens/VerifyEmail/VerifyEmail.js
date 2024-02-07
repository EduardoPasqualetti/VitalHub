import { Btn } from "../../components/Button/Button"
import { Container, ContentAccount, ContentCode } from "../../components/Container/Style"
import { Input, InputCode } from "../../components/Input/Style"
import { LinkResend } from "../../components/Link/Link"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, TextRec, TextUser, Title } from "../../components/Title/Style"

export const VerifyEmail = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}></Logo>

            <Title>Verifique seu e-mail</Title>

            <TextRec>Digite o código de 4 dígitos enviado para</TextRec>
            <TextUser>username@email.com</TextUser>

            <ContentCode>
                <InputCode placeholder={'0'}></InputCode>
                <InputCode placeholder={'0'}></InputCode>
                <InputCode placeholder={'0'}></InputCode>
                <InputCode placeholder={'0'}></InputCode>
            </ContentCode>

            <Btn onPress={() => navigation.navigate("ResetPwd")}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Btn>

            <LinkResend>Reenviar Código</LinkResend>

        </Container>
    )
} 