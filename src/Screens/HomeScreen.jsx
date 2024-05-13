import React, { useEffect, useState } from 'react'
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Common/Header'
import Home from './Tabs/Home';
import WishList from './Tabs/WishList';
import Notification from './Tabs/Notification';
import User from './Tabs/User';
import Serach from './Tabs/Search';
const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyBoardVisible, setIsKeyBoardVisible] = useState(false);
  useEffect(()=>{
   const KeyboardDidShowListner = Keyboard.addListener(
    'keyboardDidShow',
    ()=>{
      setIsKeyBoardVisible(true)
    }
   );
   const KeyboardDidHideListner = Keyboard.addListener(
    'keyboardDidHide',
    ()=>{
      setIsKeyBoardVisible(false)
    }
   );

   return ()=>{
    KeyboardDidHideListner.remove()
    KeyboardDidShowListner.remove()
   }

  },[])

  
  return (
    <View style={styles.container}>
      {
        selectedTab == 0 ? (<Home />) :
          selectedTab == 1 ? (<Serach />) :
            selectedTab == 2 ? (<WishList />) :
              selectedTab == 3 ? (<Notification />) :
                (<User />)
      }
      {!isKeyBoardVisible &&(
          <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Image
              source={
                selectedTab == 0?
                require('../Images/homeFill.png'):
                require('../Images/home.png')}
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity >
  
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Image
              source={require('../Images/search.png')}
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity >
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Image
              source={selectedTab == 2 ?
                require('../Images/wishListFill.png'):
                require('../Images/wishlist.png')}
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity >
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(3);
            }}
          >
            <Image
              source={
                selectedTab == 3 ?
                  require('../Images/bellFill.png') :
                  require('../Images/bell.png')}
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity >
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}
          >
            <Image
              source={
                selectedTab == 4 ?
                  require('../Images/userFill.png') :
                  require('../Images/user.png')
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity >
        </View>
        )
      }
     
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  bottomTab: {
    width: '20%',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomTabIcon: {
    width: 24,
    height: 24
  }
})
