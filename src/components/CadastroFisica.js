import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cadastrar } from "./fetchers/fetcherUsuario.js";
import Toast from 'react-native-toast-message';

const CadastroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");
  const navigation = useNavigation();

  function FormataDados(dados) {
    const response = {
      "name": dados.nomeCompleto,
      "email": dados.email,
      "cpf": dados.cpf,
      "cellphoneNumberWithDDD": dados.cellphoneNumberWithDDD,
      "confirmPassword": dados.confirmPassword,
      "password": dados.password,
      "companyRef": dados.cnpj
    }
    return response;
  }

  async function solicitacaoCadastroUsuario(dados) {
    try {
      const response = await cadastrar(dados);
      if (response.status === 201) {
        return { "status": response.status, "dados": response.data }
      }
    } catch (error) {
      console.log(error)
      return { "status": error.response.status, "dados": error.response.data }
    }
  }


  const handleCadastro = async () => {
    if (!nome || !cpf || !email || !senha || !confirmaSenha) {
      alert("Erro", "Todos os campos são obrigatórios");
    }
    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem");
    }
    try {
      const request = FormataDados(formData)
      const response = await solicitacaoCadastroUsuario(request);
      if (response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Conta criada',
          text2: 'Seja bem-vindo(a) ao IAcademy. Solicite a ativação da sua conta conosco',
          position: 'top',
          visibilityTime: 9000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
        });
        navigation.navigate("Login");
        setNome("");
        setEmail("");
        setSenha("");
        setCpf("");
        setCnpj("");
        confirmaSenha("");
      }
      return true;
    } catch (error) {
      Alert.alert("Ocorreu um erro ao realizar o cadastro" + error);
      return false;
    }
  };


  return (
    <View style={styles.container}>
      <View style={{flex:1, alignItems: "center"}}>
        <Text style={styles.h1}>Cadastro</Text>

        <View style={styles.inputView}>
          <Text style={styles.label}>Nome da Empresa</Text>
          <TextInput
            placeholder=" seu nome completo"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            keyboardType="email-address"
            placeholder=" exemplo@dominio.com"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Digite seu CPF"
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>CNPJ</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Digite o CNPJ"
            style={styles.input}
            value={cnpj}
            onChangeText={setCnpj}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder=" min 8 caracteres"
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Confime sua senha</Text>
          <TextInput
            placeholder=" min 8 caracteres"
            style={styles.input}
            value={confirmaSenha}
            onChangeText={setconfirmaSenha}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginTop:"2rem"}}>
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <CadastroForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A1922",
    overflow:"visible"
  },
  h1: {
    textAlign: "center",
    fontSize: 43,
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "#FCFCFC",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FCFCFC",
  },
  input: {
    backgroundColor: "#2F3142",
    height: "40px",
    width: "250px",
    borderRadius: "5px",
    marginTop: "0.5rem",
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  inputView: {
    marginTop: "1rem",
  },
  button: {
    backgroundColor: "#1B98E0",
    width: "110px",
    height: "40px",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
