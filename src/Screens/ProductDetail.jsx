import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomButton from '../Common/CustomButton'
import { useDispatch } from 'react-redux'
import { addWishListItem } from '../Redux/slices/WishListSlice'
import { addCartItem } from '../Redux/slices/CartSlice'
const ProductDetail = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty,setQty]=useState(1)
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../Images/back.png')}
        rightIcon={require('../Images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack()
        }}
        isCart={true}
      />
      <ScrollView>

        <Image
          source={{ uri: route.params.data.item.image }}
          style={styles.banner}
        />
        <Text style={styles.title}>{route.params.data.item.title}</Text>
        <Text style={styles.desc}>{route.params.data.item.description}</Text>
        <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
          <Text style={[styles.price, { color: '#000' }]}>Price :</Text>
          <Text style={styles.price}>{'$' + route.params.data.item.price}</Text>
          <View style={styles.qtyView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if(qty>1){
                  setQty(qty-1);
                }
              }}
              >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setQty(qty+1);
              }}
              >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.wishList}
          onPress={() => {
            dispatch(addWishListItem(route.params.data.item))
          }}
        >
          <Image
            source={require('../Images/wishlist.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <CustomButton
          bg={'#FF9A0C'}
          title={'Add To Cart'}
          color={'#fff'}

          onClick={() => {
            console.log(route.params.data.item)
            dispatch(addCartItem({...route.params.data.item,qty:qty}))
          }}

        />
      </ScrollView>
    </View>
  )
}

export default ProductDetail
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center'
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 20,
  },
  desc: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  price: {
    color: 'green',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  wishList: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    marginLeft:20
  },
  btn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginLeft: 10
  },
  qty: {
    marginLeft: 10,
    fontSize: 18
  }
})
