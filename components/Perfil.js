import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();


const Perfil=()=>{
  const [email, setEmail] = useState("");

      return(
      <View style={{display:"flex",flex:1, margin:25}}>
        <View style={{ alignItems:"end", marginRight:"40px"}}>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:35, fontWeight:"bold",marginTop:"40px", marginBottom:"40px"}}>Perfil</Text>

          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Novo E-mail</Text>
            <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>


          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Confime o novo E-mail</Text>
            <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Nova senha</Text>       
          </View>
          <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px", fontSize:"14px"}}/>

          <View style={{width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Confime sua senha</Text>       
          </View>

          <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"20px", fontSize:"14px", color:"#13293D"}}/>
            <TouchableOpacity style={{backgroundColor:"#1B98E0", color:"white", width:"180px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", marginVertical:50,marginBottom:"5%"}}>
                <Text style={{color:"white", fontSize:18 }}>Atualizar</Text>
            </TouchableOpacity> 
            <Text style={{color:"#3DA2FF",marginTop:"25px",fontWeight: 600}}>
              <TouchableOpacity>Voltar</TouchableOpacity>
            </Text> 
        </View>
      </View>
  )
  }




export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex:1}}> 
        <Perfil/>
      </View>
    </NavigationContainer>
  );
}


