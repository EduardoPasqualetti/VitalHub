import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { BoxInput } from "../../components/BoxInput/Index"
import { Container, ContainerMap, ViewFormat, ViewLocal } from "../../components/Container/Style"
import { LinkCancelMargin } from "../../components/Link/Style"
import { SubTitleModalResume, TitleProfile } from "../../components/Title/Style"
import { StyleSheet } from "react-native"
import { mapskey } from "../../Utils/MapsKey/mapsApiKey"
import {
    requestForegroundPermissionsAsync, // solicita o acesso a localizacao
    getCurrentPositionAsync,  //recebe a localizacao atual
  
    watchPositionAsync,
    LocationAccuracy,
    
  } from 'expo-location'

export const SeeLocalAppointment = ({ navigation }) => {
    return (
        <Container>
            <ContainerMap>
                <MapView
                    initialRegion={{
                        latitude: -23.61505157599613,
                        longitude: -46.57090774805312,
                        longitudeDelta: 0.005,
                        latitudeDelta: 0.005,

                    }}
                    customMapStyle={grayMapStyle}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                >
                    <Marker
                        coordinate={{
                            latitude: -23.61505157599613,
                            longitude: -46.57090774805312,
                            longitudeDelta: 0.005,
                            latitudeDelta: 0.005,
                        }}
                        title='Clinica Aqui'
                        description='Marcador que representa localizacao da clinica'
                        pinColor={'blue'}
                    />
                    <Marker
                        coordinate={{
                            latitude: -23.6497517,
                            longitude: -46.5624046,
                            longitudeDelta: 0.005,
                            latitudeDelta: 0.005,
                        }}
                        title='Voce esta aqui'
                        description='Marcador que representa sua localizacao'
                        pinColor={'red'}
                    />
                </MapView>
            </ContainerMap>
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
                <LinkCancelMargin onPress={() => { navigation.navigate("Main") }}>Voltar</LinkCancelMargin>
            </ViewLocal>
        </Container>
    )
}



const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',

    }
});


const grayMapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#E1E0E7",
            },
        ],
    },
    {
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: -5,
            },
            {
                lightness: -5,
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#33303E",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#66DA9F",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1B1B1B",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#C6C5CE",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ACABB7",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#8EA5D9",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
]