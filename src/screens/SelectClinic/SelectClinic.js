
import { Container } from "../../components/Container/Style"
import { BtnSelect, Cancel, Title } from "./Style"
import { Btn } from "../../components/Button/Button"
import { ButtonTitle } from "../../components/Title/Style"
import { ListComponent } from "../../components/List/List"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { useState } from "react"


const Clinicas = [
    { id: 1, nome: "Clínica Natureh",Localizacao: "São Paulo, SP",Avaliacao: "4,5", Abertura: "Seg-Sex"},
    { id: 2, nome: "Diamond Pró-Mulher",Localizacao: "São Paulo, SP",Avaliacao: "4,8", Abertura: "Seg-Sex"},
    { id: 3, nome: "Clinica Villa Lobos", Localizacao: "Taboão, SP",Avaliacao: "4,2", Abertura: "Seg-Sab"}, 
    { id: 4, nome: "SP Oncologia Clínica", Localizacao: "Taboão, SP",Avaliacao: "4,2", Abertura: "Seg-Sab" }, 
]

export const SelectClinic = ({navigation}) => {

    const [selectedClinic, setSelectedClinic] = useState(null);


    return(
        <Container>
            <Title>Selecionar clinica</Title>

                { <ListComponent 
                data={Clinicas}
                renderItem={({ item }) =>
                      (
                        <BtnSelect  onPress={() => setSelectedClinic(item.id)}>
                        <CardClinic name={item.nome}
                                    loc={item.Localizacao}
                                    aval={item.Avaliacao}
                                    date={item.Abertura}
                                    isSelected={item.id == selectedClinic}
                        
                        />
                        </BtnSelect>
                    )}
                /> }

            <Btn onPress={() => {navigation.navigate("SelectDoctor")}}>
                <ButtonTitle >CONTINUAR</ButtonTitle>
            </Btn>
            <Cancel onPress={() => {navigation.navigate("HomeUser")}}>Cancelar</Cancel>
        </Container>


    )
}