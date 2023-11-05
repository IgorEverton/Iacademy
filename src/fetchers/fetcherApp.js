import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
    baseURL: "https://iacademy-v1-api.azurewebsites.net/api",
 });


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

 
 const cursosDisponiveis = async () => {
    await setAuthorizationHeader(api);
    return api.get(`/summary/available`);
 }
 
 const cursosMatriculados = async () => {
    await setAuthorizationHeader(api);
    return api.get('/summary/enrolled');
 }
 


 export {
    cursosDisponiveis,
    cursosMatriculados
 }