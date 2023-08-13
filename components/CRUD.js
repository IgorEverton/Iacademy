import React, {useState} from 'react';
import {View, Text, Button, TextInput, FlatList, StyleSheet} from 'react-native'
import axios from 'axios';


const api = axios.create({
  baseURL:"https://projeto-react-mobile-default-rtdb.firebaseio.com"
});


const MusicaItem = (props) => {
  return(
    <View style={styles.lista}>
        <Text style={styles.textLista}>{props.item.nomePizza}</Text>
        <Text style={styles.textLista}>{props.item.preco}</Text>
        <Text style={styles.textLista}>{props.item.qtd}</Text>
        <Button title="Apagar" onPress={()=>{props.onApagar(props.item)}}/>
        <Button title="Editar" onPress={()=>{props.onEditar(props.item)}}/>
    </View>
  )
}

export default function App() {
  const [id, setId] = useState(null);
  const [nomePizza, setnomePizza] = useState("");
  const [preco, setPreco] = useState("");
  const [qtd, setQtd] = useState("");
  const [lista, setLista] = useState([]);
  const [filtro, setFiltro] = useState("");

  const apagar = (obj) => {
    api.delete("/pizza/" + obj.id+".json")
    .then(()=>{retornarPedidos();})
    .catch(()=>{alert("Erro ao apagar")})
    alert("Apagamento a pizza" + obj.nomePizza)
  }

  const editar = (obj) => {
    setnomePizza(obj.nomePizza);
    setPreco(obj.preco);
    setQtd(obj.qtd);
    setId(obj.id);
  }

  const limparCampos = () =>{
    setnomePizza("");
    setPreco("");
    setQtd("");
    setId(null);
  }

const retornarPedidos=()=>{
  let filtroQuery = "/pizza.json";
  if(filtro.length > 0) {
    filtroQuery = '/pizza.json?orderBy="nomePizza"&equalTo="'+ filtro+ '"'
  }
  api.get(filtroQuery)
  .then( (resposta)=>{
    const novaLista = [];
    for (const chavePizza in resposta.data) { 
      const obj = resposta.data[chavePizza];
      obj.id=chavePizza;
      novaLista.push(obj);
      }
      setLista(novaLista);
  })
  .catch( (erro)=>{
    alert("Deu erro"+erro)
  })
}
  const cadastrarPedido=()=>{
    const obj2={nomePizza, preco, qtd}
    if(id){
      api.put("/pizza/" + id+".json", obj2)
      .then(()=>{limparCampos(); retornarPedidos();})
      .catch(()=>{alert("Erro ao atualizar, revise os dados")})
    }else{
      api.post("/pizza.json",obj2 )
      .then(()=>{limparCampos(); retornarPedidos();})
      .catch(()=>{alert("Erro ao cadastrar, revise os dados")})
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitulo}>
        Cadastro de pedido de Pizza
      </Text>
      <View style={{alignItems:"center", gap:"1.5rem",}}>      
        <TextInput 
          placeholder="Qual Sabor da Pizza" 
          value={nomePizza} 
          onChangeText={setnomePizza} 
          style={styles.inputs}/>

        <TextInput 
          placeholder="Valor"
          value={preco} 
          onChangeText={setPreco} 
          style={styles.inputs}/>

        <TextInput 
          placeholder="Quantidade" 
          value={qtd} 
          onChangeText={setQtd} 
          style={styles.inputs}/>

        <Button title="Ler Produto" onPress={retornarPedidos}/>

        <TextInput 
          placeholder="Digite o Sabor da Pizza" 
          value={filtro} 
          onChangeText={setFiltro} 
          style={styles.inputs}/>

        <Button title="Cadastrar" onPress={cadastrarPedido}/>
        <View>
          <FlatList 
            data={lista} 
            renderItem={ (prp)=> <MusicaItem {...prp} 
                                      onApagar={apagar} 
                                      onEditar={editar}/> }/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center", 
    backgroundColor:"#0d9488",
  },
  inputs: {
    borderWidth: 1.5, 
    borderRadius: 4,
    backgroundColor:"white",
    width:"10rem",
    height:"25px"
  },
  textTitulo: {
    fontSize: 22, 
    fontWeight:"bold", 
    padding:"0.5rem",
    backgroundColor:"#2dd4bf",      
    color:"white", 
    width:"100%", 
    height:"5rem", 
    marginBottom:"2rem", 
    paddingTop:"1.3rem",   
    textAlign:"center"
  },
  lista:{
    backgroundColor:"#14b8a6", 
    flex:1, 
    borderWidth:1, 
    paddingHorizontal:"3rem",
    paddingVertical:"1rem", 
    borderRadius:"5px", 
    margin:"0.5rem", 
    gap:"0.5rem"
  },
  textLista:{
    fontWeight:"bold", 
    fontSize:16, 
    color:"white"
  }
});
  
