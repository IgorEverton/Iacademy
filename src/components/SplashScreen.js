import React from "react";
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import imgSplash from '../assets/img/LOGO.png';

export default function SplashScreen({navigation}){

  function animacaoFinalizada(){
    navigation.reset({
    index:0,
    routes: [{name: "Login"}]
  
    });
  }
  
  return(
    <View style={styles.container}>
      <LottieView
        source={imgSplash}
        loop={true}
        autoPlay={true}
        onAnimationFinish={animacaoFinalizada}
       />
    </View>
    );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#1A1922"
  }
})