import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraI( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Inapetência </Text>    
        <Text style={styles.titulo4}> Falta de apetite.
Em inglês: Inappetence.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Incentivo ao Combate às Carências Nutricionais </Text>    
        <Text style={styles.titulo4}> ICCN. Programa governamental que teve por objetivo geral reduzir e controlar a desnutrição e a mortalidade infantil.
Notas: i) O ICCN do Ministério da Saúde se constituía em incentivo financeiro aos municípios para a aquisição de leite e óleo de
soja, para a distribuição a crianças de 6 meses a 2 anos de idade
e gestantes, em risco nutricional, e em outras ações de combate à
desnutrição de acordo com o perfil epidemiológico do município.
ii) Atualmente, não está mais em vigor.
Em inglês: Incentive to Combat Nutritional Deprivation.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Indicador de Saúde </Text>    
        <Text style={styles.titulo4}>  É o que proporciona informações relevantes sobre determinados atributos e dimensões do estado de saúde,
bem como sobre o desempenho do sistema de saúde.
Notas: i) Quando vistos de forma conjunta, os indicadores devem
refletir a situação sanitária de uma população e servir para a vigilância das condições de saúde. ii) Quando gerados de forma
regular e manejados em um sistema dinâmico, são ferramentas
fundamentais para gestão e avaliação da situação de saúde em
todos os níveis de governo.
Em inglês: health indicator.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Índice de Massa Corporal </Text>    
      <Text style={styles.titulo4}> IMC. Indicador de saúde utilizado para avaliar a adequação entre peso e altura corporais e sua
relação com risco para doenças crônicas não transmissíveis.
Nota: é calculado pela seguinte fórmula: IMC = P/A2, em que P
é o peso corporal em quilogramas, A é a altura em metros elevada ao quadrado; o resultado é expresso em kg/m2. As faixas de
classificação para adultos são: abaixo de 18,5kg/m2 – baixo peso;
entre 18,5 e 24,99kg/m2 – peso adequado; entre 25 e 29,99 kg/
m2 – sobrepeso; acima de 30kg/m2 – obesidade.
Em inglês: body mass index; BMI.
</Text>      
      
      
      <Text>        
      </Text>
      <Text style={styles.titulo1}>Índice de Pobreza Humana </Text>    
      <Text style={styles.titulo4}> IPH. Índice composto pelos
indicadores relacionados à esperança de vida, à desnutrição em
menores de 5 anos, à alfabetização, ao acesso a serviços de saúde
e à água potável.
Em inglês: human poverty index; HPI.
</Text> 
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Ingestão </Text>    
        <Text style={styles.titulo4}>  Ato de levar o alimento à boca 
        para ser mastigado, engolido.
Em inglês: Ingestion.

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

export default LetraI;

