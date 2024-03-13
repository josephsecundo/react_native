import { useState } from 'react';
import { View, Text, Pressable  } from 'react-native';

import styles from './styles';

export default function Exemplo_3 () {

    const [numero, setNumero] = useState(0);

    function Ola(nome) {
        alert(`Ola ${nome}`);
    }

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
        console.log(numero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <Pressable  style={styles.botao}
                onPress={() => Ola('José')}
            >
                <Text style={styles.txtbotao}>Botao</Text>
            </Pressable >

            <Text style={styles.titulo}>Valor: {numero}</Text>

            <Pressable  style={styles.botao}
                onPress={() => incremento()}
            >
                <Text style={styles.txtbotao}>+ 1</Text>
            </Pressable >
        </View>
    );

}
