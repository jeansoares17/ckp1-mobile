import { useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet
} from 'react-native';

import { api, codigoApi } from './api';
const image = { uri: 'https://i.ytimg.com/vi/mhU9dMiVU3k/maxresdefault.jpg' }

export default function App() {
  const [climaInicial, setClimasIniciais] = useState("");
  const [estadoEscolhido, setEstadoEscolhido] = useState([]);

  const getInitialClima = () => {
    api.get()
      .then((response) => {
        const data = response.data;
        setClimasIniciais(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Erro', 'Não foi possível carregar o clima');
      })
  }

  const getEstadosData = (url) => {
    api.get(url)
      .then((response) => {
        const estado = {
          estado: data.name,
          clima: data.waether[0].description,
          temperatura: data.main.temp,
        };

        setEstadoEscolhido(estado);
      })
      .catch(() => {
        Alert.alert('Erro', 'Erro ao encontrar o estado');
      })
  }

  useEffect(() => {
    getEstadosData()
  }, [climaInicial]);

  return (
    <ImageBackground source={ image }
    style={styles.I}
    >
    <View>
      <View>
        <Text></Text>
      </View>

      {estadoEscolhido && (
        <View>
          <Text style={styles.estadoName}>Nome: {estadoEscolhido.nome}</Text>
          <Text style={styles.estadoClima}>Clima: {estadoEscolhido.clima}</Text>
          <Text style={styles.estadoTemperatura}>Temperatura: {estadoEscolhido.temperatura}</Text>
          
    </View>
      )}

      
    </View>
    <TextInput 
        placeholder="Busque outra cidade"
        value={estadoEscolhido}
        onChangeText={(value) => setEstadoEscolhido(value)}
            />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    flex: 1
  }
});
