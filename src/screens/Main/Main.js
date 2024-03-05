import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const BottomTab = createBottomTabNavigator()

import {Home} from '../Home/Home'
import {Profile} from '../Profile/Profile'

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'

export const Main = () => {
    return(
        <BottomTab.Navigator
          initialRouteName="Home"

          screenOptions={ ({route}) => ({
            tabBarStyle: { backgroundColor: '#fff', height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: "transparent",
            tabBarShowLabel: false,
            headerShown: false,
            
            tabBarIcon: ({focused}) => {
                if (route.name === 'Home') {
                    return (
                        <></>
                    )
                }else{

                }
            }
          })}
          >

            
            
            
            <BottomTab.Screen
             name="Home"
             component={Home}
            />

            <BottomTab.Screen
             name="Profile"
             component={Profile}
            />
        </BottomTab.Navigator>
    )
}