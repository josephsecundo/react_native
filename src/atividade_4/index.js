import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default function Index() {

    const [textoEscrito, setTextoEscrito] = useState('Texto programado');
  return (
    <View style={styles.container}>
        <Text style={style.paragraph}>
        Exemplo 4
        </Text>
        <Text style={styles.txtSaida}>
        {textoEscrito}
        </Text>


        <TextInput style={styles.txtEntrada}
        onChangeText={(entrada) => setTextoEscrito(entrada)}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCDD2',
    alignItems: 'center',
    padding: 8,
  },
  paragraph:{
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#B71C1C',  
  },

  txtSaida:{
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E53935',
  },
  txtEntrada:{
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 22,
    borderColor: '#B71C1C',
    height: 40,
    color: '#E53935',
    borderRadius: 10,
  },
});
