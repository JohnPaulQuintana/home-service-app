import { View, Text, FlatList, Image,StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors/Colors';
export default function Categories() {
    
    const [categories, setCategories]=useState([]);
    
    useEffect(()=>{
        getCategories();
    }, [])
    // get category
    const getCategories=()=>{
        GlobalApi.getCategory().then(res=>{
            console.log(res)
            setCategories(res?.categories)
        })
    }

  return (
    <View style={{marginTop:10}}>
      <Heading text={"Categories"} isViewAll={true}/>

      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({item,index})=>(
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                            // style={styles.sliderImage} 
                            style={{width:50,height:50, borderRadius:10}}
                        />
                </View>
                <Text style={{fontFamily:'outfit-medium', marginTop:5}}>{item?.name}</Text>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    iconContainer: {
        backgroundColor:Colors.LIGHT_GRAY,
        padding:17,
        borderRadius:99
    }
})