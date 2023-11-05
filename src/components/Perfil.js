import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal
} from "react-native";
import { atualizarSenha, atualizarUsuario, pegarUsuarioPorId } from "../fetchers/fetcherUsuario";


const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [id, setId] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [senhaAntiga, setSenhaAntiga] = useState('');
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response =await pegarUsuarioPorId(id);
    if(response.status===200){
      const user = response.data
      return user
   }
    try {
      setId(response.data.id)
      setNome(response.data.nome);
      setEmail(response.data.email);
      setSenha(response.data.senha);
      
    } catch (error) {
      if (error.response.status === 400) {
        const errorData = error.response.data;
        return errorData;
    } else if (error.response.status === 401) {
        navigate("/login");
    } else if (error.response.status === 404) {
        alert("Não encontrado");
    } else if (error.response.status === 500) {
        alert("Ocorreu um erro do nosso lado. Já resolveremos");
    }
};


const dadosAtualizacaoUsuario = {
  nome: nome,
  email: email,
  senha: senha,
};
const handleAtualizar = async () => {
  if (!nome || !email || !senha || !confirmaSenha) {
    alert("Todos os campos são obrigatórios");
    return;
  }
  if (senha !== confirmaSenha) {
    alert("As senhas não coincidem");
    return;
  }

  try {
    const response = await atualizarUsuario(user_id,dadosAtualizacaoUsuario);
    if (response.status === 204) {
      return {result:"ATUALIZADO"};
    } 
  } catch (error) {
    if (error.response.status === 400) {
      const errorData = error.response.data;
      return {result:"ERRO",dados:errorData};
  } else if (error.response.status === 401) {
      navigate("/login");
  } else if (error.response.status === 404) {
      alert("Não encontrado");
  } else if (error.response.status === 500) {
      alert("Ocorreu um erro do nosso lado. Já resolveremos");  
  }
};
}
const dadosAtualizacaoSenha = {
  senhaAtual: senhaAtual,
  novaSenha: novaSenha, 
};

async function atualizarSenhaPorIdController(user_id, dadosAtualizacaoSenha) {
  if (!senha || !confirmaSenha) {
    alert("Todos os campos são obrigatórios");
    return;
  }
  if (senha !== confirmaSenha) {
    alert("As senhas não coincidem");
    return;
  }  
  try {
    const response = await atualizarSenha(user_id, dados);

    if (response.status === 204) {
      return { result: "ATUALIZADO", dados: [] };
    }
  } catch (error) {
    if (error.response.status === 400) {
      const errorData = error.response.data;
      return { result: "ERRO", dados: errorData };
    } else if (error.response.status === 401) {
      navigate("/login");
    } else if (error.response.status === 404) {
      alert("Não encontrado");
    } else if (error.response.status === 500) {
      alert("Ocorreu um erro do nosso lado. Já resolveremos");
    }
  }
}
}
const objExcluir={
  nome, email, senha, cpf, cnpj
}

const handleExcluirConta = async () => {
  try {
    const response = await excluirUsuario(user_id, objExcluir);

    if (response.status === 204) {
      alert("Conta excluída com sucesso");
      navigate("/login");
    } else {
      alert("Falha ao excluir conta");
    }
  } catch (error) {
    console.error("Erro ao excluir conta", error);
  }
};

  
  return (
    <View style={style.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            marginTop: "40px",
            marginBottom: "40px",
            color: "#FCFCFC",
          }}
        >
          Perfil
        </Text>

        <View style={{ marginTop: "2rem" }}>
          <Text style={style.label}>
            Nome Completo
          </Text>
          <TextInput style={style.inputs} value={nome} onChangeText={setNome} />
        </View>

        <View style={{ marginTop: "2rem" }}>
          <Text style={style.label}>
            E-mail
          </Text>
          <TextInput
            style={style.inputs}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={{ marginTop: "2rem" }}>
          <Text style={style.label}>
            Nova senha
          </Text>
          <TextInput
            style={style.inputs}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View style={{ marginTop: "2rem" }}>
          <Text style={style.label}>
            Confime sua senha
          </Text>

          <TextInput
            style={style.inputs}
            secureTextEntry={true}
            value={confirmaSenha}
            onChangeText={setconfirmaSenha}
          />
        </View>
        <TouchableOpacity
          onPress={handleAtualizar}
          style={style.botao}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Salvar Alterações
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={style.botao}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Atualizar Senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleExcluirConta}
          style={style.botao}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Exluir conta
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={style.modalContainer}>
          <Text style={style.label}>Senha Antiga</Text>
          <TextInput
            style={style.inputs}
            secureTextEntry={true}
            value={senhaAntiga}
            onChangeText={setSenhaAntiga}
          />

          <Text style={style.label}>Nova Senha</Text>
          <TextInput
            style={style.inputs}
            secureTextEntry={true}
            value={confirmaSenha}
            onChangeText={setconfirmaSenha}
          />

          <TouchableOpacity
            onPress={atualizarSenhaPorIdController}
            style={style.botao}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>
              Salvar Alterações
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Perfil />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A1922",
  },
  inputs: {
    backgroundColor: "#0880A2",
    height: "30px",
    width: "250px",
    borderRadius: "5px",
    marginTop: "5px",
    fontSize: "14px",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  label:{
    fontSize: 15, 
    fontWeight: "bold", 
    color: "#FCFCFC"
  },
  botao:{
    backgroundColor: "#0880A2",
    color: "white",
    width: "180px",
    height: "40px",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginBottom: "5%",
  }
});
