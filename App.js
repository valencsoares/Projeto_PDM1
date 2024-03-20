import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';

/* const getNomeCompleto = (primeiro, segundo, terceiro) => {
  return primeiro.charAt(0) + " " + segundo.charAt(0) + " " + terceiro.charAt(0) + "."
} */ //charAt pega o primeiro indíce

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

function BarraDeEscrita(){
  return(
    <TextInput style={{color: '#fff', borderWidth: 1, borderColor: '#989898', marginBottom: 15, marginTop: 5}} placeholder = "Digite aqui"/>
  )
}

const DetalhaProduto = (props) => {
  const [isClicked, ]
  return(
    <View style={{borderWidth: 1, width: '15%', borderColor: '#989898'}}>
      <Image style={styles.logo} source={{uri:props.url}} />
      <Text style={styles.text}>Produto: {props.nome}</Text>
      <Text style={styles.text}>Marca: {props.marca}</Text>
      <Text style={styles.text}>Preço: {props.preco}</Text>
      <Text style={styles.text}>Quantidade: {props.estoque}</Text>
    </View>
  )
}
  
  export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      {/* <Image style={styles.logo} source={{uri: 'https://i.pinimg.com/564x/b8/1e/55/b81e55b2571a7266083cc8bf4c7c0dd2.jpg'}}/> */}
      {/* <Text style={styles.text}>Nome completo: {getNomeCompleto("Thiago", "Fernandes", "Zanon")} </Text>
      <Text style={styles.text}> Olá eu sou </Text>
      <TextInput style={{color: '#C80F60'}} defaultValue = "Digite seu nome"/>
      <StatusBar style="auto" /> */}
      {/* <Text style={styles.text}>Nome</Text>
      <BarraDeEscrita/>
      <Text style={styles.text}>Idade</Text>
      <BarraDeEscrita/>
      <Text style={styles.text}>Sexo</Text>
      <BarraDeEscrita/>
      <Text style={styles.text}>Curso</Text>
      <BarraDeEscrita/>
      <Text style={styles.text}>Período</Text>
      <BarraDeEscrita/> */}

      <DetalhaProduto url="https://i.pinimg.com/564x/ae/f9/ed/aef9ed10bbb9dc84c1f5c872197e6cb9.jpg" nome="Mochila" marca="Dell" preco="R$250,00" estoque={100}/>
      <DetalhaProduto url="https://i.pinimg.com/564x/f4/12/c3/f412c39b000a3da88654f5bbae348bc7.jpg" nome="Controle" marca="Xbox" preco="R$150,00" estoque={57}/>
      <DetalhaProduto url="https://i.pinimg.com/564x/c8/f2/85/c8f285a6b6825f196db49e3eb8397788.jpg" nome="Fone" marca="CatFone" preco="R$200,00" estoque={150}/>
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