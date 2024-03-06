import { BoxInput } from "../../components/BoxInput/Index"
import { Btn } from "../../components/Button/Button"
import { ContainerProfile, ContainerScroll, ViewTitleRecord } from "../../components/Container/Style"
import { ProfileImage } from "../../components/Images/Style"
import { LinkCancelMargin } from "../../components/Link/Style"
import { ButtonTitle, SubtitleRecord, TitleProfile } from "../../components/Title/Style"

export const InsertRecord = ({navigation}) => {
    return (
        <ContainerScroll>
            <ProfileImage source={require("../../assets/photo.png")} />

            <ContainerProfile>
                <TitleProfile>Richard Kosta</TitleProfile>
                <ViewTitleRecord>
                    <SubtitleRecord>22 anos</SubtitleRecord>
                    <SubtitleRecord>richard.kosta@gmail.com</SubtitleRecord>
                </ViewTitleRecord>

                <BoxInput
                 textLabel={'Descrição da consulta'}
                 placeholder={'Descricao'}
                 fieldHeight={150}
                 insertRecord={true}
                />
                <BoxInput
                 textLabel={'Diagnóstico do paciente'}
                 placeholder={'Diagnóstico'}
                 fieldHeight={80}
                 insertRecord={true}
                />
                <BoxInput
                 textLabel={'Prescrição médica'}
                 placeholder={'Prescrição'}
                 fieldHeight={150}
                 insertRecord={true}
                />


                <Btn onPress={() => navigation.replace("Home")}>
                    <ButtonTitle>SALVAR</ButtonTitle>
                </Btn>

                <LinkCancelMargin onPress={() => navigation.replace("Home")}>Cancelar Edição</LinkCancelMargin>
            </ContainerProfile>
        </ContainerScroll>
    )
}