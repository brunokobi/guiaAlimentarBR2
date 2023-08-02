import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraP( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Pasteurização </Text>    
        <Text style={styles.titulo4}>  processo de esterilização de alimentos (leite, queijo, iogurte, cerveja ou vinho) que consiste em expô-los a uma temperatura inferior a seu ponto de ebulição e submetê-los em seguida a resfriamento súbito, a fim de eliminar certos microrganismos nocivos.
        Em inglês: pasteurization.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Política Nacional de Alimentação e Nutrição </Text>    
        <Text style={styles.titulo4}> Sin. PNAN. Política de Estado, voltada à compreensão do direito humano universal à alimentação e nutrição, que tem como propósito a garantia
da qualidade dos alimentos colocados para o consumo no País, a
promoção de práticas alimentares saudáveis, a prevenção e o controle dos distúrbios nutricionais e o acesso universal aos alimentos.
Nota: política aprovada pela Portaria MS/GM nº 710, de 10 de
junho de 1999.
Em inglês: National Policies for Food and Nutrition.

    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Práticas Alimentares Saudáveis </Text>    
        <Text style={styles.titulo4}> Usos, hábitos e costumes que
definem padrões de consumo alimentar de acordo com os conhecimentos científicos e técnicas de uma boa alimentação. Ver Composição dos alimentos; Bem-estar nutricional; Orientação alimentar.
Em inglês: healthy eating habits.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Precursores de Vitamina A </Text>    
        <Text style={styles.titulo4}>  Substâncias presentes nos alimentos vegetais – carotenos – que, depois de ingeridos, se transformam em vitamina.
Em inglês: vitamin A precursors.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Programa de Monitoramento da Qualidade Sanitária dos Alimentos </Text>    
      <Text style={styles.titulo4}> Programa criado com o objetivo de avaliar o padrão sanitário dos alimentos no comércio, por meio dos parâmetros físicos, químicos e microbiológicos, do nível de contaminantes
e das informações de rotulagem.
Em inglês: Program for Monitoring Food Quality Standards.
      </Text>
      <Text>        
      </Text>

    <Text style={styles.titulo1}>Proteína </Text>    
        <Text style={styles.titulo4}>  Compostos feitos de carbono, hidrogênio, oxigênio e nitrogênio, agrupados na forma de filamentos de aminoácidos.
        Em inglês: protein.
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
    height:"98%",
    alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom:12,
         
  },
  container3: {
    flexDirection:'row',
    backgroundColor: '#4fb8ce',
    alignItems: "center",
    justifyContent: "center", 
    height:'2%',          
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

export default LetraP;

