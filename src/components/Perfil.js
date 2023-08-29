import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userString = await AsyncStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setNome(user.nome);
        setEmail(user.email);
        setSenha(user.senha);
        setUserType(user.userType);
      }
    } catch (erro) {
      alert("Erro ao carregar os dados do usuário:" + erro);
    }
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
      const userString = await AsyncStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        const updatedUser = { ...user, nome, email, senha };
        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Dados atualizados com sucesso");
        setNome("");
        setEmail("");
        setSenha("");
        setconfirmaSenha("");
      } else {
        alert("Usuário não encontrado");
      }
    } catch (erro) {
      alert("Ocorreu um erro ao atualizar os dados do usuário" + erro);
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
            Nome
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

        {userType === "fisica" ? (
          <View style={{ marginTop: "2rem" }}>
            <Text
              style={style.label}
            >
              CPF
            </Text>
            <TextInput style={style.inputs} value={cpf} onChangeText={setCpf} />
          </View>
        ) : (
          <View style={{ marginTop: "2rem" }}>
            <Text
              style={style.label}>
              CNPJ
            </Text>
            <TextInput
              style={style.inputs}
              value={cnpj}
              onChangeText={setCnpj}
            />
          </View>
        )}

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
      </View>
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
