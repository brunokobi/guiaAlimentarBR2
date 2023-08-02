import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';

function UltraProcessado( {navigation}){
    // const githubUsername = navigation.getParam('github_username');
    return (
      <>
      <ScrollView>
      <View style={styles.container}>
         <Image source={require('../../assets/ultra.jpg')} style={styles.logo} />
        <Text style={styles.titulo}> Alimentos ultraprocessados são
          formulações industriais feitas
          inteiramente ou majoritariamente de
          substâncias extraídas de alimentos
          (óleos, gorduras, açúcar, amido,
          proteínas), derivadas de constituintes
          de alimentos (gorduras hidrogenadas,
          amido modificado) ou sintetizadas
          em laboratório com base em
          matérias orgânicas como petróleo
          e carvão (corantes, aromatizantes,
          realçadores de sabor e vários tipos
          de aditivos usados para dotar os
          produtos de propriedades sensoriais
          atraentes). Técnicas de manufatura
          incluem extrusão, moldagem, e
          pré-processamento por fritura ou
          cozimento.
        </Text >
        <Image source={require('../../assets/band4.gif')} style={styles.logo2} />
          <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      </ScrollView>

      <View style={styles.container3}>        
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.botao2}> Sobre </Text>
         </TouchableOpacity>
         <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
         <Image source={require('../../assets/Brazil-flag-icon.png')} style={styles.logo1} />
         <TouchableOpacity onPress={() => navigation.navigate('Mais')}>
            <Text style={styles.botao2}>Glossário</Text>
         </TouchableOpacity>
         </View>
        </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c6f2fc',
      alignItems: "center",
      justifyContent: "flex-start",         
    },
    titulo:{
      textAlign:'justify',
      paddingLeft:10,
      paddingRight:10,
      marginTop:2,         
      fontSize:20,
      fontWeight:'bold', 
      marginLeft:5,
      marginRight:2,
      marginBottom:2,          
      height:'auto',
      width:'auto',
      backgroundColor:'red',
      borderColor:"black",
      borderTopWidth:2,
      borderLeftWidth:2,
      borderRightWidth:5,
      borderBottomWidth:5,
      borderRadius:10,
      color:'#fff',
    },
    logo: {
      width: '95%',
      height: '22%',
      marginTop:5,
      marginBottom: 5,
      borderColor:"black",
      borderWidth:2,
      borderRadius:10,                   
    },

    logo2: {
      marginTop:-80,
      width: 300,
      height: 200,
    },
      container3: {
        flexDirection:'row',
        backgroundColor: '#4fb8ce',
        alignItems: "center",
        justifyContent: "center", 
        height:45,          
      },

      logo1: {
        width: 24,
        height: 24,
        paddingLeft:10,
        // marginBottom: 20,
      },
      
       titulo3:{
          textAlign:'justify',
          marginTop:2,
          fontSize:18,
          marginLeft:5,
          marginRight:2,
          marginBottom:0,
          color:'#fff',          
        },

        botao2:{  
          fontSize:16,
          fontWeight:'bold',
          paddingStart:5,
          paddingTop:5,
          paddingLeft:5,
          paddingRight:0, 
          alignItems: "center",
          justifyContent: "center",   
          height:35,
          width:'auto',
          backgroundColor:'#3b5998',    
          borderRadius:25,
          borderTopWidth:2,
            borderLeftWidth:2,
            borderRightWidth:2,
            borderBottomWidth:5,
          color:'#fff',
          marginTop:10,
          marginRight:8,
          marginLeft:8,
          marginBottom:5, 
        },
        

    });

export default UltraProcessado;