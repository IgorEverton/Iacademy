import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import completedIcon from "../assets/img/CompletedIcon.png";
import warningIcon from "../assets/img/WarningIcon.png";
import incompletedIcon from "../assets/img/IncompletedIcon.png";
import setinha from "../assets/img/setinhaPreta.png";

const estilos = {
  container: {
    flex: 1,
    display: "flex",
    paddingTop: "8%",
    alignItems: "center",
    backgroundColor: "#1A1922",
    paddingBottom: "60%",
  },
  divzinha: {
    backgroundColor: "#2F3142",
    width: "18rem",
    height: "100px",
    borderRadius: "5px",
    padding: 10,
    flexDirection: "row",
    marginBottom: "20px",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    flexWrap: "wrap",
    maxWidth: "85%",
    fontSize: 12,
  },
  conteudo: {
    backgroundColor: "#A0DAF3",
    marginHorizontal: "10px",
    padding: 20,
    height: "500px",
  },
  textoConteudo: {
    fontSize: 10,
  },
  botaoConcluir: {
    backgroundColor: "#0880A2",
    width: "80px",
    height: "19px",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "5%",
    fontSize: 9,
    bottom: 0,
  },
  botaozinho: {
    backgroundColor: "#262734",
    height: 20,
    width: 20,
    borderRadius: 3,
    position: "absolute",
    right: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  detalhes: {
    backgroundColor: "#2F3142",
    marginHorizontal: 10,
    borderRadius: 3,
    flexDirection: "column",
  },
  textoDetalhes: {
    color: "white",
    padding: 20,
  },
};

function TextoConteudo(props) {
  return (
    <View>
      <Text style={estilos.textoDetalhes}>{props.titulo}</Text>
      <View
        style={{
          backgroundColor: "#7D7D7D",
          height: 1,
          width: "95%",
          alignSelf: "center",
        }}
      ></View>
    </View>
  );
}

function Divzinha(props) {
  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  const handlePress = () => {
    setDetalhesVisiveis(!detalhesVisiveis);
  };

  let imagem =
    props.status >= props.config.completo
      ? completedIcon
      : props.status >= props.config.aceitavel
      ? warningIcon
      : incompletedIcon;
  let pesoFonte = props.status < props.config.aceitavel ? "100" : "400";
  let mensagem;
  let visivel = props.status >= props.config.completo ? "none" : "";

  if (props.status >= props.config.completo) {
    mensagem = "Concluido dia 12/12";
    pesoFonte = "100";
    props.detalhes = ["Concluido!"];
  } else mensagem = props.status + "/100";

  return (
    <View>
      <View style={estilos.divzinha}>
        <ImageBackground
          source={imagem}
          style={{ height: 35, width: 36, margin: 10, alignSelf: "center" }}
        />
        <View style={{ flex: 1 }}>
          <Text style={[estilos.texto, { paddingBottom: 10 }]}>
            {props.titulo}
          </Text>
          <Text
            style={[estilos.texto, { maxWidth: "65%", fontWeight: "400" }]}
          >
            {mensagem}
          </Text>
          <TouchableOpacity
            style={[estilos.botaoConcluir, { display: visivel }]}
            disabled={props.status < props.config.aceitavel}
          >
            <Text style={{ fontWeight: pesoFonte }}>Concluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaozinho} onPress={handlePress}>
            <Image resizeMode={"contain"} source={setinha} />
          </TouchableOpacity>
        </View>
      </View>

      {detalhesVisiveis && (
        <View style={estilos.detalhes}>
          <View>
            {props.detalhes.map((detalhe, index) => (
              <View key={index}>
                <TextoConteudo titulo={detalhe} />
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#A0DAF3",
                    height: 1,
                    bottom: 0,
                    width: "95%",
                    alignSelf: "center",
                  }}
                ></View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default function Pendencias(){
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 32,
          marginBottom: 10,
          color: "white",
        }}
      >
        Pendências
      </Text>

      <Divzinha
        titulo={"Atividade de Python: Listas"}
        config={{ completo: 100, aceitavel: 70 }}
        status={60}
        detalhes={[
          "2.2: Quando usar listas",
          "2.3: Como tratar strings de listas",
          "2.6: Fracionando as listas",
          "2.7: Lista de listas",
        ]}
      />

      <Divzinha
        titulo={"Atividade de .Net"}
        config={{ completo: 100, aceitavel: 90 }}
        status={90}
        detalhes={["1.5: Gerenciamento de memória em .NET"]}
      />

      <Divzinha
        titulo={"Atividade de Algoritmos"}
        config={{ completo: 100, aceitavel: 90 }}
        status={80}
        detalhes={["4.6: Árvores binárias", "4.8: Análise de Complexidade"]}
      />
    </ScrollView>
  );
};