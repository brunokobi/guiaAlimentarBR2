import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraD( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Deficiência Nutricional </Text>    
        <Text style={styles.titulo4}> Estado orgânico que resulta de um processo em que as necessidades fisiológicas de nutrientes não estão
sendo atendidas.
Nota: a deficiência nutricional pode ser decorrente tanto de problemas alimentares quanto de problemas orgânicos.
Em inglês: nutritional deficiency

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Desnutrição </Text>    
        <Text style={styles.titulo4}>  Expressão biológica da carência prolongada da ingestão de nutrientes essenciais à manutenção, ao crescimento e ao
desenvolvimento do organismo humano.
Notas: i) É um processo orgânico determinado socialmente, na
medida em que o sistema político-econômico regula o grau de
acesso aos alimentos. ii) Esse estado refere-se normalmente ao
tipo de desnutrição energético-proteica.
Em inglês: malnutrition.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>DHAA </Text>    
      <Text style={styles.titulo4}> Direito humano à alimentação adequada.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Diabetes </Text>    
      <Text style={styles.titulo4}> Processo fisiológico no qual os alimentos ingeridos são
reduzidos a substâncias assimiláveis pelo organismo e transferidos
para a corrente sanguínea.
Em inglês: digestion.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Dieta </Text>    
      <Text style={styles.titulo4}> 1 – Alimentação geral que serve de padrão para os indivíduos.
2 – Tipo de alimentação específica recomendada a um indivíduo
para atender às necessidades terapêuticas.
Em inglês: diet.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Digestão </Text>    
      <Text style={styles.titulo4}> São problemas de saúde relacionados ao consumo inadequado de alimentos (tanto por escassez
quanto por excesso) e à carência de nutrientes e/ou micronutrientes como ferro, ácido fólico, iodo e vitamina A, entre outros.
Notas: i) Tanto a desnutrição quanto a obesidade são distúrbios
nutricionais. ii) Outros exemplos relevantes para a saúde pública,
em termos de magnitude, são a anemia ferropriva, a hipovitaminose A e o bócio endêmico.
Em inglês: nutritional disorders.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Dislipidemia </Text>    
      <Text style={styles.titulo4}> Alteração, quase sempre por excessos, nos teores de lipídios ou gorduras do sangue, como o colesterol e os
triglicerídeos.
Em inglês: dyslipidemia.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Distúrbios Nutricionais </Text>    
      <Text style={styles.titulo4}> São problemas de saúde relacionados ao consumo inadequado de alimentos (tanto por escassez
quanto por excesso) e à carência de nutrientes e/ou micronutrientes como ferro, ácido fólico, iodo e vitamina A, entre outros.
Notas: i) Tanto a desnutrição quanto a obesidade são distúrbios
nutricionais. ii) Outros exemplos relevantes para a saúde pública,
em termos de magnitude, são a anemia ferropriva, a hipovitaminose A e o bócio endêmico.
Em inglês: nutritional disorders.
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

export default LetraD;

