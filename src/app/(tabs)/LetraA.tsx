import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraA( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

    <Text style={styles.titulo1}>Alimentação </Text>    
        <Text style={styles.titulo4}> Processo biológico e cultural que se traduz na escolha, preparação e consumo de um ou vários alimentos.
    Em inglês: food; eating; feeding.

    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Alimentação Saudável </Text>    
        <Text style={styles.titulo4}> Sin. Alimentação equilibrada. Padrão alimentar adequado às necessidades biológicas e sociais dos indiví-
duos e de acordo com as fases do curso da vida.
Notas: i) Deve ser acessível (física e financeiramente), saborosa,
variada, colorida, harmônica e segura quanto aos aspectos sanitários. ii) Esse conceito considera as práticas alimentares culturalmente referenciadas e valoriza o consumo de alimentos saudáveis
regionais (como legumes, verduras e frutas), sempre levando em
consideração os aspectos comportamentais e afetivos relacionados às práticas alimentares.
Em inglês: healthy eating.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Alimento Artificial </Text>    
        <Text style={styles.titulo4}>  Alimento preparado com o objetivo de imitar o alimento natural, cuja composição contenha, de forma preponderante, substância não encontrada no alimento a ser imitado.

Em inglês: artificial food.
    </Text>

    <Text style={styles.titulo1}>Alimentos Complementares </Text>    
      <Text style={styles.titulo4}> Alimento de transição para lactentes e crianças de primeira infância.
        Aqueles que se oferecem à criança em complementação ao leite
        materno e que são preparados de modo a oferecer uma dieta de
        consistência gradativamente maior até que ela possa receber a
        dieta da família, junto com o leite materno.       
Em inglês: complementary or transition foods.
      </Text>

    <Text style={styles.titulo1}>Alimento Diet </Text>    
        <Text style={styles.titulo4}>  Alimento industrializado em que determinados nutrientes como proteína, carboidrato, gordura, sódio,
entre outros, estão ausentes ou em quantidades muito reduzidas,
não resultando, necessariamente, em um produto com baixas calorias. Ver Alimento; Alimento light.
Em inglês: dietary food.
    </Text>

    <Text style={styles.titulo1}>Alimento Funcional </Text>    
        <Text style={styles.titulo4}>  Alimentos trazem benefícios de
         saúde específicos, incluindo a prevenção e o tratamento de
          doenças.
        Em inglês: functional foods.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Alimento Fortificado </Text>    
        <Text style={styles.titulo4}>  Sin. Alimento enriquecido. Alimento ao
qual se adicionam nutrientes essenciais para atender aos seguintes
objetivos: a) reforçar o valor nutritivo; b) prevenir ou corrigir deficiência demonstrada em um ou mais nutrientes da alimentaçãoda população ou em grupos específicos. Ver Alimento; Enriquecimento de alimento.
Em inglês: fortified food.
    </Text>

    <Text style={styles.titulo1}>Alimento Integral </Text>    
        <Text style={styles.titulo4}>  Alimento pouco ou não processado que
mantém em perfeitas condições o conteúdo de fibras e nutrientes.
Nota: não existe legislação que defina esse tipo de alimento.
Em inglês: whole food.
    </Text>
    <Text>        
      </Text>
    <Text style={styles.titulo1}>Alimento Light </Text>    
        <Text style={styles.titulo4}>  Alimento produzido de forma que sua
composição reduza em, no mínimo, 25% o valor calórico e/ou os
seguintes nutrientes: açúcares, gordura saturada, gorduras totais,
colesterol e sódio, comparado com o produto tradicional ou similar de marca diferente.
Em inglês: light food.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Alimentos Transgênicos </Text>    
        <Text style={styles.titulo4}>  São alimentos modificados 
        geneticamente, ou seja, alimentos em cujo genoma foram 
        colocados genes de outros organismos de espécies diferentes,
         mas dentro de um mesmo gênero.
         Em inglês: transgenic foods.
    </Text>
    <Text>        
      </Text>

      <Text style={styles.titulo1}>Antioxidantes </Text>    
        <Text style={styles.titulo4}>  Substâncias que retardam
         a oxidação e combatem radicais livres.
         Em inglês: antioxidants.
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

export default LetraA;

