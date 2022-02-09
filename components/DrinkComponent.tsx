import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import DrinkInterface from "../src/drinkInterface";



export default function DrinkComponent (props:DrinkInterface) {
   
    return(
        <View style={styles.container}>
            
            <Image style={{width: 200, height: 200}} source={{uri:props.strDrinkThumb}}/>
            <Text style={{color:"white"}}>{props.strDrink}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        color:'white',
        backgroundColor:"#2c0d1b",
        fontFamily:'DejaVu Sans Mono, monospace',
       /* flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:"10%",*/
      },
      wrapper:{
        width: 0.3,
        height: 0.3,
      },
      txt:{
          color:"white",
          textAlign:"center",
      }
})