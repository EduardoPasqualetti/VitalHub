import { Image, Text } from "react-native";
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DataProfile, ImagePoint, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const Card = ({
    status = "pendente",
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
                    <ClockCard status={status}>
                        <AntDesign name="clockcircle" size={18} color={status == "pendente" ? '#49B3BA' : '#4E4B59'} />
                        <TextBold status={status}>{hour}</TextBold>
                    </ClockCard>


                    {/* valida e mostra o tipo de botao conforme a status */}

                    {
                        status == "cancelado" ? (
                            <>
                            </>
                        ) : status == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText status={status}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText status={status}>Ver Prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }


                </ViewRow>
            </ContentCard>

        </ContainerCard>
    )
}