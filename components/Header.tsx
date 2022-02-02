import React from "react";
import {StyleSheet,View,Text} from "react-native";

export default function Header(){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>CocktailApp.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        position:"absolute",
        top:0,
        
        backgroundColor: '#1b0710',
        borderBottomWidth:1.5,
        borderBottomColor:"#1b0710",
        shadowColor:"black",
        width:"100%",
        
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        shadowColor:"#E59400",
        elevation: 20,
        
        height:100, 
    },
    headerText:{
        color:"#fff",
        fontFamily:'DejaVu Sans Mono, monospace',
        textAlign:"center",
      
    }
})