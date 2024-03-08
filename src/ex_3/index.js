import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native-web';

import styles from './styles';

export default function Exemplo_3 (){

    const [numero, setNumero] = useState(0)};

    function Ola (nome) {
        alert(`Ola ${nome}`);

        function incremento(){
            numero++;
            // console.log(numero);
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <TouchableOpacity style={styles.botao}
            onPress={() => Ola('José')}
            >
                <Text style={styles.txtbotao}>Botao</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}> Valor: {numero}</Text>

                <TouchableOpacity style={styles.botao}
                onPress={() => incremento()}
            >
                <Text style={styles.txtbotao}>+ 1</Text>
                </TouchableOpacity>
        </View>
    )
}