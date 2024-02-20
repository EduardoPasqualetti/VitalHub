import { Image, Text } from "react-native";
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DataProfile, ImagePoint, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const Card = ({  situacao }) => {
    return (
        <ContainerCard>
            {/* Imagem do Card */}
            <ProfileImage source={require('../../assets/gab.jpg')} />


            <ContentCard>
                <DataProfile>
                    <ProfileName>Gabriel</ProfileName>
                    <ProfileData>
                        <TextAge>17 anos</TextAge>
                        <ImagePoint source={require('../../assets/point.png')} />
                        <TextBold>Rotina</TextBold>
                    </ProfileData>
                </DataProfile>
                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={18} color={situacao == "pendente" ? '#49B3BA' : '#4E4B59'} />
                        <TextBold>14:00</TextBold>
                    </ClockCard>


                    {/* valida e mostra o tipo de botao conforme a situacao */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard>
                                <ButtonText>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : situacao == "realizado" ? (
                            <ButtonCard>
                                <ButtonText situacao={situacao}>Ver Prontuario</ButtonText>
                            </ButtonCard>
                        ) : (
                            <></>
                        )
                    }


                </ViewRow>
            </ContentCard>

        </ContainerCard>
    )
}