import React,{useState,useEffect} from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { cursosDisponiveis,cursosMatriculados } from "../fetchers/fetcherApp";


async function SolicitarListaCursosDisponiveis() {
  try {
    const response = await cursosDisponiveis();
    if (response.status === 401) {
      navigate("/")
    }
    if (response && response.data) {
      const dados = response.data;
      return dados;
    } else {
      return [];
    }
  } catch (error) {
    
    if (error.response.status === 401) {
      navigate("/")
    }
    else{
      return []
    }
  }
}

async function SolicitarListaCursosMatriculados() {
  try {
    const response = await cursosMatriculados();
    if (response.status === 401) {
      navigate("/")
    }
    if (response.status === 200 && response.data) {
      const dados = response.data;
      return dados;
    } else if (response.status === 404) {
      return [];
    }
  } catch (error) {
    if (error.response.status === 401) {
      navigate("/")
    }else{
      return []
    }
  }
}


const Dashboard = () => {
  const [listaCursosNaoMatriculadosParaRenderizar, setListaCursosNaoMatriculadosParaRenderizar] = useState([]);
  const [listaCursosMatriculadosParaRenderizar, setListaCursosMatriculadosParaRenderizar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const listaTodosOsCursosDisponiveisRetornado = await SolicitarListaCursosDisponiveis();
      const listaCursosMatriculados = await SolicitarListaCursosMatriculados();

      setListaCursosMatriculadosParaRenderizar(listaCursosMatriculados);
      setListaCursosNaoMatriculadosParaRenderizar(listaTodosOsCursosDisponiveisRetornado);
      setIsLoading(false); 
    };

    fetchData();
  }, []);



  return (
    <ScrollView contentContainerStyle={estilos.continerScroll}>
      <View
        style={{width:"100%", flex: 1, alignItems: "center", backgroundColor: "#1A1922" }}
      >
        <Text style={estilos.h1}>Dashboard</Text>
        <Text style={estilos.h2}>Cursos em andamento</Text>
        {listaCursosMatriculadosParaRenderizar.data !== undefined && listaCursosMatriculadosParaRenderizar.data.length !== 0 ? (
               listaCursosMatriculadosParaRenderizar.data.map((curso, index) => (
                <View style={estilos.curso}>
                <ImageBackground
                  style={{ margin: 5, padding: 20, alignSelf: "center" }}
                  source={`data:image/svg+xml;utf8,${encodeURIComponent(curso.icon)}`}
                />
                
                <TouchableOpacity style={estilos.botao}>
                  Continuar de onde parou
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
                  {curso.theme} - {curso.category}
                </Text>
              </View>
              ))
            ) : (
              <Text>Não há treinametos disponíveis para você</Text>
            )}
        <Text style={estilos.h2}>Veja também:</Text>
        
        {listaCursosNaoMatriculadosParaRenderizar.data !== undefined && listaCursosNaoMatriculadosParaRenderizar.data.length !== 0 ? (
               listaCursosNaoMatriculadosParaRenderizar.data.map((curso, index) => (
                <View style={estilos.curso}>
                <ImageBackground
                  style={{ margin: 5, padding: 20, alignSelf: "center" }}
                  source={`data:image/svg+xml;utf8,${encodeURIComponent(curso.icon)}`}
                />
                <TouchableOpacity style={estilos.botao}>
                  Matricular
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 10, color: "#FCFCFC" }}>
                {curso.theme} - {curso.category}
                </Text>
              </View>
              ))
            ) : (
              <Text>Não há treinametos disponíveis para você</Text>
            )}
 
      </View>
    </ScrollView>
  );
};

export default () => {
  return (
    <View style={{height:'100vh',backgroundColor: "#1A1922",
  }}>
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
    width:"100%",
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
