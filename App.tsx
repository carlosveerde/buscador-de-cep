import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";



export default function App() {
  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [uf, setUf] = useState('')

  return(
    <View style={styles.containerPrincipal}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Buscador de CEP</Text>
      </View>
      <View style={styles.containerCep}>
        <TextInput
        style={{
          borderColor: "#000000", borderStyle: "solid", borderWidth: 2,
          borderRadius: 10, width: 200, fontSize: 18, marginTop: 30, marginEnd: 20,
          padding: 15
        }}
        keyboardType="numeric"
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        placeholder="CEP"
        />
        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.caixaTexto}
        value={logradouro}
        onChangeText={(texto) => setLogradouro(texto)}
        placeholder="Logradouro"
        />
        <TextInput
        style={styles.caixaTexto}
        value={bairro}
        onChangeText={(texto) => setBairro(texto)}
        placeholder="Bairro"
        />
        <TextInput
        style={styles.caixaTexto}
        value={localidade}
        onChangeText={(texto) => setLocalidade(texto)}
        placeholder="Cidade"
        />
        <TextInput
        style={{
          borderColor: "#000000", borderWidth: 2, borderRadius: 10, width: 100, 
          fontSize: 18, marginTop: 10, marginEnd: 20, marginHorizontal: 20, padding: 15
        }}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
        placeholder= "Estado"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
  },
  topBar: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "#108e0c",
  },
  title: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    margin: 20
  },
  containerCep: {
    flexDirection:"row",
    height: 100,
    marginHorizontal: 20,
  },
  botaoBuscar: {
    width: 120,
    height: 70,
    marginTop: 30,
    marginEnd: 20,
    backgroundColor: "#108e0c",
    borderRadius: 10,
    padding: 20

  },
  textoBotaoBuscar: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  caixaTexto: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20
    }
});
