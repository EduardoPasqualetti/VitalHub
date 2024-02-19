import { BoxUser, ContainerHeader, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import {MaterialIcons} from "@expo/vector-icons"

export const Header = () => {
    return (
        <ContainerHeader>
        <BoxUser>
          <ImageUser source={require('../../assets/garro.jpeg')} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>Dr.Garro</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
    )
}