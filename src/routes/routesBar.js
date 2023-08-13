import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from '../components/Dashboard';
import Perfil from '../components/Perfil';
import Pendencia from '../components/Pendencia';

const {Navigator, Screen} = createBottomTabNavigator();

export default function RoutesBar(){
    return(
    <Navigator
    useLegacyImplementation
    tabBarOptions={{
      tabStyle: { backgroundColor: "#2F3142" },
      activeTintColor: "#0880A2",
      inactiveTintColor: "#1A1922"
    }}
  >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="bar-graph" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Pendencia"
        component={Pendencia}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
            />
          )
        }}
      />
  </Navigator>
)
}
