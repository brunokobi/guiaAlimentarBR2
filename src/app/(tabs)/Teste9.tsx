import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';

function Teste9({navigation}){
  const [win,setWin]=useState('');
  const [los,setLos]=useState('');
  const [win1,setWin1]=useState('');
  const [los1,setLos1]=useState('');
  const [win2,setWin2]=useState('');
  const [los2,setLos2]=useState('');
 

  function vencedor (){
    setWin('Você Acertou!!')
    setLos('') 
    } 
   
  function perde (){     
    setLos('Você Errou !!')
    setWin('')
  }

  function vencedor1 (){
    setWin1('Você Acertou!!')
    setLos1('') 
    } 
   
  function perde1 (){     
    setLos1('Você Errou !!')
    setWin1('')
  }

  function vencedor2 (){
    setWin2('Você Acertou!!')
    setLos2('') 
    } 
   
  function perde2 (){     
    setLos2('Você Errou !!')
    setWin2('')
  }

  // function placar (){
  
  // }



  return (
    <>
     <ScrollView>
      <View style={styles.container}>
         <Image source={require('../../assets/anun.jpg')} style={styles.logo} />
           <Text style={styles.titulo}>
           Essa informação pode ser considerada confiável ??</Text>
         <TouchableOpacity onPress={perde}>
          <Text style={styles.botao2}> Verdadeiro </Text>
       </TouchableOpacity>
      
       <TouchableOpacity onPress={vencedor}>
          <Text style={styles.botao4}> Falso </Text>
       </TouchableOpacity>
       <Text style={styles.titulo2}> {win} {los}</Text>        

       <Image source={require('../../assets/obe.jpg')} style={styles.logo} />
           <Text style={styles.titulo}>
           Essa informação pode ser considerada confiável ??</Text>
         <TouchableOpacity onPress={vencedor2}>
          <Text style={styles.botao2}>Verdadeiro </Text>
       </TouchableOpacity>
       
       <TouchableOpacity onPress={perde2}>
          <Text style={styles.botao4}> Falso </Text>
       </TouchableOpacity>
       <Text style={styles.titulo2}> {win2} {los2}</Text>


       <Image source={require('../../assets/anun1.jpg')} style={styles.logo} />
           <Text style={styles.titulo}>
           Essa informação pode ser considerada confiável ??</Text>
         <TouchableOpacity onPress={perde1}>
          <Text style={styles.botao2}>Verdadeiro </Text>
       </TouchableOpacity>        
       <TouchableOpacity onPress={vencedor1}>
          <Text style={styles.botao4}> Falso </Text>
       </TouchableOpacity>
       <Text style={styles.titulo2}> {win1} {los1}</Text>        
      </View>
      </ScrollView>

      <View style={styles.container3}>        
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.botaox}> Sobre </Text>
       </TouchableOpacity>
       <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
       <Image source={require('../../assets/Brazil-flag-icon.png')} style={styles.logo1} />
       <TouchableOpacity onPress={() => navigation.navigate('Mais')}>
          <Text style={styles.botaox}>Glossário</Text>
       </TouchableOpacity>
       </View>
      </>
    );
  }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#c6f2fc',
        alignItems: "center",
        justifyContent: "flex-start",
               
      },
      titulo:{
        textAlign:'center',
        marginTop:2,         
        fontSize:20,
        fontWeight:'bold', 
        marginLeft:5,
        marginRight:2,
        marginBottom:2,          
        height:'auto',
        width:'auto',
        backgroundColor:'blue',
        borderColor:"black",
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:5,
        borderBottomWidth:5,
        borderRadius:10,
        color:'#fff',
      },
        logo: {
          width: '98%',
          height: 180,
          marginTop:5,
          marginBottom: 5,
          borderColor:"black",
          borderWidth:2,
          borderRadius:10,                   
        },
        container3: {
          flexDirection:'row',
          backgroundColor: '#4fb8ce',
          alignItems: "center",
          justifyContent: "center", 
          height:45,          
        },

        logo1: {
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
          titulo2:{
            textAlign:'justify',
            marginTop:2,
            fontSize:24,
            fontWeight:'bold',            
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#000',          
          },

          botao2:{  
            textAlign:'center',
            fontSize:16,
            fontWeight:'bold',
            paddingStart:5,
            paddingTop:5,
            paddingLeft:5,
            paddingRight:0, 
            alignItems: "center",
            justifyContent: "center",   
            height:35,
            width:132,
            backgroundColor:'green',    
            borderRadius:25,
            borderTopWidth:2,
              borderLeftWidth:2,
              borderRightWidth:2,
              borderBottomWidth:5,
            color:'#fff',
            marginTop:1,
            marginRight:8,
            marginLeft:8,
            marginBottom:5, 
          },

          botao3:{ 
            textAlign:'center', 
            fontSize:16,
            fontWeight:'bold',
            paddingStart:5,
            paddingTop:5,
            paddingLeft:5,
            paddingRight:0, 
            alignItems: "center",
            justifyContent: "center",   
            height:35,
            width:132,
            backgroundColor:'yellow',    
            borderRadius:25,
            borderTopWidth:2,
              borderLeftWidth:2,
              borderRightWidth:2,
              borderBottomWidth:5,
            color:'#000',
            marginTop:1,
            marginRight:8,
            marginLeft:8,
            marginBottom:5,
          },

          botao4:{ 
            textAlign:'center', 
            fontSize:16,
            fontWeight:'bold',
            paddingStart:5,
            paddingTop:5,
            paddingLeft:5,
            paddingRight:0, 
            alignItems: "center",
            justifyContent: "center",   
            height:35,
            width:132,
            backgroundColor:'red',    
            borderRadius:25,
            borderTopWidth:2,
              borderLeftWidth:2,
              borderRightWidth:2,
              borderBottomWidth:5,
            color:'#fff',
            marginTop:1,
            marginRight:8,
            marginLeft:8,
            marginBottom:5,
          },
          botaox:{  
            fontSize:16,
            fontWeight:'bold',
            paddingStart:5,
            paddingTop:5,
            paddingLeft:5,
            paddingRight:0, 
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
            marginLeft:8,
            marginBottom:5, 
          },
          
          

      });

export default Teste9;