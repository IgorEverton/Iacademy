import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RoutesBar from './routesBar';

import Login from '../components/Login';
import CadastroFisica from '../components/cadastroFisica';
import CadastroJuridico from '../components/CadastroJuridico';
import Dashboard from '../components/Dashboard';
import Perfil from '../components/Perfil';
import Pendencia from '../components/Pendencia';



const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CadastroFisica" component={CadastroFisica}/>
        <Stack.Screen name="CadastroJuridico" component={CadastroJuridico}/>
        <Stack.Screen name="Dashboard" component={RoutesBar}/>
    </Stack.Navigator>
    );

export function DashboardNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}
export function PendenciaNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Pendencia"
            component={Pendencia}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
export function PerfilNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
