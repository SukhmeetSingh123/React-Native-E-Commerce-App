import React  from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButtom =({bg,title,onClick ,color})=> {
    return (
      <TouchableOpacity 
      style={[styles.btn,{backgroundColor:bg}]} 
      onPress={()=>{
        onClick();
      }}>
        <Text style={{color:color,fontSize:18,fontWeight:'500'}}> {title} </Text>
      </TouchableOpacity>
    )
  }


export default CustomButtom
const styles=StyleSheet.create({
    btn:{
        width:Dimensions.get('window').width-40,
        height:53,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:30,
        borderRadius:10
    }
})
