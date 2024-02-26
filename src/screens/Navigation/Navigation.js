import { Button, View } from "react-native"

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent:'center', gap: '50px'}}> 
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}/>
            <Button title='Perfil'
            onPress={() => navigation.navigate("Profile")}/>
            <Button title='Prontuario'
            onPress={() => navigation.navigate("MedicalRecord")}/>
            <Button title='Home'
            onPress={() => navigation.navigate("Home")}/>
            <Button title='HomeUser'
            onPress={() => navigation.navigate("HomeUser")}/>
            <Button title='SelectClinic'
            onPress={() => navigation.navigate("SelectClinic")}/>
            <Button title='SelectDoctor'
            onPress={() => navigation.navigate("SelectDoctor")}/>
            <Button title='SelectData'
            onPress={() => navigation.navigate("SelectData")}/>
        </View>
    )
}   