import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function Passo8({ navigation }) {
  // const githubUsername = navigation.getParam('github_username');
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>
            {" "}
            Planejar o uso do tempo para dar à alimentação o espaço que ela
            merece
          </Text>
          <Text style={styles.titulo1}>
            {" "}
            Planeje as compras de alimentos, organize a despensa doméstica e
            defina com antecedência o cardápio da semana. Divida com os membros
            de sua família a responsabilidade por todas as atividades domésticas
            relacionadas ao preparo de refeições. Faça da preparação de
            refeições e do ato de comer momentos privilegiados de convivência e
            prazer. Reavalie como você tem usado o seu tempo e identifique quais
            atividades poderiam ceder espaço para a alimentação.
          </Text>
          <Image
            source={require("../../assets/dispe.jpg")}
            style={styles.logo1}
          />
          <Text style={styles.titulo2}>Despensa Organizada</Text>

          <Image
            source={require("../../assets/dispe1.jpg")}
            style={styles.logo1}
          />
          <Text style={styles.titulo2}>Refeições</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Teste7")}>
            <Text style={styles.botao2}> Teste seu Apredizando do Guia </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate("Passo7")}>
          <Text style={styles.botao2}>7º Passo </Text>
        </TouchableOpacity>
        <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
        <Image
          source={require("../../assets/Brazil-flag-icon.png")}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Passo9")}>
          <Text style={styles.botao2}>9º Passo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "auto",
    minHeight: 800,
  },
  titulo: {
    textAlign: "center",
    marginTop: 2,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 2,
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
    marginTop: 2,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
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

  titulo3: {
    textAlign: "justify",
    marginTop: 2,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
    color: "#fff",
  },

  logo1: {
    width: 305,
    height: 159,
    marginTop: 5,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },

  titulo2: {
    fontWeight: "bold",
    textAlign: "justify",
    marginTop: 0,
    fontSize: 18,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
  },

  botao2: {
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 5,
    paddingTop: 5,
    paddingLeft: 5,
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
    marginRight: 1,
    marginLeft: 1,
    marginBottom: 5,
  },
});

export default Passo8;
