import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View } from 'react-native';


const getNomeCompleto = (primeiro, segundo, terceiro) => {
  return primeiro.charAt(0) + " " + segundo.charAt(0) + " " + terceiro.charAt(0) + "."
} //charAt pega o primeiro indíce

function Header(){
  return(
    <Text style={styles.navbar}>navbar</Text>
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
      <Image style={styles.logo} source={{uri: 'https://i.pinimg.com/564x/b8/1e/55/b81e55b2571a7266083cc8bf4c7c0dd2.jpg'}}/>
      {/* <Text style={styles.text}>Nome completo: {getNomeCompleto("Thiago", "Fernandes", "Zanon")} </Text> */}
      <Text style={styles.text}> Olá eu sou </Text>
      <TextInput style={{color: '#C80F60'}} defaultValue = "Digite seu nome"/>
      <Header/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitulo: {
    color: 'white',
    fontSize: 30,
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
    color: 'white',
  },
  navbar: {
    backgroundColor: '#fff',
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    color: 'white',
  }
});