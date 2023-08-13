import React,  {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';


const Perfil=()=>{
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

  useEffect(() => {
    // Carregar os dados do usuário do AsyncStorage ao carregar a tela de Perfil
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        setNome(user.nome);
        setEmail(user.email);
        setSenha(user.senha);
       }
    } catch (erro) {
      alert('Erro ao carregar os dados do usuário:'+ erro);
    }
  };

  const handleAtualizar = async () => {
    if (!nome || !email || !senha || !confirmaSenha) {
      alert('Todos os campos são obrigatórios');
      return;
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        // Atualizar os dados do usuário com os novos valores
        const updatedUser = { ...user, nome, email, senha };
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
        alert('Dados atualizados com sucesso');
      } else {
        alert('Usuário não encontrado');
      }
    } catch (erro) {
      alert('Ocorreu um erro ao atualizar os dados do usuário'+erro);
    }
  };

      return(
      <View style={{display:"flex",flex:1,backgroundColor:"#1A1922"}}>
        <View style={{ alignItems:"end", marginRight:"40px"}}>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={{textAlign:"center",fontSize:35, fontWeight:"bold",marginTop:"40px", marginBottom:"40px", color:"#FCFCFC"}}>Perfil</Text>

          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"#FCFCFC"}}>Novo E-mail</Text>
            <TextInput style={{backgroundColor:"#0880A2", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}
            value={nome}
            onChangeText={setNome}
            />
          </View>


          <View style={{marginTop:"35px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"#FCFCFC"}}>Confime o novo E-mail</Text>
            <TextInput style={{backgroundColor:"#0880A2", height:"30px", width:"250px",borderRadius:"5px", marginTop:"5px", fontSize:"14px", color:"#13293D"}}
            value={email}
            onChangeText={setEmail}
            />
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"32px",width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"#FCFCFC"}}>Nova senha</Text>       
          </View>
          <TextInput style={{backgroundColor:"#0880A2", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"40px", fontSize:"14px"}}
          value={senha}
          onChangeText={setSenha}/>

          <View style={{width:"250px"}}>
            <Text style={{fontSize:15, fontWeight:"bold", color:"#FCFCFC"}}>Confime sua senha</Text>       
          </View>

          <TextInput style={{backgroundColor:"#0880A2", height:"30px", width:"250px",borderRadius:"5px",marginTop:"5px", marginBottom:"20px", fontSize:"14px", color:"#13293D"}}
          value={confirmaSenha}
          onChangeText={setconfirmaSenha}
          />
            <TouchableOpacity onPress={handleAtualizar}
            style={{backgroundColor:"#0880A2", color:"white", width:"180px", height:"40px", borderRadius:"5px", justifyContent:"center", alignItems:"center", marginVertical:50,marginBottom:"5%"}}>
                <Text style={{color:"white", fontSize:18 , color:"#FCFCFC"}}>Salvar Alterações</Text>
            </TouchableOpacity> 
        </View>
      </View>
  )
  }




export default function App() {
  return (
      <View style={{flex:1}}> 
        <Perfil/>
      </View>
  );
}


