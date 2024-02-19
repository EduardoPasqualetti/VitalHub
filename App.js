import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { Register } from './src/screens/Register/Register';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { ResetPwd } from './src/screens/ResetPwd/ResetPwd';
import { Recover } from './src/screens/Recover/Recover';
import { Profile } from './src/screens/Profile/Profile';

const Stack = createNativeStackNavigator()

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { MedicalRecord } from './src/screens/MedicalRecord/MedicalRecord';
import { HomeDoctor } from './src/screens/HomeDoctor/HomeDoctor';
import { Home } from './src/screens/Home/Home';


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (

    // Envolve a estrutura da navegacao
    <NavigationContainer>


      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name='Navigation'

          component={Navigation}

          options={{title: 'Navigation'}}
        />

        <Stack.Screen
          name='Home'
          
          component={Home}

          options={{title: 'Home'}}
          />

        <Stack.Screen
          name="Login"

          component={Login}

          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="MedicalRecord"

          component={MedicalRecord}

          options={{ title: 'MedicalRecord' }}
        />

        <Stack.Screen
          name="Register"

          component={Register}

          options={{ title: 'Register' }}
        />

        <Stack.Screen
          name="Profile"

          component={Profile}

          options={{ title: 'Profile' }}
        />

        <Stack.Screen
          name="Recover"

          component={Recover}

          options={{ title: 'Recover' }}
        />

        <Stack.Screen
          name="VerifyEmail"

          component={VerifyEmail}

          options={{ title: 'VerifyEmail' }}
        />

        <Stack.Screen
          name="ResetPwd"

          component={ResetPwd}

          options={{ title: 'ResetPwd' }}
        />




      </Stack.Navigator>

    </NavigationContainer>

  );
}

