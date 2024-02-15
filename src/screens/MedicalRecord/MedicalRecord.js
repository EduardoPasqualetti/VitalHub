import { useState } from "react"
import { ContainerProfile, ContainerScroll, ViewFormat, ViewTitleRecord } from "../../components/Container/Style"
import { ProfileImage } from "../../components/Images/Style"
import { ButtonTitle, EmailProfile, SubtitleRecord, TextRecord, TitleProfile } from "../../components/Title/Style"
import { Text } from "react-native"
import { BoxInput } from "../../components/BoxInput/Index"
import { Btn } from "../../components/Button/Button"

export const MedicalRecord = () => {

    const [recordEdit, setRecordEdit] = useState(false)

    return (
        <ContainerScroll>
            {recordEdit ? (
                <>
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
                            borderColor={'#49B3BA'}
                            backColor={'white'}
                            color={"#4E4B59"}
                            font={'MontserratAlternates_600SemiBold'}
                            fontSize={'17px'}
                        />
                        <BoxInput
                            textLabel={'Diagnóstico do paciente'}
                            placeholder={'Diagnóstico'}
                            fieldHeight={80}
                            borderColor={'#49B3BA'}
                            backColor={'white'}
                            color={"#4E4B59"}
                            font={'MontserratAlternates_600SemiBold'}
                            fontSize={'17px'}
                        />
                        <BoxInput
                            textLabel={'Prescrição médica'}
                            placeholder={'Prescrição médica'}
                            fieldHeight={150}
                            borderColor={'#49B3BA'}
                            backColor={'white'}
                            color={"#4E4B59"}
                            font={'MontserratAlternates_600SemiBold'}
                            fontSize={'17px'}
                        />
                        <Btn onPress={() => setRecordEdit(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </Btn>
                    </ContainerProfile>

                </>
            ) : (
                <>
                    <ProfileImage source={require("../../assets/photo.png")} />

                    <ContainerProfile>
                        <TitleProfile>Richard Kosta</TitleProfile>
                        <ViewTitleRecord>
                            <SubtitleRecord>22 anos</SubtitleRecord>
                            <SubtitleRecord>richard.kosta@gmail.com</SubtitleRecord>
                        </ViewTitleRecord>

                        <BoxInput
                            textLabel={'Descrição da consulta'}
                            fieldValue={"O paciente possuí uma infecção no ouvido Necessário repouse de 2 dias e acompanhamento médico constante"}
                            fieldHeight={150}
                        />
                        <BoxInput
                            textLabel={'Diagnóstico do paciente'}
                            fieldValue={"Infeccao no ouvido"}
                        />
                        <BoxInput
                            textLabel={'Prescrição médica'}
                            fieldValue={"Medicamento: Advil"}
                            fieldHeight={150}
                        />

                        <Btn onPress={() => setRecordEdit(true)}>
                            <ButtonTitle>EDITAR</ButtonTitle>
                        </Btn>
                    </ContainerProfile>
                </>
            )}
        </ContainerScroll>
    )
}