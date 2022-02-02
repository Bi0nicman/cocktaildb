import React, {useState}from "react";
import { StyleSheet,View,TextInput } from "react-native";

export default function SearchBar(props:any) {
    const [nameItem,setNameItem] = useState("");
    const handleSubmit = () => {
        const {onSubmit} = props;
    };
    return(
        <View style = {styles.container}>
        <TextInput style ={styles.textInput} 
                    placeholder={props.placeholder} 
                    onSubmitEditing={(value) => }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        borderRadius: 5
    },
    textInput:{
        flex:1,
        borderRadius:5,
        color:"black"
    }
})