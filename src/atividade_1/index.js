import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import logo from '../assets/react-native.png';


export default function Index(){
    return (
        <View style={StyleSheet.container}>
        <Image source={logo} style={{width: '100%', height: '15%' }}/>
        <Text style={Styles.paragraph}>
            Exemplo 2           
        </Text>
        </View>
    );
}
