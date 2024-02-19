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
    placeholderTextColor: props.placeholderColor || '#4E4B59'
 }) )
`
border-color: ${props => props.borderColor || 'transparent'}; 
width: 100%;
height: ${props => `${props.fieldHeight}px`};
border-radius: 7px;
border-width: 2px;
background-color: ${props => props.backColor  || '#F5F3F3'};
color: ${props => props.color  || '#4E4B59'};
font-family: ${props => props.font  || 'MontserratAlternates_500Medium'}  ;
font-size:  ${props => `${props.fontSize}px` };
padding: 30px;
`