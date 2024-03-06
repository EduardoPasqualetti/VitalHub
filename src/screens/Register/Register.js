import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonTitle, TextRec, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Btn } from "../../components/Button/Button"
import { LinkCancel } from "../../components/Link/Style"

export const Register = ({navigation}) => {

    async function Register() {
        navigation.replace("Main")
    }

    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}></Logo>

            <Title>Criar conta</Title>

            <TextRec>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextRec>

            <Input placeholder={"Usuario ou Email"}/>
            <Input placeholder={"Senha"}/>
            <Input placeholder={"Confirmar senha"}/>

            <Btn onPress={() => Register()}>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Btn>

            <LinkCancel onPress={() => navigation.navigate("Login")}>Cancelar</LinkCancel>

        </Container>
    )
}