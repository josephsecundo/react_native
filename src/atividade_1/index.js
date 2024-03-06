import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import styles from './styles.js';

export default function index(){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/react-native.png')}
            style={styles.image}/>
        <Text style={styles.titulo}>
            Exemplo 2           
        </Text>
        </View>
    );
}
