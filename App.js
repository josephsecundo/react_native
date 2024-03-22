import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Index from './src/atividade_1';

// import Atividade_1 from './src/atividade_3';

import Exemplo_04 from './src/ex_4';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Exemplo_04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90CAF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
