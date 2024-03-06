import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (primeiro, segundo, terceiro) => {
  return primeiro.charAt(0) + " " + segundo.charAt(0) + " " + terceiro.charAt(0) + "."
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome completo: {getNomeCompleto("Thiago", "Fernandes", "Zanon")} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});