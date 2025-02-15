import React, { useState } from "react";
import { 
  View, Text, TextInput, Button, ActivityIndicator, StyleSheet, useWindowDimensions 
} from "react-native";

const ConsultaCEP = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarEndereco = async () => {
    if (cep.length !== 8) {
      setError("Digite um CEP válido com 8 dígitos.");
      return;
    }

    setLoading(true);
    setError("");
    setEndereco({ logradouro: "", bairro: "", localidade: "", uf: "" });

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        setEndereco({
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        });
      }
    } catch (error) {
      setError("Erro ao buscar o CEP. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
      <Text style={styles.title}>Consulta de Endereço</Text>

      <Text style={styles.label}>CEP:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        maxLength={8}
        placeholder="Ex: 01001000"
      />

      <Button title="Buscar" onPress={buscarEndereco} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.resultContainer}>
        <View style={styles.column}>
          <Text style={styles.label}>Logradouro:</Text>
          <TextInput style={styles.input} value={endereco.logradouro} editable={false} />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Bairro:</Text>
          <TextInput style={styles.input} value={endereco.bairro} editable={false} />
        </View>
      </View>

      <View style={styles.resultContainer}>
        <View style={styles.column}>
          <Text style={styles.label}>Cidade:</Text>
          <TextInput style={styles.input} value={endereco.localidade} editable={false} />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Estado:</Text>
          <TextInput style={styles.input} value={endereco.uf} editable={false} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    alignSelf: "center",
    width: "100%",
  },
  largeContainer: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default ConsultaCEP;
