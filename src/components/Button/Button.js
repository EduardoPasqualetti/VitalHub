import styled from 'styled-components'

export const Btn = styled.TouchableOpacity`
width: 90%;
height: 55px;
border-radius: 8px;
background-color: #496BBA;
align-items: center;
justify-content: center;
margin-top: 40px;

`

export const BtnGoogle = styled(Btn)`
background-color: #FAFAFA;
border: #496BBA;
flex-direction: row;
gap: 25px;
margin-top: 20px;
`

export const BtnReturn = styled.TouchableOpacity`
position: absolute;
align-self: flex-start;
margin-top: 85px;
margin-left: 20px;  
`

export const IconReturn = styled.Image`
width: 40px;
height: 40px;
`   
export const IconClose = styled(IconReturn)`
width: 35px;
height: 35px;
`

export const ButtonGoOut = styled(Btn)`
background-color: #ACABB7;
width: 55%;
margin-bottom: 50px;
`

export const BtnSchedule = styled.TouchableOpacity`
align-self: flex-end;
margin-bottom: 80px;
margin-right: 30px;
width: 75px;
height: 75px;
background-color: #49B3BA;
align-items: center;
justify-content: center;
border-radius: 8px;
`