import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../Common/Header'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../Redux/slices/ProductSlice'

const Home = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([])
  const dispatch=useDispatch();
  const getProduct = async () => {
    const fetchedProduct = await fetch('https://fakestoreapi.com/products');
    const res = await fetchedProduct.json();
    setProducts(res);
    res.map(item=>{
      item.qty=1;
    })
    dispatch(addProducts(res))
    return;
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../Images/menu.png')}
        rightIcon={require('../../Images/cart.png')}
        title={'E-Commerce App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}

      />

      <FlatList
        data={products}
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
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
