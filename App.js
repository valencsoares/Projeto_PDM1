import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (primeiro, segundo, terceiro) => {
  return primeiro.charAt(0) + " " + segundo.charAt(0) + " " + terceiro.charAt(0) + "."
} //charAt pega o primeiro indíce

function Header(){
  return(
    <Text style={styles.text}>navbar</Text>
  )
}
  
function Footer(){
  return(
    <Text style={styles.footer}>footer</Text>
  )
}
  
  export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome completo: {getNomeCompleto("Thiago", "Fernandes", "Zanon")} </Text>
      <Header/>
      <Footer/>
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
  footer: {
    backgroundColor: 'white',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 0,
    position: 'fixed',
  }
});