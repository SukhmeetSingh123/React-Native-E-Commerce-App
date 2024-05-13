import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../Common/Header'

const WishList=()=> {
  const items=useSelector(state =>state.wishlist)
  const [wishListItems,setWishListItems]=useState(items.data)
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Header title={'WishList Items'}/>
        <FlatList
        data={wishListItems}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('ProductDetail', { data: item })
              }}
              style={styles.productItem}>
              <Image
                source={{ uri: item.item.image }}
                style={styles.itemImage}
              />

              <View>
                <Text style={styles.name}>{item.item.title.length > 20 ? item.item.title.substring(0, 20) + '...' : item.item.title}</Text>

                <Text style={styles.desc}>{item.item.description.length > 30 ? item.item.description.substring(0, 30) + '...' : item.item.description}</Text>
                <Text style={styles.price}>{'$' + item.item.price}</Text>
              </View>
            </TouchableOpacity>
          )

        }}
        />
      </View>
    )
  }
export default WishList

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 150,
    margin: 15,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemImage: {
    alignItems: 'center',
    width: 100,
    height: 100
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20
  },
  desc: {
    marginLeft: 20,

  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '60',
    marginLeft: 20,
    marginTop: 5,
  }
})
