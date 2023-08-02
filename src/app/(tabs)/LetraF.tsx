import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraF( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Fermentação </Text>    
        <Text style={styles.titulo4}> É um processo químico, com a
         ausência de gás oxigênio (O2), no qual fungos e bactérias
          realizam a transformação de matéria orgânica em outros
           produtos e energia. É a forma que esses seres encontram de
            produzir energia para o desempenho de suas funções biológicas.
Em inglês: 
fermentation.
    </Text>
    <Text>        
      </Text>

     <Text style={styles.titulo1}>Ferro Medicamentoso </Text>    
        <Text style={styles.titulo4}> Composto orgânico ou inorgânico de
ferro usado para prevenção e tratamento das anemias.
Em inglês: iron.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Fibras </Text>    
        <Text style={styles.titulo4}> Substâncias de origem vegetal 
        (grãos, vegetais, frutas), que não são digeridas pelo 
        organismo humano. Elas passam intactas pelo sistema digestivo,
         acelerando os movimentos intestinais e sendo eliminadas pelas
          fezes.
Em inglês: fibers.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Fitoquímicos </Text>    
        <Text style={styles.titulo4}>  Compostos não nutrientes 
        presentes em alimentos derivados de plantas que apresentam
         alguma atividade biológica no corpo.  
        Em inglês: 
phytochemicals.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Fosfolipídios </Text>    
      <Text style={styles.titulo4}> São lipídios semelhantes aos 
      triglicerídeos, mas apresentam o fósforo no lugar de um dos
       ácidos graxos. São encontrados na membrana plasmática das
        células.
Em inglês: Phospholipids.
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

export default LetraF;

