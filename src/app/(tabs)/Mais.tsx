import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';

function Mais({navigation}){
   
    return ( 
      <> 
     <ScrollView style={styles.container}>       
        <TouchableOpacity onPress={() => navigation.navigate('LetraA')}>
            <Text style={styles.botao2}> A</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraB')}>
            <Text style={styles.botao2}> B</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraC')}>
            <Text style={styles.botao2}> C</Text>
         </TouchableOpacity>   

         <TouchableOpacity onPress={() => navigation.navigate('LetraD')}>
            <Text style={styles.botao2}> D</Text>
         </TouchableOpacity>  

          <TouchableOpacity onPress={() => navigation.navigate('LetraE')}>
            <Text style={styles.botao2}> E</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraF')}>
            <Text style={styles.botao2}> F</Text>
         </TouchableOpacity>           

          <TouchableOpacity onPress={() => navigation.navigate('LetraG')}>
            <Text style={styles.botao2}> G</Text>
         </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('LetraH')}>
            <Text style={styles.botao2}> H</Text>
         </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('LetraI')}>
            <Text style={styles.botao2}> I</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraL')}>
            <Text style={styles.botao2}> L</Text>
         </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('LetraM')}>
            <Text style={styles.botao2}> M</Text>
         </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('LetraN')}>
            <Text style={styles.botao2}> N</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraO')}>
            <Text style={styles.botao2}> O</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraP')}>
            <Text style={styles.botao2}> P</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraR')}>
            <Text style={styles.botao2}> R</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraS')}>
            <Text style={styles.botao2}> S</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraT')}>
            <Text style={styles.botao2}> T</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraU')}>
            <Text style={styles.botao2}> U</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraV')}>
            <Text style={styles.botao2}> V</Text>
         </TouchableOpacity> 

         <TouchableOpacity onPress={() => navigation.navigate('LetraX')}>
            <Text style={styles.botao2}> X</Text>
         </TouchableOpacity> 

                           
      </ScrollView>

      <View style={styles.container3}>        
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.botaox}> Sobre </Text>
         </TouchableOpacity>
         <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
         <Image source={require('../../assets/Brazil-flag-icon.png')} style={styles.logo} />
         <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={styles.botaox}> Home </Text>
         </TouchableOpacity>
         </View>

   </>
           
      )
    }

    const styles = StyleSheet.create({
        // container: { 
        //   flex:1,        
        //   backgroundColor: '#dcf19b',
        //   alignItems: "center",
        //   justifyContent: "flex-start",                  
        // },
        container1: { 
          flex:1,        
          backgroundColor: '#c6f2fc',
          alignItems: "center",
          justifyContent: "flex-end",
          height:"7%",                  
        },

        container: {
          flex: 1,
          backgroundColor: '#c6f2fc',
          height:"93%",         
        },
          titulo:{
            textAlign:'center',
            marginTop:2,         
            fontSize:20,
            fontWeight:'bold', 
            marginLeft:5,
            marginRight:2,
            marginBottom:10,          
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

          titulo1:{
            textAlign:'justify',
            marginTop:0,
            fontSize:18,
            marginLeft:5,
            marginRight:2,
            marginBottom:0          
          },
        
        // titulo:{
        //   fontSize:20,
        //   fontWeight:'bold',
        //   marginTop:10,  
        // },
        texto:{
          fontSize:18,
          marginTop:2,
          fontWeight:'bold', 
        },
        texto1:{
          fontSize:14,
          //fontWeight:'bold', 
        },

         container3: {
          flexDirection:'row',
          backgroundColor: '#4fb8ce',
          alignItems: "center",
          justifyContent: "center", 
          height:45,          
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
          botao2:{  
            fontSize:32,
            fontWeight:'bold',
            paddingStart:6,
            paddingTop:2,
            paddingLeft:5,
            paddingRight:5, 
            alignItems: "center",
            justifyContent: "center",   
            height:"auto",
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

      

export default Mais;