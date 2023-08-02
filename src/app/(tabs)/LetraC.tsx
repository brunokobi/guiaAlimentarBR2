import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraC( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Carência Nutricional </Text>    
        <Text style={styles.titulo4}> Situação em que deficiências gerais ou específicas de energia e nutrientes resultam na instalação de processos orgânicos adversos para a saúde.
Em inglês: nutritional deprivation.

    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Cereais </Text>    
        <Text style={styles.titulo4}> Grãos originários das gramíneas, cujas sementes dão em espigas. 
        Alguns exemplos: trigo, arroz, cevada, milho e aveia.
        Em inglês: cereals.

    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Colesterol </Text>    
        <Text style={styles.titulo4}> Membro do grupo dos lipídios,
         da classe dos esteróis; uma substância macia, cerosa, 
         fabricada pelo corpo para diversas finalidades e é encontrada
          em produtos de origem animal.
        Em inglês: cholesterol.

    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Comensalidade </Text>    
        <Text style={styles.titulo4}>  Companhia à mesa; qualidade de comensal, de quem se alimenta habitualmente na mesma mesa.
Característica da pessoa que frequenta assiduamente uma casa e nela faz as suas refeições.
Familiaridade entre as pessoas que dividem a mesma mesa, durante suas refeições; camaradagem entre comensais.
Em inglês: commensality.
    </Text>
    <Text>        
      </Text>
    <Text style={styles.titulo1}>Composição dos Alimentos </Text>    
        <Text style={styles.titulo4}>  Descrição do valor nutritivo dos
alimentos e de substâncias específicas existentes neles, como vitaminas, minerais e outros princípios.
Em inglês: food composition.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Critério de Sanidade dos Alimentos </Text>    
      <Text style={styles.titulo4}> Princípios e normas para
assegurar que os alimentos tenham bom valor nutritivo e não
apresentem contaminantes físicos, químicos e biológicos prejudiciais à saúde dos consumidores.
Em inglês: food standards.
      </Text>
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Cuidados Nutricionais Específicos </Text>    
      <Text style={styles.titulo4}> Ações recomendadas
para situações peculiares de riscos nutricionais, como a anemia, o
bócio, a hipovitaminose A e outras condições.
Em inglês: specific nutritional care.
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

export default LetraC;

