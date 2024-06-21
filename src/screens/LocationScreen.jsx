import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { Surface, Button } from "react-native-paper";
export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão de acesso à localização negada");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);
  let text = "Aguardando...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }
  return (
    <View style={styles.container}>
      {" "}
      <Text style={styles.paragraph}>{text}</Text>{" "}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  paragraph: { fontSize: 18, textAlign: "center" },

  
});

<Surface style={styles.container}>
<View style={styles.innerContainer}>
    
    <Button onPress={() => navigation.navigate("LoginScreen")}>
          Voltar
        </Button>

    </View>
     </Surface>
