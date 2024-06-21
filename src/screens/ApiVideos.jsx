import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

function ApiVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyCdyidGYcLPQEnZE-pBNSrCNV-PI-nQddg';
    const endpoint = 'https://www.googleapis.com/youtube/v3/videos';

    axios.get(endpoint, {
      params: {
        key: apiKey,
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10  // Ajuste o número de resultados desejados
      }
    })
    .then(response => {
      console.log(response.data.items);  // Exemplo: exibindo itens de vídeo
      setVideos(response.data.items);
    })
    .catch(error => {
      console.error('Erro ao buscar vídeos:', error);
    });
  }, []);

  const renderVideos = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.thumbnail}
        source={{ uri: item.snippet.thumbnails.default.url }}
      />
      <Text>{item.snippet.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vídeos Populares</Text>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={renderVideos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 120,
    height: 90,
    marginRight: 10,
  },
});

export default ApiVideos;
