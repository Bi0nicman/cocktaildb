import React, {useState,FC} from "React";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList,Text, View,Button } from 'react-native';

import Header from "./components/Header";
import DrinkComponent from "./components/DrinkComponent";
import {RequestData} from "./src/RequestData";
import {SearchBar}from "./components/SearchBar"
import Drink from "./src/DrinkInterface";

export default class App extends React.Component <{}, {drinkSearched:string,loading:boolean, drinkFound: any }> {
  
  constructor(props:any){
    super(props);
    this.state = {
      drinkSearched : "negroni",
      loading:false,
      drinkFound:[],
    };
  }
 
    handleRequest = async (drink:string) =>{
      this.setState({loading:true}, async() => {
        try{
            const response = await RequestData(drink);
            const responseJson = await response.json();
           this.setState({drinkFound:responseJson.drinks});
               console.log(this.state.drinkFound);
            
            this.setState({
              loading:false
            });
        }catch(error){
          this.setState({
            loading:false
          });
          throw error;
        }
      }
    )}

 render(){
  const {drinkFound,loading}= this.state;
  return (
    <View style={styles.container}>
      <Header/>
      <Button title="Press" onPress={() => this.handleRequest("negroni")}></Button>
      <FlatList data={drinkFound}
      renderItem={({item}) => (
        <DrinkComponent idDrink={item.idDrink} strDrink={item.strDrink} imgDrink={item.strDrinkThumb}/>
      )}
      />
      <SearchBar placeholder="scrivi" onSubmit={this.handleRequest}/>

    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    color:'#fff',
    fontFamily:'DejaVu Sans Mono, monospace',
    flex: 1,
    backgroundColor: '#2c0d1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    position:"relative",
    top:100,
    alignItems:"center",
    color:'#fff',
    fontFamily:'DejaVu Sans Mono, monospace'
  },
});
