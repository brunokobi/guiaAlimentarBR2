import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Container, TabsContainer,Container1, TabsContainer1, TabItem,TabItemG,TabItemY,TabItemR, TabText,TabTextB,TabText1} from './styles';

 function LetraG( {navigation}) { 
  
  return (
    <ScrollView>
     <View style={styles.container1}>

     <Text style={styles.titulo1}>Grãos </Text>    
        <Text style={styles.titulo4}>  É a semente que o cereal produz. Cereais são um tipo de gramínea, uma família de plantas que reúne mais de 6 mil espécies em todo o planeta, como o trigo, a aveia e a cevada.
        plantas como feijão, ervilha e amendoim não podem ser chamadas de cereais — portanto, suas sementes não são grãos. A razão é bem simples: eles não fazem parte da família das gramíneas — são, na verdade, da família das leguminosas. Aí, a regra é até mais simples: as sementes do feijão, da ervilha e do amendoim chamam-se apenas… sementes.
Em inglês: grains.
    </Text>
    <Text>        
      </Text>

     <Text style={styles.titulo1}>Gordura </Text>    
        <Text style={styles.titulo4}> Lipídio. Substância de origem vegetal ou animal composta de triglicerídeos e de pequenas quantidades de fosfolipídios.
Notas: i) Essa substância é insolúvel em água. ii) É um macronutriente que faz parte da composição de vários alimentos, como
carnes, laticínios e manteiga. iii) Na alimentação saudável, ela
deve compor cerca de 30% da dieta.
Em inglês: fat.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Gordura Trans </Text>    
        <Text style={styles.titulo4}> Tipo específico de gordura formada por meio de
um processo de hidrogenação natural (na gordura de animais ruminantes) ou industrial.
Notas: i) Essas gorduras estão presentes na maioria dos alimentos
industrializados, em concentrações variáveis. ii) Os alimentos de
origem animal, como a carne e o leite, possuem pequenas quantidades de gordura trans. iii) A gordura hidrogenada é um tipo específico de gordura trans produzido pela indústria. iv) O processo
de hidrogenação industrial que transforma óleos vegetais líquidos
em gordura sólida à temperatura ambiente é utilizado para melhorar a consistência dos alimentos e o tempo de prateleira de alguns
produtos. v) A gordura trans (hidrogenada) é prejudicial à saúde,
podendo contribuir para o desenvolvimento de algumas doenças
crônicas como dislipidemias.
Em inglês: trans fat.

    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Grupo de Alimentos </Text>    
        <Text style={styles.titulo4}>  Conjunto de alimentos in natura ou processados que são agrupados de acordo com os principais nutrientes que os compõem.Nota: de acordo com o Guia Alimentar para a População Brasileira, os alimentos são classificados em cinco grupos principais: a)
cereais, tubérculos e raízes, fontes preferenciais de carboidratos; b)
frutas, legumes e verduras, ricos em fibras alimentares, vitaminas e
minerais; c) feijões e outros alimentos vegetais ricos em proteínas
e fibras; d) leite e derivados, carnes e ovos, fontes de proteína animal; e) gorduras, açúcares e sal, alimentos cujo consumo deve ser
reduzido por estarem associados ao maior risco de doenças crô-
nicas não transmissíveis (DCNT), como obesidade, hipertensão,
diabetes, doenças cardíacas e alguns tipos de câncer; gorduras e
açúcares são alimentos com alta densidade de energia; o principal
componente do sal é o sódio.
Em inglês: food groups.
    </Text>
    <Text>        
      </Text>

    <Text style={styles.titulo1}>Guia Alimentar </Text>    
      <Text style={styles.titulo4}> Instrumento informativo que define as diretrizes do País sobre alimentação saudável visando à promoção
da saúde.
Nota: elaborado com base no cenário epidemiológico-nutricional e no contexto socioeconômico e cultural do País, apresenta
um conjunto de recomendações destinadas à população em
geral e traduz os conhecimentos científicos sobre alimentação
e nutrição em mensagens práticas, facilitando a seleção dos
alimentos e orientando sobre a forma e a quantidade em que
devem ser consumidos.
Em inglês: nutritional guide.
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

export default LetraG;

