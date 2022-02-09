import React , {useEffect, useState} from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import DrinkInterface from "../src/DrinkInterface";
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';


type RootParamList = {
  Home: undefined;
  BlurredSuccess: { blurredSuccessCallback: () => void };
};

type BlurredSuccessRouteProp = RouteProp<RootParamList, 'BlurredSuccess'>;
type BlurredSuccessNavigationProp = NavigationScreenProp<RootParamList, 'BlurredSuccess'>;

type Props = {
  navigation: BlurredSuccessNavigationProp,
  route: BlurredSuccessRouteProp;
};
export default function SingleDrinkComponent ({navigation,route}:Props) {
  
    const[data,setData] = useState([]);
    const{drinkID} = route.params;

    const handleRequest = async (drinkID:string) =>{
        try{
            console.log("DrinkPage drinkId:" , drinkID);
            const parsedDrink = drinkID.replace(/['"]+/g, '')
            const urlcomplete = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + parsedDrink;
            
            const response = await fetch(urlcomplete);
            const json = await response.json();
            console.log(json.drinks)
            setData(json.drinks);

        }catch(error){
          console.error(error);
        }
      }
     
      useEffect( () => {
        handleRequest(drinkID);
      },[]);
    return(
        <View style={styles.container}>
            {data.map((drinkFound:DrinkInterface,index:number) => 
            <View key={index}>
                <Text >{drinkFound.strDrink}</Text>
                <Image style={styles.imgDrink} source={{uri:drinkFound.strDrinkThumb}}/>
                <Text style={styles.element}>Ingredients</Text>
                <Text >{drinkFound.strIngredient1}</Text>
                <Text >{drinkFound.strIngredient2}</Text>
                <Text >{drinkFound.strIngredient3}</Text>
                <Text >{drinkFound.strIngredient4}</Text>
                <Text >{drinkFound.strIngredient5}</Text>
                <Text >{drinkFound.strIngredient6}</Text>
        </View>
         )}
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#2c0d1b",
      color:'#fff',
      /*flex:1,
      flexDirection:"column",
      justifyContent:"flex-start",
      alignContent:"center",*/
      
  },
  element:{
    color:"#fff",
  },
  imgDrink:{
    width:230,
    height:230,
  }
});

