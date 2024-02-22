import styled from "styled-components";

export const FieldContent = styled.View`

width: ${props => `${props.fieldWidth}%`};

gap: 10px;

margin-bottom: 40px;
`


export const InputLabel = styled.Text`
text-align: left;
width: 100%;
font-family: 'Quicksand_600SemiBold';
color: #33303E;
font-size: 18px;
`

export const InputText = styled.TextInput.attrs(props => ({
    placeholderTextColor: '#4E4B59'
 }) )
`
width: 100%;
height: ${props => `${props.fieldHeight}px` };
border-radius: 7px;
background-color: #F5F3F3;
color: #4E4B59;
font-family: 'MontserratAlternates_500Medium';
font-size: 16px;
padding: 30px;
`