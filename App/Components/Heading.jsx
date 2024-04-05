import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors/Colors'

export default function Heading({text, isViewAll}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {/* condition */}

      {isViewAll&& <Text>View All</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    heading:{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10,
        borderLeftWidth:5,
        paddingLeft:10,
        borderColor:Colors.PRIMARY
    },
})