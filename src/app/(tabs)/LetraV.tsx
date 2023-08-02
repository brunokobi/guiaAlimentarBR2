import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraV( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Vegetarianos </Text>    
        <Text style={styles.titulo4}>  Pessoas que excluem da alimentação a carne animal e possivelmente, outros produtos animais, como leite, queijo e ovos.  
Em inglês: vegetarians.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Vigilância Alimentar e Nutricional </Text>    
        <Text style={styles.titulo4}> VAN. Coleta e análise de
informações sobre a situação alimentar e nutricional de indivíduos e
coletividades, com o propósito de fundamentar medidas destinadas
a prevenir ou corrigir problemas detectados ou potenciais.
Nota: é um requisito essencial para justificar, racionalmente, programas de alimentação e nutrição.
Em inglês: food and nutritional surveillance.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Vigilância Nutricional </Text>    
        <Text style={styles.titulo4}>  Informações sobre o estado de nutrição
dos grupos biológicos (crianças, gestantes) e sociais (baixa renda)
mais expostos aos problemas da nutrição.
Notas: i) É parte da vigilância alimentar e nutricional. ii) Pode incluir, também, situações opostas (homens e mulheres adultos e
velhos com sobrepeso, obesidade e suas consequências).
Em inglês: nutritional surveillance.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Vigilância Sanitária </Text>    
        <Text style={styles.titulo4}>  Conjunto de ações capazes de eliminar, de
diminuir ou de prevenir riscos à saúde e de intervir nos problemas
sanitários decorrentes do meio ambiente, da produção e da circulação de bens e da prestação de serviços de interesse da saúde.
Nota: essa vigilância abrange: a) o controle de bens de consumo
que, direta ou indiretamente, se relacionem com a saúde em todasas etapas, do processo de produção até o consumo; b) o controle
da prestação de serviços que se relacione, direta ou indiretamente,
com a saúde.
Em inglês: sanitary surveillance.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Vigilância Sanitária dos Alimentos </Text>    
        <Text style={styles.titulo4}>  Verificação da aplicação de
normas e condutas objetivando assegurar a necessária qualidade
dos alimentos.
Em inglês: sanitary surveillance of foods.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Vitaminas </Text>    
        <Text style={styles.titulo4}>  São substâncias orgânicas essenciais.
         O organismo necessita de quantidades muito pequenas para o seu funcionamento normal. Encontradas principalmente em frutas e vegetais.
Em inglês: vitamins.
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

export default LetraV;

