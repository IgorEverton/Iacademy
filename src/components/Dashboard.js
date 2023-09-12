import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import imgMongoDB from "../assets/img/MongoDBIcon.png";
import imgPy from "../assets/img/PythonIcon.png";
import imgRedis from "../assets/img/RedisNoSQL.png";
import imgPhp from "../assets/img/PHP.png";
import imgGames from "../assets/img/DevGames.png";
import imgInvest from "../assets/img/Invest.png";

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={estilos.continerScroll}>
      <View
        style={{ flex: 1, alignItems: "center", backgroundColor: "#1A1922" }}
      >
        <Text style={estilos.h1}>Dashboard</Text>
        <Text style={estilos.h2}>Cursos em andamento</Text>
        <View style={estilos.curso}>
          <ImageBackground
            style={{ margin: 5, padding: 20, alignSelf: "center" }}
            source={imgMongoDB}
          />
          <TouchableOpacity style={estilos.botao}>
            Continuar de onde parou
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
            MongoDB
          </Text>
        </View>

        <View style={estilos.curso}>
          <ImageBackground
            style={{ margin: 5, padding: 20, alignSelf: "center" }}
            source={imgPy}
          />
          <TouchableOpacity style={estilos.botao}>
            Continuar de onde parou
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
            Python completo
          </Text>
        </View>

        <Text style={estilos.h2}>Veja também:</Text>

        <View style={estilos.curso}>
          <ImageBackground
            style={{ margin: 5, padding: 20, alignSelf: "center" }}
            source={imgRedis}
          />
          <TouchableOpacity style={estilos.botao}>
            Continuar de onde parou
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
            Redis NoSQL
          </Text>
        </View>

        <View style={estilos.curso}>
          <ImageBackground
            style={{ margin: 5, padding: 20, alignSelf: "center" }}
            source={imgPhp}
          />
          <TouchableOpacity style={estilos.botao}>
            Continuar de onde parou
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
            PHP básico
          </Text>
        </View>

        <Text style={estilos.h2}>Veja também:</Text>

        <View style={estilos.curso}>
          <ImageBackground
            style={{
              margin: 5,
              padding: 20,
              alignSelf: "center",
              width: "37px",
              height: "37px",
            }}
            source={imgGames}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 10,
              width: "190px",
              color: "#FCFCFC",
            }}
          >
            Desenvolvimento de jogos {"\n"}Internet das coisas {"\n"}Carreira
            QA: Processos e Automação
          </Text>
        </View>

        <View style={estilos.curso}>
          <ImageBackground
            style={{
              margin: 5,
              padding: 20,
              alignSelf: "center",
              width: "37px",
              height: "37px",
            }}
            source={imgInvest}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 10,
              width: "190px",
              color: "#FCFCFC",
            }}
          >
            Bolsa de Valores {"\n"}PIB {"\n"}Criptomoedas
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default () => {
  return (
    <View>
      <Dashboard />
    </View>
  );
};

const estilos = StyleSheet.create({
  continerScroll: {
    flexGrow: 1,
    display: "flex",
    flex: 1,
    backgroundColor: "#1A1922",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: "5rem",
  },
  h1: {
    textAlign: "center",
    fontSize: 43,
    fontWeight: "bold",
    marginTop: "50px",
    marginBottom: "1rem",
    color: "#FCFCFC",
  },
  h2: {
    marginRight: "35%",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#FCFCFC",
  },
  curso: {
    backgroundColor: "#2F3142",
    width: "90%",
    height: "69px",
    borderRadius: "5px",
    padding: "1rem",
    flexDirection: "row",
    minWidth: "23rem",
    marginBottom: "1rem",
  },
  botao: {
    backgroundColor: "#0880A2",
    color: "#FCFCFC",
    width: "110px",
    height: "19px",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "5%",
    fontSize: 9,
    fontFamily: "Inter",
  },
});
