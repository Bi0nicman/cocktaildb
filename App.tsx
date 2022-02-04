import React, {useEffect,useState} from "react";
import { StyleSheet, 
        Platform,
        useWindowDimensions,
        TextInput, 
        View,
        TouchableOpacity  } from 'react-native';
import DrinkComponent from "./components/DrinkComponent";
import {RequestData} from "./src/RequestData";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import DrinkInterface from "./src/drinkInterface";

function HomeScreen(){
    const [data,setData] = useState([]);

    const handleRequest = async(drink:string) => {
        try{
            const response = await RequestData(drink);
            const responseJson = await response.json();
            console.log(responseJson.drinks);
            if(responseJson == null){
                setData([]);
                
            }
            else{
                setData(responseJson.drinks);
            console.log(data);
            }
          
        }catch(error){
            console.error(error);
        }
    }

    useEffect( () => {
       
    },[]);

    return(
        <View style={styles.container}>
            <TextInput placeholder="Find a Cocktail..." onSubmitEditing={(value) => handleRequest(value.nativeEvent.text)}></TextInput>
            {
                data.map((drinkFound:any,index:number) => 
                <TouchableOpacity key={index}>
                    <DrinkComponent idDrink={drinkFound.idDrink} 
                    strDrink={drinkFound.strDrink} imgDrink={drinkFound.strDrinkThumb}/>
                </TouchableOpacity>
                )
            }
        </View>
    )
}

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer >

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{
                            title:'Cocktaildb.com',
                            headerStyle:{
                                backgroundColor:"#1b0710",
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color:"#fff",}
                            }}    
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2c0d1b",
        color:'#fff',
        height:"100%",
    },
    products:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      flexBasis:"20%",
    },
})