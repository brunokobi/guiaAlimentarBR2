import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraS( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Segurança Alimentar e Nutricional </Text>    
        <Text style={styles.titulo4}> SAN. Conjunto
de princípios, políticas, medidas e instrumentos que assegure
a realização do direito de todos ao acesso regular e permanente a alimentos de qualidade, em quantidade suficiente, sem
comprometer o acesso a outras necessidades essenciais, tendo
como base práticas alimentares promotoras de saúde que respeitem a diversidade cultural e que sejam social, econômica e
ambientalmente sustentáveis.
Nota: acrescenta-se que, além de acesso e consumo, o organismo
deve dispor de condições fisiológicas adequadas para o aproveitamento dos alimentos por meio de boa digestão, absorção e metabolismo de nutrientes.
Em inglês: food and nutritional safety.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Sistema de Vigilância Alimentar e Nutricional </Text>    
        <Text style={styles.titulo4}>  Sisvan.
Sistema de monitoramento da situação alimentar e nutricional da
população por meio da coleta, do processamento e da análise de
dados antropométricos.
Notas: i) É instrumento de apoio para o diagnóstico da situação
nutricional (prevalência de desnutrição e obesidade), sendo fundamental para subsidiar e estruturar efetivamente as ações de promoção de saúde. ii) Atualmente, é uma das ações que o município
tem de oferecer às famílias beneficiárias do Programa Bolsa Famí-
lia, pois o cumprimento da agenda do setor Saúde é monitorado
por meio desse sistema.
Em inglês: Food and Nutritional Surveillance System.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Sobrepeso </Text>    
        <Text style={styles.titulo4}>  Excesso de peso de um indivíduo quando em comparação com tabelas ou padrões de normalidade.
Nota: a obesidade é um grau bem elevado de sobrepeso.
Em inglês: overweight.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Suplementação Alimentar </Text>    
        <Text style={styles.titulo4}>  Cota adicional de alimentos destinada
a prevenir ou corrigir deficiências nutricionais.
Em inglês: food supplement.
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

export default LetraS;

