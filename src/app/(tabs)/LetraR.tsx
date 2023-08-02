import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraR( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Radicais Livres </Text>    
        <Text style={styles.titulo4}> Resíduos do metabolismo
         do oxigênio que podem danificar os componentes das células.
          São produzidos pelo organismo como consequência do seu 
          metabolismo normal e como parte da sua defesa natural 
          contra doenças.
Em inglês: free radicals.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Recomendações Nutricionais </Text>    
        <Text style={styles.titulo4}> Prescrições quantitativas que
se aplicam aos indivíduos para ingestão diária de nutrientes e calorias, conforme as suas necessidades nutricionais.
Nota: as recomendações são determinadas por meio de pesquisas
científicas.
Em inglês: nutritional advice.

    </Text>
    <Text>        
      </Text>
      <Text style={styles.titulo1}>Refeição </Text>    
        <Text style={styles.titulo4}>  Ato de alimentar-se através de
         porções de alimentos que são ingeridos durante o dia.
          Exemplos: café da manhã, lanche, almoço, jantar, ceia, etc.
Em inglês: meal.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Rotulagem Nutricional </Text>    
        <Text style={styles.titulo4}>  Informação ao consumidor sobre os
componentes nutricionais de um alimento ou de sua prepara-
ção, incluindo a declaração de valor energético e de nutrientes
que o compõem.
Nota: existe legislação específica elaborada pela Agência Nacional
de Vigilância Sanitária para a rotulagem de alimentos.
Em inglês: nutritional labeling.
    </Text>
    <Text>        
      </Text>

   
      
      
      
      
      <Text>        
      </Text>
      <Text>        
      </Text>


      </View>

      <View style={styles.container3}>        
         <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
         <Image source={require('../../assets/Brazil-flag-icon.png')} style={styles.logo} />
      </View>  
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {      
    flex: 1,
    backgroundColor: '#c6f2fc',
    //alignItems: "center",
          justifyContent: "flex-start",         
         
  },
  container1: {   
    backgroundColor: '#c6f2fc',
    height:"95%",
    alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom:12,
         
  },
  container3: {
    flexDirection:'row',
    backgroundColor: '#4fb8ce',
    alignItems: "center",
    justifyContent: "center", 
    height:'5%',          
  },

  container2: {
    flexDirection:'row',
    backgroundColor: '#c6f2fc',
    
  },

  titulo:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    height:'auto',
    width:'95%',
    backgroundColor:'#3b5998',    
    borderRadius:10,
    borderColor:"black",
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:5,
    borderBottomWidth:5,
    color:'#fff',
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:5,
   
  },
  botao:{
    fontSize:16,
    fontWeight:'bold',
    paddingStart:5,
    paddingTop:5,
    paddingLeft:5, 
    alignItems: "center",
    justifyContent: "center",   
    height:35,
    width:'auto',
    backgroundColor:"green",    
    borderRadius:25,
    color:'#fff',
    marginTop:8,
   
},
titulo1:{
  marginTop:4,
  marginLeft:4,
  marginRight:4,
  textAlign:'center',
  fontSize:24,
  fontWeight:'bold',
  height:'auto',
  width:'auto',
  backgroundColor:'#3b5998',    
  borderRadius:10,
  borderColor:"black",
  borderTopWidth:2,
  borderLeftWidth:2,
  borderRightWidth:5,
  borderBottomWidth:5,
  color:'#fff',
   
},
titulo4:{
  textAlign:'justify',
  marginTop:2,
  fontSize:18,
  marginLeft:5,
  marginRight:2,
  marginBottom:0 ,        
},

botao1:{  
  fontSize:16,
  fontWeight:'bold',
  paddingStart:5,
  paddingTop:5,
  paddingLeft:5,
  paddingRight:5, 
  alignItems: "center",
  justifyContent: "center",   
  height:35,
  width:'auto',
  backgroundColor:"blue",    
  borderRadius:25,
  color:'#fff',
  marginTop:10,
  marginRight:8, 
},



botao2:{  
  fontSize:16,
  fontWeight:'bold',
  paddingStart:5,
  paddingTop:5,
  paddingLeft:5,
  paddingRight:5, 
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
  marginLeft:11,
  marginBottom:5, 
},

logo: {
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

});

export default LetraR;

