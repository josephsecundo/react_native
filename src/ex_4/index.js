import { useState } from "react";
import { View,Text, TextInput, Pressable } from "react-native";
import styles from './styles';

export default function Exemplo_04(){

    const [mensagem, setMensagem] = useState('Sua mensagem aqui!');
    const [mens2, setMens2] = useState('Outra mensagem');
    const [mensTela, setMensTela] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_04 </Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <TextInput
                style={styles.txtEntrada}
                placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMensagem(txt)}
            />

            <Text style={styles.txtSaida}>{mensTela}</Text>    

            <TextInput
                style={styles.txtEntrada}
                placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMens2(txt)}
            />

            {/* <Text style={styles.txtSaida}>{mensTela}</Text>

            <TextInput
                style={styles.txtEntrada}
                placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMens2(txt)}
            /> */}

            <Pressable onPress={() => setMensTela(mens2)}>
                <Text>Exibir mensagem.</Text>
            </Pressable>

        </View>
    )
}