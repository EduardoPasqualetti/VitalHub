
import { Container, ContentAccount } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { ButtonGoogleTitle, ButtonTitle, ImgGoogle, TextAccount, Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { LinkCreate, LinkMedium } from "../../components/Link/Link"
import { Btn, BtnGoogle } from "../../components/Button/Button"
import { Image } from "react-native"


export const Login = ({navigation}) => {
    return (
        <Container>

            <Logo source={require('../../assets/logo.png')} />

            <Title>Entrar ou criar conta</Title>



            <Input placeholder={"Usuário ou E-mail"} />
            <Input placeholder={"Senha"} />

            <LinkMedium onPress={() => navigation.navigate("EmailCode")} >Esqueceu sua senha?</LinkMedium>


            <Btn>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Btn>

            <BtnGoogle>
                <ImgGoogle source={require("../../assets/GOOGLE.png")} />
                <ButtonGoogleTitle>ENTRAR COM GOOGLE</ButtonGoogleTitle>
            </BtnGoogle>

            <ContentAccount>
                <TextAccount>Nao tem Conta?</TextAccount>
                <LinkCreate onPress={() => navigation.navigate("Register")}>Crie uma conta agora!</LinkCreate >
                
            </ContentAccount>

        </Container>
    )
}   