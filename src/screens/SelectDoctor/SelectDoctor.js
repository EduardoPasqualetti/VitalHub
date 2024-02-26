import { Btn } from "../../components/Button/Button"
import { CardDoctor } from "../../components/CardDoctor/CardDoctor"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ButtonTitle } from "../../components/Title/Style"
import { BtnSelect, Cancel, Title } from "../SelectClinic/Style"

const Medicos = [
    { id: 1, nome: "Dra Alessandra",Especialidade: "Demartologa, Esteticista", Foto: require("../../assets/nicole.png")},
    { id: 2, nome: "Dr Kumushiro",Especialidade: "Cirurgião, Cardiologista", Foto: require("../../assets/medico.png")},
    { id: 3, nome: "Dr Rodrigo Santos",Especialidade: "Clínico, Pediatra", Foto: require("../../assets/photo.png")},
    { id: 4, nome: "Dr Gabriel Gab",Especialidade: "Oftamologista", Foto: require("../../assets/gab.jpg")},
    
]

export const SelectDoctor = ({navigation}) => {
    return(
        <Container>
            <Title>Selecionar Medico</Title>

            { <ListComponent 
                data={Medicos}
                renderItem={({ item }) =>
                      (
                        <BtnSelect>
                        <CardDoctor name={item.nome} espec={item.Especialidade} photo={item.Foto}
                        />
                        </BtnSelect>
                    )}
                /> }

            <Btn>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </Btn>
            <Cancel onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</Cancel>
        </Container>
    )
}