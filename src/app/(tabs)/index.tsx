import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  Container,
  TabsContainer,
  Container1,
  TabsContainer1,
  TabItem,
  TabItemG,
  TabItemY,
  TabItemR,
  TabText,
  TabTextB,
  TabText1,
} from "../styles";

function Home({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.titulo1}>
            10 passos para uma Alimentação Adequada e Saudável
          </Text>
          <Container>
            <TabsContainer>
              <TouchableOpacity onPress={() => navigation.navigate("Passo1")}>
                <TabItem>
                  <TabTextB>1º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo2")}>
                <TabItem>
                  <TabTextB>2º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo3")}>
                <TabItem>
                  <TabTextB>3º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo4")}>
                <TabItem>
                  <TabTextB>4º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo5")}>
                <TabItem>
                  <TabTextB>5º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo6")}>
                <TabItem>
                  <TabTextB>6º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo7")}>
                <TabItem>
                  <TabTextB>7º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo8")}>
                <TabItem>
                  <TabTextB>8º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo9")}>
                <TabItem>
                  <TabTextB>9º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Passo10")}>
                <TabItem>
                  <TabTextB>10º passo </TabTextB>
                </TabItem>
              </TouchableOpacity>
            </TabsContainer>
          </Container>
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>Classificação dos Alimentos</Text>
          <Container1>
            <TabsContainer1>
              <TabItemG>
                <TouchableOpacity
                  onPress={() => navigation.navigate("InNatura")}
                >
                  <TabText1>In Natura</TabText1>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("MinProcessado")}
                >
                  <TabText1>Minimamente Processados</TabText1>
                </TouchableOpacity>
              </TabItemG>

              <TouchableOpacity
                onPress={() => navigation.navigate("Processado")}
              >
                <TabItemY>
                  <TabTextB>Processados</TabTextB>
                </TabItemY>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("UltraProcessado")}
              >
                <TabItemR>
                  <TabText>Ultraprocessados</TabText>
                </TabItemR>
              </TouchableOpacity>
            </TabsContainer1>
          </Container1>

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>

      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
          <Text style={styles.botao2}> Sobre </Text>
        </TouchableOpacity>
        <Text style={styles.titulo3}>Guia Alimentar Brasileiro</Text>
        <Image
          source={require("../../assets/Brazil-flag-icon.png")}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Mais")}>
          <Text style={styles.botao3}>Glossário</Text>
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
  container1: {
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 5,
    height: "auto",
  },

  container2: {
    flexDirection: "row",
    backgroundColor: "#c6f2fc",
  },

  titulo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    height: "auto",
    width: "95%",
    backgroundColor: "#3b5998",
    borderRadius: 10,
    borderColor: "black",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    color: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginTop: 0,
  },
  botao: {
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 5,
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: "auto",
    backgroundColor: "green",
    borderRadius: 25,
    color: "#fff",
    marginTop: 8,
  },
  titulo1: {
    marginTop: 2,
    marginLeft: 4,
    marginRight: 4,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
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
  botao1: {
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: "auto",
    backgroundColor: "blue",
    borderRadius: 25,
    color: "#fff",
    marginTop: 10,
    marginRight: 8,
  },

  container3: {
    flexDirection: "row",
    backgroundColor: "#4fb8ce",
    alignItems: "center",
    height: "7%",
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
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 5,
  },

  botao3: {
    fontSize: 16,
    fontWeight: "bold",
    paddingStart: 5,
    paddingTop: 5,
    paddingLeft: 3,
    paddingRight: 2,
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
    marginRight: 10,
    marginLeft: 5,
    marginBottom: 5,
  },

  logo: {
    width: 24,
    height: 24,
    paddingLeft: 10,
    // marginBottom: 20,
  },

  logo2: {
    width: 440,
    height: 20,
    marginTop: -1,
    marginBottom: -5,
    //paddingLeft:10,
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
});

export default Home;
