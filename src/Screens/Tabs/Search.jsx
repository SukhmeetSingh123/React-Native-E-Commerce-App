import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../Common/Header';
import { useNavigation } from '@react-navigation/native';

const Serach = () => {
  const products = useSelector(state => state.product);
  const [search, setSearch] = useState('')
  const [oldData, setOldData] = useState(products.data);
  const [serachedList, setSerchedList] = useState(oldData);
  const navigation = useNavigation();
  const filterData = (txt) => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    })

    setSerchedList(newData);
  }
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../Images/search.png')}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt)
              filterData(txt)
            }}
            placeholder='Search items here ...' style={styles.input} />
        </View>
        {search !== '' && (
          <TouchableOpacity onPress={() => {
            setSearch('')
            setSerchedList(oldData);
            }} style={[styles.icon, { justifyContent: 'center', alignItems: 'center', marginRight: 14 }]}>
            <Image
              source={require('../../Images/clear.png')}
              style={[styles.icon, { width: 16, height: 16 }]}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop:10}}>
        <FlatList
          data={serachedList}
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
    </View>
  )
}


export default Serach
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center'
  },
  input: {
    width: '80%',
    marginLeft: 10
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
