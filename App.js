import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as React from 'react';

// import Index from './src/atividade_1';

// import Atividade_1 from './src/atividade_3';

// import Exemplo_04 from './src/ex_4';

import Index from './src/atividade_4';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
