import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';


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
      <Image style={styles.logo} source={{uri: 'https://i.pinimg.com/564x/b8/1e/55/b81e55b2571a7266083cc8bf4c7c0dd2.jpg'}}/>
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
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%',
  },
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