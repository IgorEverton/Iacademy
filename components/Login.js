import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';





const LoginForm = () =>{
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

      return(
      <View style={{display:"flex",flex:1,alignItems:"center"}}>
        
        <Text style={{textAlign:"center",fontSize:43, fontWeight:"bold",marginTop:"2rem", marginBottom:"30px"}}>Login</Text>

        <View style={{marginTop:"35px"}}>
          <Text style={{fontSize:15, fontWeight:"bold"}}>E-mail</Text>
          <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px"}}/>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
          <Text style={{fontSize:15, fontWeight:"bold"}}>Senha</Text>       
          <Text>Esqueceu sua senha?</Text>

        </View>
          <TextInput style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px"}}/>
            <TouchableOpacity style={{backgroundColor:"#1B98E0", width:"110px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", color:"white"}}>
                <Text style={{color:"white", fontSize:18 }}>Entrar</Text>
            </TouchableOpacity>  
            <Text style={{fontWeight:200, color:"#13293D",marginTop:"32px"}}>Não tem uma conta? Cadastre-se aqui</Text>

      </View>
  )
  }



export default ()=>{
  return(
    <View style={{flex:1}}> 

      <LoginForm/>
    </View>
  )
}