import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from './HomeScreen'

const Drawer=createDrawerNavigator()
const Main= () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          headerShown:false
        }}/>
      </Drawer.Navigator>
    )
  }


export default Main
