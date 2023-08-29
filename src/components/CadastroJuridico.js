import React,  {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CadastroFormJuridica = () =>{
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");
  const navigation = useNavigation();


  const handleCadastro = async () => {
    if (!nome || !cnpj || !email || !senha || !confirmaSenha) {
      alert('Erro', 'Todos os campos são obrigatórios');
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem');
    }

    const userType = "juridica";

    try {
      await AsyncStorage.setItem('user', JSON.stringify({ nome, email, cnpj, senha, userType  }));
      alert('Cadastro realizado com sucesso');
      setNome('');
      setEmail('');
      setSenha('');
      setCnpj('');
      confirmaSenha('');
      return true;
    } catch (error) {
      Alert.alert('Ocorreu um erro ao realizar o cadastro' + error);
      return false;
    }
  };
  

  const handleCadastroAndNavigate = async () => {
    const cadastroSucesso = await handleCadastro();
    if (cadastroSucesso) {
      navigation.navigate('Login');
    } else {
      alert('O cadastro não foi bem-sucedido.');
    }
  };
  

      return(
        
      <View style={styles.container}>
        <View style={{alignItems:"center"}}>
        <Text style={styles.h1}>Cadastro</Text>

          <View style={styles.inputView}>
            <Text style={styles.label}>Nome da Empresa</Text>
            <TextInput placeholder=" seu nome completo"style={styles.input} value={nome} onChangeText={setNome}/>
          </View>


          <View style={styles.inputView}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput keyboardType="email-address"placeholder=" exemplo@dominio.com" style={styles.input} value={email} onChangeText={setEmail}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>CNPJ</Text>
            <TextInput keyboardType="numeric"placeholder="Digite seu CNPJ" style={styles.input} value={cnpj} onChangeText={setCnpj}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Senha</Text>       
            <TextInput placeholder=" min 8 caracteres" style={styles.input} value={senha} onChangeText={setSenha}/>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Confime sua senha</Text>       
            <TextInput placeholder=" min 8 caracteres" style={styles.input} value={confirmaSenha} onChangeText={setconfirmaSenha} secureTextEntry={true}/>
          </View>
          <View style={{paddingTop:"2rem"}}>
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
  }



export default ()=>{
  return(
    <View style={{flex:1}}> 
      <CadastroFormJuridica/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display:"flex",
    flex:1, 
    backgroundColor:"#1A1922",
    paddingTop: 30,
    paddingBottom: 30
  },
  h1:{
    textAlign:"center",
    fontSize:43, 
    fontWeight:"bold",
    marginTop:"2rem", 
    marginBottom:"2rem",
    color:"#FCFCFC",
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
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  inputView:{
    marginTop:"1rem"
  },
  button:{
    backgroundColor:"#1B98E0", 
    width:"110px", 
    height:"40px", 
    borderRadius:"5px", 
    justifyContent:"center", 
    alignItems:"center",
    marginBottom:"2rem"
  },
  textButton:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center"
  }
});