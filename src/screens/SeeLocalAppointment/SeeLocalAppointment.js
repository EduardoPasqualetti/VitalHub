import { BoxInput } from "../../components/BoxInput/Index"
import { Container, ViewFormat, ViewLocal } from "../../components/Container/Style"
import { ImageMap } from "../../components/Images/Style"
import { LinkCancelMargin } from "../../components/Link/Style"
import { SubTitleModalResume, TitleProfile } from "../../components/Title/Style"

export const SeeLocalAppointment = ({navigation}) => {
    return(
        <Container>
            <ImageMap source={require("../../assets/map.png")}/>
            <ViewLocal>
                <TitleProfile>Clínica Natureh</TitleProfile>
                <SubTitleModalResume>São Paulo, SP</SubTitleModalResume>

                <BoxInput 
                textLabel={'Endereco'}
                placeholder={'Rua Vicenso Silva, 987'}
                />
                <ViewFormat>

                    <BoxInput
                    textLabel={'Número'}
                    placeholder={'578'}
                    fieldWidth={45}
                    />
                    <BoxInput
                    textLabel={'Bairro'}
                    placeholder={'Moema-SP'}
                    fieldWidth={46}
                    />

                </ViewFormat>
                <LinkCancelMargin onPress={() => {navigation.navigate("Home")}}>Voltar</LinkCancelMargin>
            </ViewLocal>
        </Container>
    )
}