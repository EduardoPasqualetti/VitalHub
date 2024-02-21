import { Image, Text } from "react-native";
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DataProfile, ImagePoint, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const Card = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
    name, age, hour}) => {
    return (
        <ContainerCard>
            {/* Imagem do Card */}
            <ProfileImage source={require('../../assets/gab.jpg')} />


            <ContentCard>
                <DataProfile>   
                    <ProfileName>{name}</ProfileName>
                    <ProfileData>
                        <TextAge>{age} anos</TextAge>
                        <ImagePoint source={require('../../assets/point.png')} />
                        <TextBold>Rotina</TextBold>
                    </ProfileData>
                </DataProfile>
                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={18} color={situacao == "pendente" ? '#49B3BA' : '#4E4B59'} />
                        <TextBold situacao={situacao}>{hour}</TextBold>
                    </ClockCard>


                    {/* valida e mostra o tipo de botao conforme a situacao */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }


                </ViewRow>
            </ContentCard>

        </ContainerCard>
    )
}