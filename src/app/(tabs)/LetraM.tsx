import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraM( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Macronutriente </Text>    
        <Text style={styles.titulo4}> Nutriente que é necessário ao organismo em
grande quantidade em relação aos micronutrientes.
Nota: os macronutrientes são especificamente os carboidratos, as
gorduras e as proteínas amplamente encontrados nos alimentos.
Em inglês: macronutrient.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Manipulação de alimentos </Text>    
        <Text style={styles.titulo4}>  Conjunto de procedimentos e técnicas operacionais aplicadas aos alimentos, desde o tratamento da
matéria-prima até a obtenção do alimento acabado.
Nota: esses procedimentos e técnicas ocorrem nas fases de processamento, de armazenamento e de transporte e distribuição
dos alimentos.
Em inglês: food handling.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Medidas Profiláticas </Text>    
      <Text style={styles.titulo4}> Providências adotadas para corrigir situações patológicas clinicamente instaladas.
Nota: essas ações visam à cura de doenças.
Em inglês: therapeutic measures.
</Text> 
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Metabolismo </Text>    
      <Text style={styles.titulo4}> Todos os processos que 
      possibilitam a manutenção da vida. Processos de transformações
       químicas e físicas que ocorrem no organismo: crescimento de 
       novos tecidos, destruição dos antigos, conversão dos 
       nutrientes em energia etc.
Em inglês: metabolism.
</Text> 
      <Text>        
      </Text>

      <Text style={styles.titulo1}>Micronutriente </Text>    
      <Text style={styles.titulo4}> Nutriente necessário ao organismo em pequenas quantidades (em miligramas ou microgramas) em relação
aos macronutrientes.
Nota: as vitaminas e os minerais são tipos de micronutrientes.
Em inglês: micronutrient.
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

export default LetraM;

