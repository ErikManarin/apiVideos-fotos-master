import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFull: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    padding: 20,
  },
  innerContainer: {
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  input: {
    marginBottom: 10,
    alignSelf: "stretch",
    width: "100%",
  },
  textoEscuro: {
    color: "black",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    color: "black",
    margin: 20,
  },
});
