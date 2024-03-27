import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, FlatList, TextInput, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';

function Header(){
  return(
    <Text style={styles.navbar}> Jifena 2024 - Ficha de Cadastro</Text>
  )
}
  
function Footer(){
  return(
    <Text style={styles.footer}>footer</Text>
  )
}

const Clickavel = (props) => {
  const [isClicked, setIsClicked] = useState(true)
  return(
    <View>
      <Text> Esse é {props.nome} - {isClicked ? "Clique-me": "Clickado"} </Text>
      <Button onPress={() => {
        setIsClicked(false)
      }}
      disabled={!isClicked}
      title={isClicked ? "Clique-me": "obrigado"}
      />
    </View>
  )
}
  
  export default function App() {
    const [text, setText] = useState('');
  return (
    <ScrollView style={styles.container}>
      {/* <Header/> 
      <Clickavel nome="Botão 1"/>
      <Clickavel nome="Botão 2"/> */}
      <Text style={{textAlign: "center", backgroundColor: "grey", fontWeight: "bold"}}>Pizza Tradutor</Text>
      <TextInput style={{height: 40, borderWidth: 1}} placeholder='Digite algo para traduzir!' onChangeText={newText => setText(newText)} defaultValue={text}/>
      <Text style={{padding: 10, fontSize: 42}}> {text.split(' ').map((word) => word && '🍕').join(' ')} </Text>

      <Text> FlatList Example </Text>
      <FlatList data={[
        {key: 'Ana'}, {key: 'Joana'}, {key: 'Camila'}, {key: 'Flavia'}, {key: 'Julye'}, {key: 'Juliana'}, {key: 'Luara'}, {key: 'Manuela'}]}
        renderItem={({item}) => <Text style={styles.Item}>{item.key}</Text>}/>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
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
  }
});