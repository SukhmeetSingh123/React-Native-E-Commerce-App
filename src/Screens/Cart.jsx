import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Common/Header'
import { addCartItem, reduceCartItem, removeCartItem } from '../Redux/slices/CartSlice'

const Cart =()=> {
    const items=useSelector(state =>state.cart)
    const [cartItems,setCartItems]=useState([])
    const navigation = useNavigation();
    const dispatch=useDispatch()
    useEffect(()=>{
      setCartItems(items.data)
    },[items])

      return (
        <View style={styles.container}>
          <Header title={'Cart Items'} />
          <FlatList
          data={cartItems}
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
                  <Text style={styles.name}>{item.item?.title?.length > 20 ? item.item.title.substring(0, 20) + '...' : item.item.title}</Text>
  
                  <Text style={styles.desc}>{item.item?.description?.length > 30 ? item.item.description.substring(0, 30) + '...' : item.item.description}</Text>

                  <View style={styles.qtyView}>
                  <Text style={styles.price}>{'$' + item.item.price}</Text>
                    <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{
                        if(item.item.qty>1){
                          dispatch(reduceCartItem(item.item))
                        }else{
                          
                          dispatch(removeCartItem(index))
                        }
                    }}
                    >
                      <Text style={{fontSize:18,fontWeight:'600'}}>-</Text>
                    </TouchableOpacity>
                     <Text style={styles.qty}>{item.item.qty}</Text> 
                    <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{
                      dispatch(addCartItem(item.item))
                    }}
                    >
                      <Text style={{fontSize:18,fontWeight:'600'}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
  
          }}
          />
        </View>
      )
  }


export default Cart
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
    },
    qtyView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    btn:{
      padding:5,
      width:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      borderWidth:0.5,
      marginLeft:10
    },
    qty:{
      marginLeft:10,
      fontSize:18
    }
  })
