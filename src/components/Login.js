import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logar } from "../fetchers/fetcherUsuario";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const formData = {
    email: email, 
    password: senha, 
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Preencha todos os campos.");
      return;
    }
  
    try {
      const response = await logar(formData);
      const token = response.data.token;
      const userData = response.data;
  
      if (token) {
        const sessionDuration = 60 * 60;
        const tokenExpiration = Date.now() / 1000 + sessionDuration;
  
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('tokenExpiration', tokenExpiration.toString());
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        navigation.navigate('Dashboard');

      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.log(error);
      setError('Credenciais inválidas. Tente novamente.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>

      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput keyboardType="email-address"style={styles.input} value={email} onChangeText={setEmail} />
      </View>

      <View
        style={{
          justifyContent: "space-between",
          marginTop: "32px",
          width: "250px",
        }}
      >
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <View style={{ paddingTop: "3rem" }}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: 200, marginTop: "32px", color: "#FCFCFC" }} onPress={()=>{navigation.navigate("CadastroFisica");}}>
        Não tem conta?
      </Text>
    </View>
  );
};

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingTop: "8%",
    alignItems: "center",
    backgroundColor: "#1A1922",
    paddingBottom: "60%",
  },
  h1: {
    textAlign: "center",
    fontSize: 43,
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "5rem",
    color: "#FCFCFC",
    marginBttom: "3rem",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FCFCFC",
    marginBottom: "0.5rem",
  },
  input: {
    backgroundColor: "#2F3142",
    height: "40px",
    width: "250px",
    borderRadius: "5px",
    marginBottom: "1.5rem",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1B98E0",
    width: "110px",
    height: "40px",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1922",
  },
  modalContent: {
    backgroundColor: "black",
    padding: 50,
    borderRadius: 10,
    alignItems: "center",
    rowGap: "2rem",
    overflow:"auto"

  },
  modalText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  modalButton: {
    backgroundColor: "#1B98E0",
    width: "130px",
    height: "50px",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#1B98E0",
    width: "250px",
    height: "50px",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
