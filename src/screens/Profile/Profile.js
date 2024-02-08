import { Button, Text } from "react-native"
import { ContainerSafe, ContainerSafeEdit, ContainerScroll, ViewFormat, ViewTitle } from "../../components/Container/Style"
import { ProfileImage } from "../../components/Images/Style"
import { ButtonTitle, EmailProfile, TitleProfile } from "../../components/Title/Style"
import { BoxInput } from "../../components/BoxInput/Index"
import { Btn } from "../../components/Button/Button"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"

export const Profile = () => {

    const [profileEdit, setProfileEdit] = useState(false)

    return (
        <ContainerScroll>
            {!profileEdit ? (
                <>

                    <ProfileImage source={require("../../assets/photo.png")} />
                    <ContainerSafe>
                        <TitleProfile>Richard Kosta</TitleProfile>
                        <EmailProfile>richard.kosta@gmail.com</EmailProfile>

                        <BoxInput
                            textLabel={'Data de nascimento:'}
                            fiedlValue={'04/05/1999'}
                        />
                        <BoxInput
                            textLabel={'CPF'}
                            fiedlValue={'859********'}
                        />
                        <BoxInput
                            textLabel={'Endereço'}
                            fiedlValue={'Rua Vicenso Silva, 987'}
                        />
                        <ViewFormat>
                            <BoxInput
                                textLabel={'Cep'}
                                fiedlValue={'06548-909'}
                                fieldWidth={'45'}
                            />
                            <BoxInput
                                textLabel={'Cidade'}
                                fiedlValue={'Moema-SP'}
                                fieldWidth={'45'}
                            />
                        </ViewFormat>

                        <Btn>
                            <ButtonTitle>ENTRAR</ButtonTitle>
                        </Btn>
                        <Btn onPress={() => setProfileEdit(true)}>
                            <ButtonTitle>EDITAR</ButtonTitle>
                        </Btn>
                    </ContainerSafe>
                </>
            ) : (
                <>
                    <ProfileImage source={require("../../assets/photo.png")} />


                    <ViewTitle>
                        <TitleProfile>Richard Kosta</TitleProfile>
                        <EmailProfile>richard.kosta@gmail.com</EmailProfile>
                    </ViewTitle>

                    <ContainerSafeEdit>
                        <BoxInput
                            textLabel={'Data de nascimento:'}
                            fiedlValue={'04/05/1999'}
                            editable={true}
                        />
                        <BoxInput
                            textLabel={'CPF'}
                            fiedlValue={'859********'}
                            editable={true}
                        />
                        <BoxInput
                            textLabel={'Endereço'}
                            fiedlValue={'Rua Vicenso Silva, 987'}
                            editable={true}
                        />
                        <ViewFormat>
                            <BoxInput
                                textLabel={'Cep'}
                                fiedlValue={'06548-909'}
                                fieldWidth={'45'}
                                editable={true}
                            />
                            <BoxInput
                                textLabel={'Cidade'}
                                fiedlValue={'Moema-SP'}
                                fieldWidth={'45'}
                                editable={true}
                            />
                        </ViewFormat>

                        <Btn onPress={() => setProfileEdit(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </Btn>

                    </ContainerSafeEdit>
                </>
            )}
        </ContainerScroll>
    )
}