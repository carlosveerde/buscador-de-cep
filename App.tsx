import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import Api from "./src/services/api";


export default function App() {
  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [uf, setUf] = useState('')
  const [complemento, setComplemento] = useState('')
  const [ddd, setDdd] = useState('')

  async function buscarCep (){
    if(cep == ''){
      Alert.alert('Por favor, insira um CEP!')
      setCep('')
    }
    try {
      const response =  await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      if(response.data.erro){
        Alert.alert("CEP Inválido");
      }
      if(response.data.complemento === '') {
        setComplemento('Sem complemento')
      } else {
        setComplemento(response.data.complemento);
      }
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);
      setDdd(response.data.ddd);
      console.log(response.data)
    }
    catch(error) {
      Alert.alert('CEP Inválido!')
      console.log('ERRO: ' + error)
    }
  }

  return(
    <SafeAreaView style={styles.containerPrincipal}>
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
        <TouchableOpacity 
        style={styles.botaoBuscar}
        onPress={buscarCep}>
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
        value={complemento}
        onChangeText={(texto) => setComplemento(texto)}
        placeholder="Complemento"
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
        <View style={{flexDirection: "row"}}>
        <TextInput
        style={{
          borderColor: "#000000", borderWidth: 2, borderRadius: 10, width: 100, 
          fontSize: 18, marginTop: 10, marginEnd: 20, marginLeft: 20, padding: 15
        }}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
        placeholder= "Estado"
        />
        <TextInput
        style={{
          borderColor: "#000000", borderWidth: 2, borderRadius: 10, width: 100, 
          fontSize: 18, marginTop: 10, marginEnd: 20, padding: 15
        }}
        value={ddd}
        onChangeText={(texto) => setDdd(texto)}
        placeholder= "DDD"
        />
        </View>
    </SafeAreaView>
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
