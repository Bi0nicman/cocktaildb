import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import DrinkInterface from "../src/drinkInterface";

export default function DrinkComponent (props:DrinkInterface) {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text >{props.idDrink}</Text>
                <Text >{props.strDrink}</Text>
                <Image style={{width: 200, height: 200}} source={{uri:props.imgDrink}}/>
            </View>
        </View>
    )

}

const styles= StyleSheet.create({
    container: {
        color:'white',
        fontFamily:'DejaVu Sans Mono, monospace',
        display:"flex",
      },
      container2:{
          color:"white",
          flex:1,
          flexDirection:"row",
          flexWrap: "wrap",
      },
      row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 10,
      },
})