import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React  from 'react'
import { Text, View } from 'react-native'
import Main from '../Screens/Main'
import ProductDetail from '../Screens/ProductDetail'
import Cart from '../Screens/Cart'

const Stack=createNativeStackNavigator()
const AppNavigator =()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Main' 
            component={Main}
            options={{
                headerShown:false
            }}/>

            <Stack.Screen 
            name='ProductDetail' 
            component={ProductDetail}
            options={{
                headerShown:false
            }}/>

            <Stack.Screen 
            name='Cart' 
            component={Cart}
            options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default AppNavigator
