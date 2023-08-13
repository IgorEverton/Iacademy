import React,  {useState} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesome5 , MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons'
import imgMongoDB from './assets/img/MongoDBIcon.png'
import imgPy from './assets/img/PythonIcon.png'
import imgRedis from './assets/img/RedisNoSQL.png'
import imgPhp from './assets/img/PHP.png'
import imgGames from './assets/img/DevGames.png'
import imgInvest from './assets/img/Invest.png'




const Tab = createBottomTabNavigator();

const Dashboard = () =>{
  const [email, setEmail] = useState("");

      return(
      <View style={{ flex:1, alignItems:"center"}}>
        <Text style={estilos.h1}>Dashboard</Text>
        <Text style={estilos.h2}>Cursos em andamento</Text>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center"}} source={imgMongoDB} />
          <TouchableOpacity style={estilos.botao}>Continuar de onde parou</TouchableOpacity>
        <Text style={{fontWeight:"bold", fontSize:10}}>MongoDB</Text>
      </View>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center"}} source={imgPy} />
          <TouchableOpacity style={estilos.botao}>Continuar de onde parou</TouchableOpacity>
        <Text style={{fontWeight:"bold", fontSize:10}}>Python completo</Text>
      </View>
      
      <Text style={estilos.h2}>Veja também:</Text>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center"}} source={imgRedis} />
          <TouchableOpacity style={estilos.botao}>Continuar de onde parou</TouchableOpacity>
        <Text style={{fontWeight:"bold", fontSize:10}}>Redis NoSQL</Text>
      </View>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center"}} source={imgPhp} />
          <TouchableOpacity style={estilos.botao}>Continuar de onde parou</TouchableOpacity>
        <Text style={{fontWeight:"bold", fontSize:10}}>PHP básico</Text>
      </View>

      <Text style={estilos.h2}>Veja também:</Text>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center", width:"37px", height:"37px"}} source={imgGames} />
        <Text style={{fontWeight:"bold", fontSize:10, width:"190px"}}>Desenvolvimento de jogos {'\n'}Internet das coisas  {'\n'}Carreira QA: Processos e Automação</Text>
        
      </View>

      <View style={estilos.curso}>
        <ImageBackground style={{margin: 5, padding: 20, alignSelf: "center", width:"37px", height:"37px"}} source={imgInvest} />
        <Text style={{fontWeight:"bold", fontSize:10, width:"190px"}}>Bolsa de Valores {'\n'}PIB  {'\n'}Criptomoedas</Text>
        
      </View>

     </View>
  )
  }



export default ()=>{
  return(
    <NavigationContainer >
      <Dashboard/>

      <View>
        <Tab.Navigator useLegacyImplementation tabBarOptions={{tabStyle:{backgroundColor:"#1C95CF"}, activeTintColor:"1B98E0", inactiveTintColor:"white" }}>
          <Tab.Screen name="Pendencia"
          options={{tabBarIcon:({size, color}) => (
            <FontAwesome5   name="clipboard-list" size={size} color={color}/>
          )}}
          />

          <Tab.Screen name="Home" //
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
  )
}




const estilos={
  h1:{
  textAlign:"center",
  fontSize:43, 
  fontWeight:"bold", 
  marginTop:"50px", 
  marginBottom:"60px"
  },
  h2:{
    marginRight:"35%",
    fontWeight:"bold",
    marginBottom: "20px"
  },
  curso:{
    backgroundColor:"#3DABDF", 
    width:"90%", height:"69px", 
    borderRadius:"5px",
    padding: 10,
    flexDirection: "row",
    minWidth: "230px",
    marginBottom:"10px"
  },
  botao:{
    backgroundColor:"#A4D8F5", color:"white", 
    width:"110px", height:"19px", 
    borderRadius: 5, 
    justifyContent:"center", alignItems:"center", 
    position: "absolute",
    right: "5%",
    fontSize: 9,
    fontFamily: "Inter"
  }
}