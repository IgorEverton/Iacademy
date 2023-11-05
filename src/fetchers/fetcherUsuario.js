import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getTokenAsync() {
   try {
      const token = await AsyncStorage.getItem('token');
      return token;
   } catch (error) {
      throw error;
   }
}

async function setAuthorizationHeader(api) {
   try {
      const token = await getTokenAsync();    
      if (token) {
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
   } catch (error) {
      throw error;
   }
}


const api = axios.create({baseURL:"https://iacademy-user-v1-api.azurewebsites.net/api"})

const logar =(dados)=>{
    return api.post(`/user/login`,dados);
}

const cadastrar = (dados) => {
    return api.post("/user", dados, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", 
      },
});
};

const atualizarUsuario = async (id,dados)=>{
    await setAuthorizationHeader(api);
    return api.put("/user/"+id,dados)
}

const pegarUsuarioPorId = async(id)=>{
   await setAuthorizationHeader(api)
   return api.get("/user/"+id)
}

const atualizarSenha = async(id,dados)=>{
   await setAuthorizationHeader(api)
   return api.put("/user/"+id+"/update-password",dados)
}
const excluirUsuario = async(id,dados)=>{
  await setAuthorizationHeader(api)
  return api.delete("/user/"+id,dados)
}
export {
    logar,
    cadastrar,
    atualizarUsuario,
    pegarUsuarioPorId,
    atualizarSenha
}