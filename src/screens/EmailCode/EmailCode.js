import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, TextRec, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Btn } from "../../components/Button/Button"

export const EmailCode = ({navigation}) => {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')}></Logo>

            <Title>Recuperar Senha</Title>

            <TextRec>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextRec>

            <Input placeholder={"Usuário ou E-mail"} />

            <Btn onPress={() => navigation.navigate("VerifyEmail")}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </Btn>

        </Container>
    )
}