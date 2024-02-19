import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const ContentAccount = styled.View`
margin-top: 40px;
width: 90%;
height: 30px;
flex-direction: row;
justify-content: center;
gap: 5px;
`

export const ContentCode = styled.View`
width: 90%;
height: 70px;
flex-direction: row;
margin-top: 30px;
justify-content: space-between;
`

export const ContainerScroll = styled.ScrollView`
flex: 1;
background-color: white;
`

export const ContainerProfile = styled.View`
width: 90%;
height: 100%;
align-self: center;
align-items: center;
`
export const ContainerSafeEdit = styled(ContainerProfile)`
margin-top: 120px;
`


export const ViewFormat = styled.View`
flex-direction: row;
gap: 35px;
`

export const ViewTitle = styled.View`
width: 80%;
height: 130px;
position: absolute;
z-index: 99;
margin-bottom: 20px;
background-color: #FFFFFF;
border-radius: 7px;
align-self: center;
align-items: center;
justify-content: center;
margin-top: 280px;
`

export const ViewTitleRecord = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 85%;
height: 50px;
padding: 3%;
margin-bottom: 30px;
`

export const FilterAppointment = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
`