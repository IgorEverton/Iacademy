import React,  {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const LoginForm = () =>{
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !senha) {
      alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        if (user.email === email && user.senha === senha) {
          alert('Sucesso', 'Login bem-sucedido');
          // Navegar para a próxima tela, por exemplo, Dashboard
          navigation.navigate('Dashboard');
        } else {
          alert('Erro', 'Credenciais inválidas');
        }
      } else {
        alert('Erro', 'Usuário não encontrado');
      }
    } catch (error) {
        alert('Ocorreu um erro ao fazer o login');
    }
  };

      return(
      <View style={styles.container}>
        <Text style={styles.h1}>Login</Text>

        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
          <Text style={styles.label}>Senha</Text>       
          {/* <Text style={styles.label}>Esqueceu sua senha?</Text> */}
        </View>
          <TextInput style={styles.input} value={senha} onChangeText={setSenha}/>
          <View style={{paddingTop:"2rem"}}>
            <TouchableOpacity onPress={handleLogin}
            style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>  
          </View>
            <Text style={{fontWeight:200,marginTop:"32px",color:"#FCFCFC"}}>Não tem conta? 
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={{ fontWeight: 600,color:"#FCFCFC"}}> Se cadastre clicando aqui</TouchableOpacity>
            </Text>
      </View>
  );
  }



export default ()=>{
  return(
    <View style={{flex:1}}> 

      <LoginForm/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    display:"flex",
    paddingTop:"6.5rem",
    alignItems:"center", 
    backgroundColor:"#1A1922",
    paddingBottom:"6.5rem",
  },
  h1:{
    textAlign:"center",
    fontSize:43, 
    fontWeight:"bold",
    marginTop:"2rem", 
    marginBottom:"5rem",
    color:"#FCFCFC",
    marginBttom:"3rem"
  },
  label:{
    fontSize:15, 
    fontWeight:"bold",
    color:"#FCFCFC"
  },
  input:{
    backgroundColor:"#2F3142", 
    height:"40px", 
    width:"250px",
    borderRadius:"5px",
    marginTop:"0.5rem", 
    marginBottom:"1rem"
  },
  button:{
    backgroundColor:"#1B98E0", 
    width:"110px", 
    height:"40px", 
    borderRadius:"5px", 
    justifyContent:"center", 
    alignItems:"center",
  },
  textButton:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center"
  }
});