import styled from "styled-components";

export const Container = styled.View`
flex-direction: row;
width: 320px;
height: 90px;
margin-top: 40px;
border-radius: 7px;
background-color:#fff ;
box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
padding-top: 18px;
`

export const View1 = styled.View`
width: 60%;
align-items: flex-start;
gap: 12px;
padding-left: 15px;
`
export const View2 = styled.View`
width: 40%;
align-items: flex-end;
padding-right: 19px;
gap: 12px;
`

export const ViewStar = styled.View`
flex-direction: row;
gap: 5px;
height: 20px;
align-items: center;f   
`
export const ViewCalendar = styled.View`
flex-direction: row;
gap: 5px;
height: 22px;   
width: 100px;
align-items: center;
background-color: #E8FCFD;
gap: 10px;
justify-content: center;
`

export const TextName = styled.Text`
font-family: 'MontserratAlternates_600SemiBold';    
font-size: 15px;
`
export const TextLoc = styled.TextInput` 
font-family: 'Quicksand_600SemiBold';
font-size: 15px;
`   
export const TextAv = styled.Text`
font-family: 'Quicksand_600SemiBold';
font-size: 17px;
color: #F9A620;
`
export const TextCalendar = styled.Text`
font-family: 'Quicksand_600SemiBold';
color: #49B3BA;
`