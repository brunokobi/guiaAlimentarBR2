import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraT( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Tabela de Composição Químico-Nutricional </Text>    
        <Text style={styles.titulo4}> Tabela que informa o conteúdo dos alimentos em proteínas, gorduras, carboidratos, vitaminas e minerais de interesse da nutrição humana.
Em inglês: table of chemical-nutritional components.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Transição Alimentar </Text>    
        <Text style={styles.titulo4}>  Mudanças lentas ou rápidas que ocorrem
no padrão alimentar das crianças, à medida que a amamentação
vai sendo substituída por outros produtos, até atingir o padrão
alimentar da família.
Nota: é um período crítico em relação aos riscos nutricionais.
Em inglês: nutritional transition.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Transição Epidemiológica </Text>    
        <Text style={styles.titulo4}>  Mudanças que ocorrem nos perfis de
morbimortalidade de uma população.
Nota: o fato epidemiológico mais representativo seria a passagem
do polo desnutrição/infecção para o polo obesidade/doenças crô-
nico-degenerativas.
Em inglês: epidemiological transition.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Transtorno Alimentar </Text>    
        <Text style={styles.titulo4}>  Distúrbio que se refere à nutrição e ao
comportamento anormal de indivíduos em relação à ingestão de
alimentos.
Em inglês: triglycerides.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Triglicerídeos </Text>    
        <Text style={styles.titulo4}>   Principal lipídio da dieta. É constituído por três unidades de ácidos graxos e uma unidade de glicerol.
Em inglês: eating disorder.
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
    height:"97%",
    alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom:12,
         
  },
  container3: {
    flexDirection:'row',
    backgroundColor: '#4fb8ce',
    alignItems: "center",
    justifyContent: "center", 
    height:'3%',          
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

export default LetraT;

