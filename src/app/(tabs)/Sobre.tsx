import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

function Sobre({ navigation }) {
  // const githubUsername = navigation.getParam('github_username');
  return (
    <>
      <View style={styles.container2}>
        <Text style={styles.titulo}> Autora do Aplicativo </Text>
        <Text style={styles.texto}> Rafaela Soares Souza Kobi </Text>
        <Text style={styles.texto}> Nutricionista </Text>
        <Image source={require("../../assets/rafa.gif")} style={styles.logo1} />
        <Text style={styles.texto2}>
          {"   "} Eu sou Rafaela Soares Souza Kobi, nutricionista, e desenvolvi
          o aplicativo do Guia Alimentar Brasileiro como parte do meu TCC.
          {"\n   "}O objetivo do aplicativo é facilitar o acesso ao Guia
          Alimentar Brasileiro, um documento oficial do Ministério da Saúde que
          tem como propósito orientar a população brasileira sobre alimentação
          saudável.
          {"\n   "} Fiquei muito honrada ao expor o aplicativo no XXVII
          Congresso Brasileiro de Nutrição, o maior evento da América Latina
          sobre Alimentação e Nutrição, durante a feira Nutri Saber.
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://rafanutri.netlify.app/")}
          >
            <Image
              source={require("../../assets/site.png")}
              style={styles.logo4}
              alt="Site"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/ra.faela820/")
            }
          >
            <Image
              source={require("../../assets/instagram_icon_logo.png")}
              style={styles.logo3}
              alt="Instagram"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/rafaela-soares-souza-kobi-675369236/"
              )
            }
          >
            <Image
              source={require("../../assets/link.png")}
              style={styles.logo3}
              alt="Linkedin"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.texto1}>
          Professor Coordenador:{"\n"}
          Mírian Patrícia Castro Pereira Paixão{"\n"}Docente de Nutrição
          (UniSales Oficial)
        </Text>
        <Text></Text>
        {/* </View>

        <View style={styles.container}>
          <Text style={styles.titulo}> Centro Universitário Salesiano (UniSales) </Text> 
        <Image source={require('../../assets/logo.png')} style={styles.logo2} />   */}
      </View>

      <View style={styles.container1}>
        <Text style={styles.texto1}>
          Professor Coordenador:{"\n"}
          Mírian Patrícia Castro Pereira Paixão{"\n"}Docente de Nutrição
          (UniSales Oficial)
        </Text>
        <Image
          source={require("../../assets/bruno.gif")}
          style={styles.logo3}
        />
        <Text style={styles.texto1}>
          Desenvolvido{"\n"}
          Bruno Kobi Valadares de Amorim{"\n"}
          Mestrando em Computação Aplicada em IA (IFES){"\n"}
          Versão 3.0 - 2023
        </Text>
      </View>

      <View style={styles.container3}>
        <Text style={styles.titulo3}> Guia Alimentar Brasileiro</Text>
        <Image
          source={require("../../assets/Brazil-flag-icon.png")}
          style={styles.logo}
        />
        {/* <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
            <Text style={styles.botao2}> Deixe seu Feedback </Text>
         </TouchableOpacity> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex:1,
  //   backgroundColor: '#dcf19b',
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  // },
  container1: {
    flex: 1,
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  container: {
    flex: 1,
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 100,
  },
  container2: {
    flex: 2,
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titulo: {
    textAlign: "center",
    marginTop: 2,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 10,
    height: "auto",
    width: "auto",
    backgroundColor: "#3b5998",
    borderRadius: 10,
    borderColor: "black",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    color: "#fff",
  },

  titulo1: {
    textAlign: "justify",
    marginTop: 0,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
  },

  // titulo:{
  //   fontSize:20,
  //   fontWeight:'bold',
  //   marginTop:10,
  // },
  texto: {
    fontSize: 18,
    marginTop: 2,
    fontWeight: "bold",
  },
  texto1: {
    fontSize: 10,
    margin: 5,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },

  texto2: {
    fontSize: 14,
    margin: 10,
    textAlign: "justify",
  },

  container3: {
    flexDirection: "row",
    backgroundColor: "#4fb8ce",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },

  logo: {
    width: 24,
    height: 24,
    paddingLeft: 10,
    // marginBottom: 20,
  },

  logo1: {
    width: 160,
    height: 130,
    marginTop: -2,
    // marginBottom: 20,
  },
  logo3: {
    width: 70,
    height: 60,
    marginTop: 0,
    // marginBottom: 20,
  },
  logo4: {
    width: 70,
    height: 60,
    resizeMode: "contain",
    marginTop: -2,
    // marginBottom: 20,
  },

  titulo3: {
    textAlign: "justify",
    marginTop: 2,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
    color: "#fff",
  },
  botao2: {
    fontSize: 15,
    fontWeight: "bold",
    paddingStart: 5,
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: "auto",
    backgroundColor: "#3b5998",
    borderRadius: 25,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 5,
    color: "#fff",
    marginTop: 10,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 5,
  },
});

export default Sobre;
