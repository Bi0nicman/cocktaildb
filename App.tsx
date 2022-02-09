import React , {useState} from "react";
import { StyleSheet,Button,FlatList,TouchableOpacity,Text} from 'react-native';
import SingleDrinkComponent from "./components/SingleDrinkComponent";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeComponent from "./components/HomeComponent";

const Stack = createNativeStackNavigator();



export default function App(){
    
    return(

        <NavigationContainer >
            
            <Stack.Navigator initialRouteName="Home">
               
                <Stack.Screen 
                    name="Home" 
                    component={HomeComponent}
                    options={{
                        title:'Cocktaildb.com',
                        headerStyle:{
                            backgroundColor:"#1b0710",
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color:"#fff",
                        }, 
                    }
                    }    
                    
                />
                <Stack.Screen 
                    name="Details" 
                    component={SingleDrinkComponent}
                    options={{
                        title:'Cocktaildb.com',
                        headerStyle:{
                            backgroundColor:"#1b0710",
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color:"#fff",}
                        }
                    } 
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
                       

}
