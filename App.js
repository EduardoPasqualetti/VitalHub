import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { Register } from './src/screens/Register/Register';
const Stack = createNativeStackNavigator()

import { MontserratAlternates_600SemiBold, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { ResetPwd } from './src/screens/ResetPwd/ResetPwd';
import { Recover } from './src/screens/Recover/Recover';

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium
  })
  
  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (



    // Envolve a estrutura da navegacao
    <NavigationContainer>

      {/* componente para navegacao */}
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>

        <Stack.Screen
        // nome da tela
          name='Navegacao'
          // componente que sera a tela
          component={Navigation}
          
          options={{title: 'Navegacao'}}
        />

        <Stack.Screen
          name="Login"

          component={Login}

          options={{title: 'Login'}}
        />

        <Stack.Screen
          name="Register"

          component={Register}

          options={{title: 'Register'}}
        />
        
        <Stack.Screen
          name="Recover"

          component={Recover}

          options={{title: 'Recover'}}
        />

        <Stack.Screen
          name="VerifyEmail"

          component={VerifyEmail}

          options={{title: 'VerifyEmail'}}
        />

        <Stack.Screen
          name="ResetPwd"

          component={ResetPwd}

          options={{title: 'ResetPwd'}}
        />

      
      </Stack.Navigator>

    </NavigationContainer>

  );
}
