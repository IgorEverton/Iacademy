import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesome5 , MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons'
import imgAtivCompleta from '../assets/img/CompletedIcon.png'


const estilos = {
  divzinha: {
    backgroundColor: "#3DABDF",
    marginHorizontal: '10px',
    padding: "10px",
    borderRadius: 3,
    flexDirection: "row",
  },
  texto:{
    color: "black",
    fontWeight: "bold",
    flexWrap: "wrap", 
    maxWidth: "89%",
    fontFamily: "", fontSize: 9,
    marginBottom:"16px"
  },
  texto1:{
    color: "black",
    fontWeight: "bold",
    flexWrap: "wrap", 
    maxWidth: "89%",
    fontFamily: "", fontSize: 9,

  },
  conteudo:{
    backgroundColor: "#A0DAF3",
    marginHorizontal: '10px',
    padding: 20,
    height:"500px"
  },
  textoConteudo:{
    fontSize: 10
  }

}

const Tab = createBottomTabNavigator();

const Python = () =>{
      return(
      <View style={{flex:1, backgroundColor: "white"}}> 
         <Text style={{textAlign:"center",fontSize:35, fontWeight:"bold",marginTop:"40px", marginBottom:"40px"}}>Feedback</Text>
        <View style={estilos.divzinha}>
          <ImageBackground source={imgAtivCompleta} style={{ height: 36, width: 40, margin: 5, alignSelf: "center" }} />
          <View style={{ flex: 1}}> {}
            <Text style={estilos.texto}>Atividade de empreendedorismo e invstimento</Text>
            <Text style={estilos.texto1}>Entregue dia 05/04 às 22h30</Text>
          </View>

        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.textoConteudo}>Lista</Text>
        </View>
      
      </View>
  );
  }



export default ()=>{
  return(
    <NavigationContainer >
      <Python/>
      <View>
        <Tab.Navigator useLegacyImplementation tabBarOptions={{tabStyle:{backgroundColor:"#1C95CF"}, activeTintColor:"1B98E0", inactiveTintColor:"white" }}>
          <Tab.Screen name="Pendencia"
          options={{tabBarIcon:({size, color}) => (
            <FontAwesome5   name="clipboard-list" size={size} color={color}/>
          )}}
          />

          <Tab.Screen name="Home" 
          options={{tabBarIcon:({size, color}) => (
            <FontAwesome  name="home" size={size} color={color}/>
          )}}
          />

          <Tab.Screen name="Perfil do usuário" 
          options={{tabBarIcon:({size, color}) => (
            <MaterialCommunityIcons  name="account" size={size} color={color}/>
          )}}
          />

        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}