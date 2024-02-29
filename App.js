import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Index from './src/atividade_1';

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
    backgroundColor: '#90CAF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
