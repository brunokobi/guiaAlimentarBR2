import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./index";
import Passo1 from "./Passo1";
import Passo2 from "./Passo2";
import Passo3 from "./Passo3";
import Passo4 from "./Passo4";
import Passo5 from "./Passo5";
import Passo6 from "./Passo6";
import Passo7 from "./Passo7";
import Passo8 from "./Passo8";
import Passo9 from "./Passo9";
import Passo10 from "./Passo10";
import Teste from "./Teste";
import Teste1 from "./Teste1";
import Teste2 from "./Teste2";
import Teste3 from "./Teste3";
import Teste4 from "./Teste4";
import Teste5 from "./Teste5";
import Teste6 from "./Teste6";
import Teste7 from "./Teste7";
import Teste8 from "./Teste8";
import Teste9 from "./Teste9";
import InNatura from "./InNatura";
import MinProcessado from "./MinProcessado";
import Processado from "./Processado";
import UltraProcessado from "./UltraProcessado";
import Mais from "./Mais";
import Sobre from "./Sobre";
import LetraA from "./LetraA";
import LetraB from "./LetraB";
import LetraC from "./LetraC";
import LetraD from "./LetraD";
import LetraE from "./LetraE";
import LetraF from "./LetraF";
import LetraG from "./LetraG";
import LetraH from "./LetraH";
import LetraI from "./LetraI";
import LetraL from "./LetraL";
import LetraM from "./LetraM";
import LetraN from "./LetraN";
import LetraO from "./LetraO";
import LetraP from "./LetraP";
import LetraR from "./LetraR";
import LetraS from "./LetraS";
import LetraT from "./LetraT";
import LetraU from "./LetraU";
import LetraV from "./LetraV";
import LetraX from "./LetraX";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

export default function TabRoutesLayout() {
  const [mudar, setMudar] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMudar(true);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  if (!mudar) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo3}>
          Você conhece o guia alimentar brasileiro ??
        </Text>
        <Image source={require("../../assets/prato.gif")} style={styles.logo} />
        <Text style={styles.titulo3}>
          Veja os 10 passos de uma alimentação saudável
        </Text>
      </View>
    );
  } else {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#4fb8ce" />
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="index" component={Index} />
          <Screen name="Passo1" component={Passo1} />
          <Screen name="Passo2" component={Passo2} />
          <Screen name="Passo3" component={Passo3} />
          <Screen name="Passo4" component={Passo4} />
          <Screen name="Passo5" component={Passo5} />
          <Screen name="Passo6" component={Passo6} />
          <Screen name="Passo7" component={Passo7} />
          <Screen name="Passo8" component={Passo8} />
          <Screen name="Passo9" component={Passo9} />
          <Screen name="Passo10" component={Passo10} />
          <Screen name="Teste" component={Teste} />
          <Screen name="Teste1" component={Teste1} />
          <Screen name="Teste2" component={Teste2} />
          <Screen name="Teste3" component={Teste3} />
          <Screen name="Teste4" component={Teste4} />
          <Screen name="Teste5" component={Teste5} />
          <Screen name="Teste6" component={Teste6} />
          <Screen name="Teste7" component={Teste7} />
          <Screen name="Teste8" component={Teste8} />
          <Screen name="Teste9" component={Teste9} />
          <Screen name="InNatura" component={InNatura} />
          <Screen name="MinProcessado" component={MinProcessado} />
          <Screen name="Processado" component={Processado} />
          <Screen name="UltraProcessado" component={UltraProcessado} />
          <Screen name="Mais" component={Mais} />
          <Screen name="Sobre" component={Sobre} />
          <Screen name="LetraA" component={LetraA} />
          <Screen name="LetraB" component={LetraB} />
          <Screen name="LetraC" component={LetraC} />
          <Screen name="LetraD" component={LetraD} />
          <Screen name="LetraE" component={LetraE} />
          <Screen name="LetraF" component={LetraF} />
          <Screen name="LetraG" component={LetraG} />
          <Screen name="LetraH" component={LetraH} />
          <Screen name="LetraI" component={LetraI} />
          <Screen name="LetraL" component={LetraL} />
          <Screen name="LetraM" component={LetraM} />
          <Screen name="LetraN" component={LetraN} />
          <Screen name="LetraO" component={LetraO} />
          <Screen name="LetraP" component={LetraP} />
          <Screen name="LetraR" component={LetraR} />
          <Screen name="LetraS" component={LetraS} />
          <Screen name="LetraT" component={LetraT} />
          <Screen name="LetraU" component={LetraU} />
          <Screen name="LetraV" component={LetraV} />
          <Screen name="LetraX" component={LetraX} />
        </Navigator>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#c6f2fc",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  container: {
    flex: 1,
    backgroundColor: "#4fb8ce",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 14,
    //fontWeight:'bold',
  },

  container3: {
    flexDirection: "row",
    backgroundColor: "#4fb8ce",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },

  logo: {
    width: 448,
    height: 398,
    paddingLeft: 10,
    // marginBottom: 20,
  },

  titulo3: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
    fontSize: 32,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
    color: "#fff",
  },
});
