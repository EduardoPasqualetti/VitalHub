import styled, { css } from "styled-components"

export const ViewModal = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: flex-end;

`

export const ContentModal = styled.View`
background-color: white;
padding: 20px;
border-radius: 10px;
width: 100%;
height: 75%;
align-items: center;

`


export const TypeAppointment = styled.View`
width: 90%;
height: 318px;
margin-bottom: 15px;   
margin-top: 10px;
`

export const RowContainerButton = styled.View`
flex-direction: row;
width: 100%;
height: 55px;
justify-content: space-between;
`

export const SmallButton = styled.TouchableOpacity`
width: 30%;
border-radius: 5px;
border: #60BFC5;
border-width: 2px;
align-items: center;
justify-content: center;
`

export const BlueTitle = styled.Text`
font-family: 'MontserratAlternates_600SemiBold';
color: #34898F;
font-size: 15px;
`


export const TypeButton = styled.TouchableOpacity`
padding: 10px;
margin-bottom: 0px;
border: 2px #60BFC5;
border-radius: 5px;
height: 65px;
justify-content: center;
`

export const OptionsContainer = styled.View`
gap: 5px;
margin-bottom: 15px;
background-color: 	#DCDCDC;
`

export const Option = styled.TouchableOpacity`
padding: 10px;
border: #60BFC5;
border-radius: 5px;
`

export const TextOption = styled.Text`
font-family: 'MontserratAlternates_700Bold';
color: #34898F;
`