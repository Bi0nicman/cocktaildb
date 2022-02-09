import React, {useEffect,useState} from "react";
import { StyleSheet, 
        TextInput, 
        View,
        FlatList,
        SafeAreaView,
        TouchableOpacity,
        Pressable,
        Text, 
        Touchable} from 'react-native';

import {RequestData} from "../src/RequestData";
import DrinkComponent from "./DrinkComponent";
import DrinkInterface from "../src/DrinkInterface";


export default function HomeComponent({navigation}){
    const [data,setData] = useState<DrinkInterface[]>([]);
    const numColumns = 2;
    
    const handleRequest = async(drink:string) => {
        try{
            const response = await RequestData(drink);
            const responseJson = await response.json();
            console.log(response);  
            if(responseJson.drinks === null){
                setData([]);   
            }
            else{
                setData(responseJson.drinks);
                
            }
          
        }catch(error){
            console.error(error);
        }
    }
    const handleRequestRandom = async () =>{
        try{
            
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const responseJson = await response.json();
            
            setData(responseJson.drinks);
    
        }catch(error){
            console.error(error);
        }
      }
    
    useEffect( () => {
    },[]);
   
     
    /* <TextInput style={styles.txtInput} placeholder=" Find a Cocktail..." 
                onSubmitEditing={(value) => handleRequest(value.nativeEvent.text)}/>
               {
                <FlatList  style={styles.productContainer}data={data} 
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item,index}) => 
               
                <TouchableOpacity style={styles.products} key={index}
                        onPress={() => navigation.navigate('Details',{drinkID:item.idDrink})}>
                    <DrinkComponent key={index} idDrink={item.idDrink} 
                                    strDrink={item.strDrink} 
                                    strDrinkThumb={item.strDrinkThumb}/>
                </TouchableOpacity>
            
                    }    />
            }*/

   
    return(
        
        <SafeAreaView style={styles.container}>
            
            <TextInput style={styles.txtInput} placeholder=" Find a Cocktail..." 
                onSubmitEditing={(value) => handleRequest(value.nativeEvent.text)}/>
               {
                <FlatList  style={styles.productContainer} numColumns={numColumns} data={data} 
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item,index}) => 
               
                <TouchableOpacity style={styles.products} key={index}
                        onPress={() => navigation.navigate('Details',{drinkID:item.idDrink})}>
                    <DrinkComponent key={index} idDrink={item.idDrink} 
                                    strDrink={item.strDrink} 
                                    strDrinkThumb={item.strDrinkThumb}/>
                </TouchableOpacity>
            
                    }    />
            }
            <TouchableOpacity style={styles.button}
                onPress={() => {
                handleRequestRandom()
                }}>
                <Text>Random</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2c0d1b",
        color:'#fff',
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        maxHeight:"100%",
    },
    button:{
        width:80,
        height:40,
        margin:10,
        backgroundColor:"#F22E2E",
        color:"#fff",
        borderRadius:10,
        padding:10,
        shadowColor: 'rgba(255, 255, 255, 0.2)',
        shadowOpacity: 1.5,
        elevation: 2,
        shadowRadius: 10 ,
    },
    txtInput:{
        width:120,
        height:40,
        margin:10,
        padding:8,
        backgroundColor:"gray",
        borderRadius:15,
    },
    products:{
        margin:8,
        padding:8,
        width:240,
        height:240,
        
    },
    productContainer:{
       
        borderWidth:5,
        
        borderColor:"red", 
    }
})