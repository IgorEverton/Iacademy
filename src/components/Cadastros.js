import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';




const CadastroForm = () =>{
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

      return(
      <View style={{display:"flex",flex:1, margin:25}}>
        <View style={{ alignItems:"end", marginRight:"40px"}}>
          <Text style={{fontSize:"25px"}}>X</Text>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:43, fontWeight:"bold",marginTop:"80px"}}>Cadastro</Text>

          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Nome Completo</Text>
            <TextInput placeholder=" seu nome completo"style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>


          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>E-mail</Text>
            <TextInput placeholder=" exemplo@dominio.com" style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}/>
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Senha</Text>       
          </View>
          <TextInput placeholder=" min 8 caracteres" style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px", fontSize:"14px", color:"#13293D"}}/>

          <View style={{width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Confime sua senha</Text>       
          </View>

          <TextInput placeholder=" min 8 caracteres" style={{backgroundColor:"#A0DAF3", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"60px", fontSize:"14px", color:"#13293D"}}/>
            <TouchableOpacity style={{backgroundColor:"#1B98E0", width:"140px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", color:"white"}}>
                <Text style={{color:"white", fontSize:18 }}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={{color:"#3DA2FF",marginTop:"32px",fontWeight: 600}}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>Voltar</TouchableOpacity>
            </Text>
        </View>
      </View>
  )
  }



export default ()=>{
  return(
    <View style={{flex:1}}> 

      <CadastroForm/>
    </View>
  )
}